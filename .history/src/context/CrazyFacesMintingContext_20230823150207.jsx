import { createContext, useContext, useEffect, useState } from 'react';
import { CRAZYFACES_MINTING_CONTRACT_ADDRESS as CONTRACT_ADDRESS } from '../constants'

const CrazyFacesMintingContext = createContext()

export const CrazyFacesMintingProvider = ({ provider, signer, userWallet, children }) => {

    const CRAZYFACES_MINTING_CONTRACT_ADDRESS = CONTRACT_ADDRESS

    return(
        <CrazyFacesMintingContext.Provider value={{
            CRAZYFACES_MINTING_CONTRACT_ADDRESS
        }}>
            {children}
        </CrazyFacesMintingContext.Provider>
    )
}

export const useCrazyFacesMinting = () => useContext(CrazyFacesMintingContext)