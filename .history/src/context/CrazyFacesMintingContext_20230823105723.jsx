import { createContext, useContext, useEffect, useState } from 'react';
import { CRAZYFACES_MINTING_CONTRACT_ADDRESS } from '../constants'

const CrazyFacesMintingContext = createContext()

export const CrazyFacesMintingProvider = ({ provider, signer, userWallet, children }) => {

    return(
        <CrazyFacesMintingContext.Provider value={{}}>
            {children}
        </CrazyFacesMintingContext.Provider>
    )
}

export const useCrazyFacesMinting = () => useContext(CrazyFacesMintingContext)