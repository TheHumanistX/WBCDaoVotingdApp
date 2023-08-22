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
        <section className='mint-erc20__flex'>
            <div className='mint-erc20__text'>
                Mint TurtleCat Coin Here
            </div>
            {userCanMint ? (
                <button className='mint-erc20__button'>MINT</button>
            ):
                (
                    'User already minted'
                )
            }
        </section>
    )
}

export default MintERC20
