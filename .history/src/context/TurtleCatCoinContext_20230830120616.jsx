import { createContext, useContext, useEffect, useState } from 'react'
import { TURTLECAT_COIN_CONTRACT_ADDRESS as CONTRACT_ADDRESS } from '../constants'
import { turtleCatABI } from '../abi'
import { ethers } from 'ethers'

const TurtleCatCoinContext = createContext()

export const TurtleCatCoinProvider = ({ provider, signer, userWallet, children }) => {

    const TURTLECAT_COIN_CONTRACT_ADDRESS = CONTRACT_ADDRESS;

    const [turtleCatCoinContract, setTurtleCatCoinContract] = useState(null)
    const [userCanMint, setUserCanMint] = useState(null)
    const [userERC20Balance, setUserERC20Balance] = useState(null)
    const [useEffectTrigger, setUseEffectTrigger] = useState(false)

    useEffect(() => {
        console.log('TurtleCatCoinContext - useEffect running...')
        console.log('TurtleCatCoinContext - useEffectTrigger: ', useEffectTrigger)
        if (provider && signer && userWallet) {
            const initializeTurtleCatCoinData = async () => {
                const turtleCatCoinContract = new ethers.Contract(TURTLECAT_COIN_CONTRACT_ADDRESS, turtleCatABI, signer);
                setTurtleCatCoinContract(turtleCatCoinContract)
                const userCanMint = await turtleCatCoinContract.checkIfUserCanMint(userWallet)
                console.log('TurtleCatCoinContext - userCanMint: ', userCanMint)
                setUserCanMint(userCanMint);
                const userERC20Balance = await turtleCatCoinContract.balanceOf(userWallet)
                console.log('TurtleCatCoinContext - userERC20Balance: ', userERC20Balance)
                setUserERC20Balance(ethers.utils.formatEther(userERC20Balance))
            }

            initializeTurtleCatCoinData()
        }

    }, [provider, signer, useEffectTrigger, userWallet])

    return(
        <TurtleCatCoinContext.Provider value={{
            setUseEffectTrigger,
            TURTLECAT_COIN_CONTRACT_ADDRESS,
            turtleCatCoinContract,
            useEffectTrigger,
            userCanMint,
            userERC20Balance
        }}>
            {children}
        </TurtleCatCoinContext.Provider>
    )
}

export const useTurtleCatCoin = () => useContext(TurtleCatCoinContext);