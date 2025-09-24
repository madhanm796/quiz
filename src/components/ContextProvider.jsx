import React  from 'react'
import { createContext } from 'react'

export const AppContext = createContext();

function ContextProvider({children}) {

    const apiUrl = 'https://quiz-backend-phpf.onrender.com/api';
    

  return (
    <AppContext.Provider value={{apiUrl}}>
        {children}
    </AppContext.Provider>  
  )
}

export default ContextProvider