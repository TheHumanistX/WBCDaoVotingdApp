import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CRAZYFACES_CONTRACT_ADDRESS as CONTRACT_ADDRESS } from '../constants'
import { crazyFacesABI } from '../abi'

const CrazyFacesContext = createContext()

export const CrazyFacesProvider = ({ provider, signer, userWallet, children }) => {
    const CRAZYFACES_CONTRACT_ADDRESS = CONTRACT_ADDRESS;

    const [crazyFacesContract, setCrazyFacesContract] = useState(null)
    const [userNFTBalance, setUserNFTBalance] = useState(null);
    const [lastNFTMintedId, setLastNFTMintedId] = useState(null);
    const [nftContractName, setNFTContractName] = useState(null);

    useEffect(() => {
        if (provider && signer && userWallet) {
            const initializeCrazyFacesNFTData = async () => {

                try {
                    if (provider && signer && userWallet) {
                        const crazyFacesContract = new ethers.Contract(CRAZYFACES_CONTRACT_ADDRESS, crazyFacesABI, signer)
                        console.log('crazyFacesContract: ', crazyFacesContract);
                        setCrazyFacesContract(crazyFacesContract)
                        const userNFTBalance = await crazyFacesContract.balanceOf(userWallet)
                        setUserNFTBalance(userNFTBalance.toNumber())
                        // const lastNFTMintedI
                    }
                } catch (err) {
                    console.error('An error occurred in CrazyFacesContext: ', err)
                }
            }
        }

        initializeCrazyFacesNFTData()
    }, [provider, signer])


    return (
        <CrazyFacesContext.Provider value={{
            CRAZYFACES_CONTRACT_ADDRESS,
            crazyFacesContract,
            userNFTBalance,
            lastNFTMintedId,
            nftContractName,
        }}>
            {children}
        </CrazyFacesContext.Provider>
    )
}

export const useCrazyFaces = () => useContext(CrazyFacesContext);