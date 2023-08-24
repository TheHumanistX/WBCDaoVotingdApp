import { createContext, useContext, useEffect, useState } from 'react';
import { WRAPPED_CRAZYFACES_CONTRACT_ADDRESS } from '../constants'

const WrappedContext = createContext()

export const WrappedProvider = ({ provider, signer, userWallet, children }) => {


    return(
        <WrappedContext.Provider value={{}}>
            {children}
        </WrappedContext.Provider>
    )

}

export const useWrapped = () => useContext(WrappedContext);