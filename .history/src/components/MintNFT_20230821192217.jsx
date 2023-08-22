import { useEffect, useState } from 'react'
import { useEthers, useTurtleCatCoin } from '../context'

const MintNFT = () => {
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
        <section className='mint-nft__flex'>
            <div className='mint-nft__title'>
                CrazyFaces NFTs
            </div>
            <p className='mint-nft__text'>
                {'If you have not minted any of the CrazyFaces NFTs with your current wallet, you may go ahead and do that below.\n One CrazyFace NFT costs 100 WBC.'}
            </p>
            {userCanMint ? (
                <button className='mint-erc20__button'>MINT</button>
            ) :
                (
                    'User already minted'
                )
            }
        </section>
    )
}

export default MintNFT
