import React, { useState, createContext } from 'react'


export const UserContext  = createContext(null)

const UseContextApi = ({children}) => {
  const [showdisplay, setShowDisplay] = useState(false)


  console.log('Inside useContextApi', showdisplay)
  return (
    <UserContext.Provider value={{showdisplay,setShowDisplay}}>
      {children}
    </UserContext.Provider>
  )
}

export default UseContextApi