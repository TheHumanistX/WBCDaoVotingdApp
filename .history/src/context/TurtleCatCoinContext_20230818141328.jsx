import { createContext, useContext, useEffect, useState } from 'react'
import { TURTLECAT_COIN_CONTRACT_ADDRESS } from '../constants'

const TurtleCatCoinContext = createContext()

export const TurtleCatCoinProvider = ({ provider, signer, userWallet, children }) => {

    const turtleCatCoinContractAddress = TURTLECAT_COIN_CONTRACT_ADDRESS;

    useEffect(() => {

    }, [])

    return(
        <TurtleCatCoinContext.Provider value={{}}>
            {children}
        </TurtleCatCoinContext.Provider>
    )
}

export const useTurtleCatCoin = () => useContext(TurtleCatCoinContext);