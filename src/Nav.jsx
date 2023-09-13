import { Link , Outlet} from 'react-router-dom'
import  { Theme } from './Context'
import { useContext } from 'react'
const Nav = () => {
 const {theme,toggleTheme} = useContext(Theme)

  return (
    <section className='w-full fixed' style={{backgroundColor: theme === 'light' ? 'white': 'black'}}>
        <div className='w-[80%] m-auto flex justify-between items-center p-5' style={
              {
                backgroundColor: theme === 'light' ? 'white': 'black',
                color: theme === 'light'? 'black': 'white'
                }}>
          <ul className='flex gap-10'>
            <li className={theme === 'light' ? 'hover:bg-[#d6d6d6] p-1 hover:rounded-md' : 'hover:bg-[#141414] p-1 hover:rounded-md'}>
              <Link to ='/'>Home</Link>
            </li>
            <li className={theme === 'light' ? 'hover:bg-[#d6d6d6] p-1 hover:rounded-md' : 'hover:bg-[#141414] p-1 hover:rounded-md'}>
              <Link to ='/about'>About</Link>
            </li>
            <li className={theme === 'light' ? 'hover:bg-[#d6d6d6] p-1 hover:rounded-md' : 'hover:bg-[#141414] p-1 hover:rounded-md'}>
              <Link to ='/contacts'>Contacts</Link>
            </li>
          </ul>
          <Outlet />
          <button className={theme === 'light' ? 'hover:bg-[#b6b5b5] p-1 hover:rounded-md' : 'hover:bg-[#141414] p-1 hover:rounded-md'} onClick={() => toggleTheme()}>Dark Mode</button>
        </div>
    </section>
  )
}

export default Nav