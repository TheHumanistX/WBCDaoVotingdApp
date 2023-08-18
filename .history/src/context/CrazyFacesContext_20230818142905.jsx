import { createContext, useContext, useEffect, useState } from 'react';
import { CRAZYFACES_CONTRACT_ADDRESS as CONTRACT_ADDRESS } from '../constants'
import { crazyFacesABI } from '../abi'

const CrazyFacesContext = createContext()

export const CrazyFacesProvider = ({ provider, signer, userWallet, children }) => {
    const CRAZYFACES_CONTRACT_ADDRESS = CONTRACT_ADDRESS;

    const [crazyFacesContract, setCrazyFacesContract] = useState(null)

    useEffect(() => {

    }, [provider, signer]])


    return(
        <CrazyFacesContext.Provider value={{}}>
            {children}
        </CrazyFacesContext.Provider>
    )
}

export const useCrazyFaces = () => useContext(CrazyFacesContext);