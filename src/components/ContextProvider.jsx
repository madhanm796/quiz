import React  from 'react'
import { createContext } from 'react'

export const AppContext = createContext();

function ContextProvider({children}) {

    const apiUrl = 'http://localhost:3000/api';
    

  return (
    <AppContext.Provider value={{apiUrl}}>
        {children}
    </AppContext.Provider>  
  )
}

export default ContextProvider