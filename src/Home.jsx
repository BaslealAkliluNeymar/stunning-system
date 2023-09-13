import { useContext } from 'react'
import {Theme} from './Context'
const Home = () => {
  const { theme } = useContext(Theme)
  return (
    <section style={
      {
        backgroundColor: theme === 'light' ? 'white': '#141414',
        color: theme === 'light'? '#141414': 'white'
        }} className="w-full mt-[92px]"> 
        <div className="container flex justify-between gap-1 p-2 w-[80%] m-auto h-[100vh]">
          <div className='mt-10'>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sapiente!</span>
            <h1 className='mt-10 text-[100px] w-[60%]'>
              Financial Tracking Platfrom
            </h1>
          </div>
          <div className='mt-20 px-2'>
            <img src='src\assets\ali.jpg' className='object-cover w-[1250px] '/>
          </div>
        </div>
        <div className='secondContainer h-screen w-[80%] m-auto'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolores reiciendis nemo,
             deleniti suscipit temporibus modi repellat? Soluta itaque, error labore asperiores deleniti 
             fugit optio, sint aperiam similique dicta cum temporibus voluptates dolorem quidem? Laborum
              delectus nisi distinctio nulla explicabo, sapiente quia eaque. Nihil porro voluptas vitae 
              et nisi ipsam, corrupti sit quis! Cupiditate impedit nemo aperiam natus provident quisquam
               eaque perspiciatis, accusamus optio reiciendis, repellat autem ipsum dicta in beatae dele
               ctus doloribus odio enim iure culpa totam fuga commodi. Nostrum similique officia, quia 
               laudantium, reprehenderit natus odio sunt deserunt molestiae aspernatur nam perspiciatis
                est id laboriosam harum maiores magnam? Distinctio recusandae facilis est cupiditate nisi
                 labore mollitia, iure quae odio soluta eius accusantium explicabo expedita, commodi libe
                 ro temporibus neque nam, hic tenetur accusamus nobis nesciunt. Vitae optio consectetur 
                 labore quod magni pariatur accusamus illum necessitatibus modi quas repellendus vel liber
                 o minima ullam officiis nam numquam, eum est dolorem illo iusto accusantium corporis id 
                 maiores! Ullam tenetur perspiciatis magni. Ex, distinctio odio. Veniam distinctio recus
                 andae obcaecati minima optio quo ipsa reprehenderit aperiam, architecto perspiciatis adipisci
                  incidunt itaque labore dolorum soluta ut consectetur enim velit rem. Obcaecati, aliquid aspernatur asper
                  iores fuga explicabo laborum neque ipsam facilis quas, quos nulla veritatis vitae tempore eveniet nemo m
                  agnam dolore dolorem itaque ullam quae expedita nesciunt! Ea provident deleniti quos possimus quas alias.
                   Fugiat modi voluptatum ratione molestias aperiam asperiores possimus sequi repudiandae! Dicta debitis atq
                   ue laudantium adipisci aliquam fugit voluptates magnam expedita doloribus consectetur voluptatum nesciunt
                    sit, commodi neque officiis eaque id dolorem accusantium quia. Repudiandae amet enim autem sapiente tempora consectetur sed eaque aliquid. Commodi necessitatibus illo fuga laborum reiciendis magni voluptates error eligendi voluptatem delectus tempora expedita quibusdam dicta dolore hic, quasi excepturi adipisci voluptate. Voluptate quia ex, soluta nisi possimus doloribus error placeat ducimus dolorum iste omnis. Sunt asperiores enim sint ipsam? Mollitia, eligendi delectus obcaecati non possimus repellat commodi ab ipsam, ad assumenda libero incidunt voluptates iste rerum quasi asperiores earum harum minima quam aperiam. Doloribus enim ad ducimus maiores. Libero alias nulla repudiandae quam ut explicabo!
             Omnis quaerat molestias velit, neque tenetur ducimus minus vitae laboriosam! Impedit, possimus vel!</p>
        </div>
    </section>
  )
}

export default Home
