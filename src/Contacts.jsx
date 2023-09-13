import { Theme } from "./Context"
import { useContext , useReducer } from "react"

const initialState = {color:'black'}

const reducer = (state,action) =>{
  switch(action){
    case 'red':
      return {color:'#ff4343'}
    case 'blue':
      return {color : '#3333be'}
    case 'Navy':
      return {color : '#37373d'}
    default:
      return {color : 'black'}
  }
  
}
const Contacts = () => {
  const {theme} = useContext(Theme)
  const [state,dispatch] = useReducer(reducer,initialState)
  console.log(state)
  return (
    <section className="w-full mt-[92px]" style={{
        backgroundColor: theme === 'light' ? 'white': '#141414',
        color: theme === 'light'? '#141414': 'white'
        }}>
      <div className="h-[100vh] w-[80%] m-auto">
        <p className="p-5" style={state}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente inventore saepe. Nam accusantium doloremque
          pariatur soluta corrupti magnam incidunt in earum molestias cumque alias,
          ipsam repellendus quam eligendi maiores sequi voluptates. Odio fugiat libero asperiores quisquam enim ipsam a!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cupiditate ut eligendi sed omnis consectetur impedit
          veniam reprehenderit deleniti modi, natus architecto quae delectus rem corrupti eveniet. Aut, quaerat quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores necessitatibus nemo itaque velit, vel 
          a dicta, illo omnis labore odio eos! Optio, nostrum officia quia quisquam cum autem molestias id.

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente inventore saepe. Nam accusantium doloremque
          pariatur soluta corrupti magnam incidunt in earum molestias cumque alias,
          ipsam repellendus quam eligendi maiores sequi voluptates. Odio fugiat libero asperiores quisquam enim ipsam a!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cupiditate ut eligendi sed omnis consectetur impedit
          veniam reprehenderit deleniti modi, natus architecto quae delectus rem corrupti eveniet. Aut, quaerat quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores necessitatibus nemo itaque velit, vel 
          a dicta, illo omnis labore odio eos! Optio, nostrum officia quia quisquam cum autem molestias id.


          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sapiente inventore saepe. Nam accusantium doloremque
          pariatur soluta corrupti magnam incidunt in earum molestias cumque alias,
          ipsam repellendus quam eligendi maiores sequi voluptates. Odio fugiat libero asperiores quisquam enim ipsam a!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cupiditate ut eligendi sed omnis consectetur impedit
          veniam reprehenderit deleniti modi, natus architecto quae delectus rem corrupti eveniet. Aut, quaerat quas.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores necessitatibus nemo itaque velit, vel 
          a dicta, illo omnis labore odio eos! Optio, nostrum officia quia quisquam cum autem molestias id.
        </p>
      </div>

      <div className="flex justify-between flex-1 p-5 w-[80%] m-auto">
        <button className="bg-[#ff4343] p-2 rounded-[10px] w-[25%]" onClick={() => dispatch('red')}>Red</button>
        <button className="bg-[#3333be] p-2 rounded-[10px] w-[25%]" onClick={() => dispatch('blue')}>Blue</button>
        <button className="bg-[#37373d] p-2 rounded-[10px] w-[25%]" onClick={() => dispatch('Navy')}>Navy</button>
      </div>
    </section>
    
  )
}

export default Contacts