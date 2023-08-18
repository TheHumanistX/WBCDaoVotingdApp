import { createContext, useContext, useEffect, useState } from 'react'
import { TURTLECAT_COIN_CONTRACT_ADDRESS as CONTRACT_ADDRESS } from '../constants'
import { turtleCatABI } from '../abi'
import { ethers } from 'ethers'

const TurtleCatCoinContext = createContext()

export const TurtleCatCoinProvider = ({ provider, signer, userWallet, children }) => {

    const TURTLECAT_COIN_CONTRACT_ADDRESS = CONTRACT_ADDRESS;

    const [turtleCatCoinContract, setTurtleCatCoinContract] = useState(null)

    useEffect(() => {
        if (provider && signer) {
            const turtleCatCoinContract = new ethers.Contract(TURTLECAT_COIN_CONTRACT_ADDRESS, turtleCatABI, signer);
            setTurtleCatCoinContract(turtleCatCoinContract)
        }

    }, [provider, signer])

    return(
        <TurtleCatCoinContext.Provider value={{}}>
            {children}
        </TurtleCatCoinContext.Provider>
    )
}

export const useTurtleCatCoin = () => useContext(TurtleCatCoinContext);