import { createContext, useContext, useEffect, useState } from 'react';
import { CRAZYFACES_MINTING_CONTRACT_ADDRESS as CONTRACT_ADDRESS } from '../constants'

const CrazyFacesMintingContext = createContext()

export const CrazyFacesMintingProvider = ({ provider, signer, userWallet, children }) => {

    const [nftMintPrice, setNFTMintPrice] = useState(null)
    const CRAZYFACES_MINTING_CONTRACT_ADDRESS = CONTRACT_ADDRESS

    useEffect(() => {
        if (provider && signer && userWallet) {
            const initializeCrazyFacesMintingData = async () => {

            }

            initializeCrazyFacesMintingData()
        }
    },[])

    return(
        <CrazyFacesMintingContext.Provider value={{
            CRAZYFACES_MINTING_CONTRACT_ADDRESS
        }}>
            {children}
        </CrazyFacesMintingContext.Provider>
    )
}

export const useCrazyFacesMinting = () => useContext(CrazyFacesMintingContext)