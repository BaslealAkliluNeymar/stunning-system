import {createContext ,useState} from 'react'

export const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme,setTheme] = useState('light')
  const toggleTheme = () =>{
    setTheme(theme === 'light'? 'dark': 'light')
  }
  return (
    <Theme.Provider value={{theme ,toggleTheme}}>
        { children }
    </Theme.Provider>
  )
}


