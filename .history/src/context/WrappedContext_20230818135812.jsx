import { createContext, useContext, useEffect, useState } from 'react';
import { WRAPPED_CRAZYFACES_CONTRACT_ADDRESS } from '../constants'

const WrappedContext = createContext()

const WrappedProvider = ({ children }) => {


    return(
        <WrappedContext.Provider value={{}}>
            {children}
        </WrappedContext.Provider>
    )

}