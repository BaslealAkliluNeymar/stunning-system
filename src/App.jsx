import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Contacts from './Contacts'
import Home from './Home'
import {ThemeProvider} from './Context'
const App = () => {

  return (
    <section className='flex flex-col gap-[2px]'>
      <Router>
        <ThemeProvider >
            <Nav />
            <Routes>
                <Route path = '/' element={<Home />}/>
                <Route path = '/about' element={<About />}/>
                <Route path = '/contacts' element={<Contacts />}/>
            </Routes>
        </ThemeProvider>
      </Router>
    </section>
  )
}

export default App