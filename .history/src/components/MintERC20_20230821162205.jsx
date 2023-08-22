import { useEffect, useState } from 'react'
import { useEthers, useTurtleCatCoin } from '../context'

const MintERC20 = () => {
    const { userWallet } = useEthers()
    const { turtleCatCoinContract } = useTurtleCatCoin()

    const [userCanMint, setUserCanMint] = useState(false)

    useEffect(() => {
        const checkIfUserCanMint = async () => {
            if (turtleCatCoinContract) {
                const userCanMint = await turtleCatCoinContract.checkIfUserCanMint(userWallet)
                console.log('userCanMint', userCanMint)
                setUserCanMint(userCanMint)
            }
        }

        checkIfUserCanMint()
    }, [userWallet])

    return (
        <div className='mint-erc20__flex'>
            {userCanMint ? (
                'User can Mint'
            ):
                (
                    'User already minted'
                )
            }
        </div>
    )
}

export default MintERC20
