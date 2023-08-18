import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CRAZYFACES_CONTRACT_ADDRESS as CONTRACT_ADDRESS } from '../constants'
import { crazyFacesABI } from '../abi'

const CrazyFacesContext = createContext()

export const CrazyFacesProvider = ({ provider, signer, userWallet, children }) => {
    const CRAZYFACES_CONTRACT_ADDRESS = CONTRACT_ADDRESS;

    const [crazyFacesContract, setCrazyFacesContract] = useState(null)

    useEffect(() => {
        const crazyFacesContract = new ethers.Contract(CRAZYFACES_CONTRACT_ADDRESS, crazyFacesABI, signer)
        setCrazyFacesContract(crazyFacesContract
    }, [provider, signer])


    return(
        <CrazyFacesContext.Provider value={{}}>
            {children}
        </CrazyFacesContext.Provider>
    )
}

export const useCrazyFaces = () => useContext(CrazyFacesContext);