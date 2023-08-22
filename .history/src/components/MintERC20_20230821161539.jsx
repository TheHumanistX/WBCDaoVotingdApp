import { useState } from 'react'
import { useTurtleCatCoin } from '../context'

const MintERC20 = () => {

    const { turtleCatCoinContract } = useTurtleCatCoin();

    const [userCanMint, setUserCanMint] = useState(false);

    const checkIfUserCanMint = async () => {
        if (turtleCatCoinContract) {
            const userCanMint = await turtleCatCoinContract.userCanMint();
            console.log('userCanMint', userCanMint);
        }
    }

  return (
    <div className='mint-erc20__flex'>
      
    </div>
  )
}

export default MintERC20
