import { createContext, useContext, useEffect, useState} from 'react'
import { CRAZYFACES_DAO_CONTRACT_ADDRESS } from '../constants'

const DaoContext = createContext()

export const DaoProvider = ({ children }) => {

    const test = 'Hello, world!'

    return (
        <DaoContext.Provider value={{
            test
        }}>
            {children}
        </DaoContext.Provider>
    )
}

export const useDao = () => useContext(DaoContext);