import { useContext , useEffect , useState} from "react"
import { Theme } from "./Context"
import {API_KEY} from './config'

const Render = () => {
  const [img, setImg] = useState([])
  const [query,setQuery] = useState()
  console.log(API_KEY)
  useEffect(()=>{
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
            Authorization: API_KEY,
          },
    })
    .then(res => res.json())
    .then(data => setImg(data.photos))
  },[query])
  const {theme} = useContext(Theme)
  function ImageQuery(e){
    setQuery(e.target.value)
  }
  console.log(img)
  return (
    <section style={
        {
          backgroundColor: theme === 'light' ? 'white': '#141414',
          color: theme === 'light'? '#141414': 'white'
          }} className="w-full  mt-[92px] max-h-full">
        <div>
            <div className="container w-[80%] m-auto flex gap-5">
                <label >Search Images</label>
                <input type="text" value={query} onChange={ImageQuery}/>
            </div>
            <div className="container flex justify-between gap-5 p-2 w-[80%] m-auto h-[100vh] flex-wrap">
                {
                    img.map((photo,index) =>( 
                      <div key={index} className={`bg-[url('${photo.src.tiny}')]`} >
                        <img src={photo.src.medium} loading="lazy" className="w-[275px] h-[325px] rounded-sm object-cover"  />
                      </div>
                    ))
                }
            </div>   

        </div>
    </section>
  )
}

export default Render