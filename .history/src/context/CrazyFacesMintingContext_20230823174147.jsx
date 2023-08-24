import { createContext, useContext, useEffect, useState } from 'react';
import { CRAZYFACES_MINTING_CONTRACT_ADDRESS as CONTRACT_ADDRESS } from '../constants'
import { crazyFacesMintingABI } from '../abi'
import { ethers } from 'ethers'

const CrazyFacesMintingContext = createContext()

export const CrazyFacesMintingProvider = ({ provider, signer, userWallet, children }) => {

    const [crazyFacesMintingContract, setCrazyFacesMintingContract] = useState(null)
    const [nftMintPrice, setNFTMintPrice] = useState(null)
    const CRAZYFACES_MINTING_CONTRACT_ADDRESS = CONTRACT_ADDRESS
    
    useEffect(() => {
        if (provider && signer && userWallet) {
            const initializeCrazyFacesMintingData = async () => {
                const crazyFacesMintingContract = new ethers.Contract(CRAZYFACES_MINTING_CONTRACT_ADDRESS, crazyFacesMintingABI, signer)
                // console.log('crazyFacesMintingContract: ', crazyFacesMintingContract);
                setCrazyFacesMintingContract(crazyFacesMintingContract)
                const signatureWithoutArgs = "getWBCPrice()";
                const crazyFacesNFTPrice = await crazyFacesMintingContract.functions[signatureWithoutArgs]();
                console.log('CrazyFacesMintingContext - crazyFacesNFTPrice: ', crazyFacesNFTPrice)
                setNFTMintPrice(crazyFacesNFTPrice)
                // const lastNFTMintedI
            }

            initializeCrazyFacesMintingData()
        }
    },[userWallet, provider, signer, CRAZYFACES_MINTING_CONTRACT_ADDRESS])

    return(
        <CrazyFacesMintingContext.Provider value={{
            CRAZYFACES_MINTING_CONTRACT_ADDRESS,
            crazyFacesMintingContract,
            nftMintPrice
        }}>
            {children}
        </CrazyFacesMintingContext.Provider>
    )
}

export const useCrazyFacesMinting = () => useContext(CrazyFacesMintingContext)