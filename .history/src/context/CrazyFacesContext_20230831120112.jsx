import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CRAZYFACES_CONTRACT_ADDRESS as CONTRACT_ADDRESS } from '../constants'
import { crazyFacesABI } from '../abi'

const CrazyFacesContext = createContext()

export const CrazyFacesProvider = ({ provider, signer, userWallet, children }) => {
    const CRAZYFACES_CONTRACT_ADDRESS = CONTRACT_ADDRESS;

    const [crazyFacesContract, setCrazyFacesContract] = useState(null)
    const [userNFTBalance, setUserNFTBalance] = useState(null);
    const [nftContractName, setNFTContractName] = useState(null); // ! MAY NOT NEED THIS??

    useEffect(() => {
        try {
            if (provider && signer) {
                const crazyFacesContract = new ethers.Contract(CRAZYFACES_CONTRACT_ADDRESS, crazyFacesABI, signer)
                setCrazyFacesContract(crazyFacesContract)
                const userNFTBalance = crazyFacesContract?.balanceOf(userWallet)
                setUserNFTBalance(userNFTBalance)
            }
        } catch (err) {
            console.error('An error occurred in CrazyFacesContext: ', err)
        }
    }, [provider, signer])


    return (
        <CrazyFacesContext.Provider value={{
            CRAZYFACES_CONTRACT_ADDRESS,
            crazyFacesContract,
            userNFTBalance,
            nftContractName,
        }}>
            {children}
        </CrazyFacesContext.Provider>
    )
}

export const useCrazyFaces = () => useContext(CrazyFacesContext);