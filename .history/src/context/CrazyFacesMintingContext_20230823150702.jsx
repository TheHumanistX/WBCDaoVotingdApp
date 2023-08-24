import { createContext, useContext, useEffect, useState } from 'react';
import { CRAZYFACES_MINTING_CONTRACT_ADDRESS as CONTRACT_ADDRESS } from '../constants'
import ethers from 'ethers'

const CrazyFacesMintingContext = createContext()

export const CrazyFacesMintingProvider = ({ provider, signer, userWallet, children }) => {

    const [crazyFacesMintingContract, setCrazyFacesContract] = useState(null)
    const [nftMintPrice, setNFTMintPrice] = useState(null)
    const CRAZYFACES_MINTING_CONTRACT_ADDRESS = CONTRACT_ADDRESS

    useEffect(() => {
        if (provider && signer && userWallet) {
            const initializeCrazyFacesMintingData = async () => {
                const crazyFacesMintingContract = new ethers.Contract(CRAZYFACES_MINTING_CONTRACT_ADDRESS, crazyFacesMintingABI, signer)
                // console.log('crazyFacesMintingContract: ', crazyFacesMintingContract);
                // setCrazyFacesMintingContract(crazyFacesMintingContract)
                // const userNFTBalance = await crazyFacesMintingContract.balanceOf(userWallet)
                // setUserNFTBalance(userNFTBalance.toNumber())
                // const lastNFTMintedI
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