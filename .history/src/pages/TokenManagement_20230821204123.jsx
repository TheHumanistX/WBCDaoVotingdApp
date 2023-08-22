import { TokenManagementOptions } from '../components'
import { useTurtleCatCoin } from '../context'

const TokenManagement = () => {

  const { userCanMint, userERC20Balance } = useTurtleCatCoin()

  // ! Maybe a util function or custom hook to enclose the three functions below?  Look back at marketplace to see how we did that there and see if we can do something similar here.
  // ! Want to create (if possible) a reuseable piece of code that can be passed needed information to handle all three functions, preferably.

  const handleWBCMint = () => {
    console.log('Clicked on WBC Mint')
    if (userCanMint) {
      console.log('User can mint')

    }
  }

  const handleNFTMint = () => {
    console.log('Clicked on NFT Mint')
  }

  const handleNFTWrap = () => {
    console.log('Clicked on NFT Wrap')
  }

  const TOKEN_MANAGEMENT_MAP = [
    {
      title: 'TurtleCat Coin (WBC)',
      text: 'If you have not minted any of the WBC token with your current wallet, you may go ahead and do that below. You will need WBC to mint CrazyFaces NFTs.',
      buttonText: 'MINT',
      handleClick: handleWBCMint
    },
    {
      title: 'CrazyFaces NFTs',
      text: 'If you have not minted any of the CrazyFaces NFTs with your current wallet, you may go ahead and do that below. One CrazyFace NFT costs 100 WBC.',
      buttonText: 'MINT',
      handleClick: handleNFTMint
    },
    {
      title: 'Governance Token',
      text: 'You will need to wrap a CrazyFaces NFT to create a governance token. You will need a governance token to vote on proposals.',
      buttonText: 'WRAP',
      handleClick: handleNFTWrap
    }
  ]

  return (
    <section className='token-management'>
      <div className="token-management__flex">
        {TOKEN_MANAGEMENT_MAP.map((action, index) => {
          return (
            <TokenManagementOptions
              key={index}
              title={action.title}
              text={action.text}
              buttonText={action.buttonText}
              handleClick={action.handleClick}
            />
          )
        })}
      </div>
    </section>
  )
}

export default TokenManagement
