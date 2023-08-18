import { createContext, useContext, useEffect, useState } from 'react';
import { CRAZYFACES_CONTRACT_ADDRESS } from '../constants'

const CrazyFacesContext = createContext()

export const CrazyFacesProvider = ({ provider, signer, userWallet, children }) => {

    return(
        <CrazyFacesContext.Provider value={{}}>
            {children}
        </CrazyFacesContext.Provider>
    )
}

export const useCrazyFaces = () => useContext(CrazyFacesContext);