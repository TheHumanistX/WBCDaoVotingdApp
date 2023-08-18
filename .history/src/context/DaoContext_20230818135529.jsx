import { createContext, useContext, useEffect, useState} from 'react'
import { CRAZYFACES_DAO_CONTRACT_ADDRESS } from '../constants'

const DaoContext = createContext()

export const DaoProvider = ({ children }) => {

    

    return (
        <DaoContext.Provider value={{
            
        }}>
            {children}
        </DaoContext.Provider>
    )
}

export const useDao = () => useContext(DaoContext);