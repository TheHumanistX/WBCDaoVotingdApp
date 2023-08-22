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
      <div className='mint-nft__text'>
                MINT NFT HERE
            </div>
    </section>
  )
}

export default MintNFT
