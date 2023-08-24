import { TokenManagementOptions } from '../components'
import { useCrazyFaces, useTurtleCatCoin } from '../context'

const TokenManagement = () => {

  const { userNFTBalance } = useCrazyFaces();
  const { turtleCatCoinContract, userCanMint, userERC20Balance } = useTurtleCatCoin()

  // ! Maybe a util function or custom hook to enclose the three functions below?  Look back at marketplace to see how we did that there and see if we can do something similar here.
  // ! Want to create (if possible) a reuseable piece of code that can be passed needed information to handle all three functions, preferably.

  const userCanMintERC20 = userCanMint
  const userCanMintNFT = userERC20Balance >= 100
  const userCanWrapNFT = userNFTBalance >= 1
  console.log('userNFTBalance: ', userNFTBalance)
  console.log('userCanWrapNFT: ', userCanWrapNFT)
  

  const handleWBCMint = () => {
    console.log('Clicked on WBC Mint')
    
  }
  
  const handleNFTMint = () => {
    console.log('Clicked on NFT Mint')
    console.log('User WBC Balance: ', userERC20Balance)
  }

  const handleNFTWrap = () => {
    console.log('Clicked on NFT Wrap')
  }

// ! Need to add a 'check' that determines if each button is active or disabled! 
// ! For WBC it would be if userCanMint is true or false
// ! For NFT it would be if userERC20Balance is greater than or equal to 100
// ! For Governance it would be if user has a CrazyFace NFT

  const TOKEN_MANAGEMENT_MAP = [
    {
      title: 'TurtleCat Coin (WBC)',
      text: 'If you have not minted any of the WBC token with your current wallet, you may go ahead and do that below. You will need WBC to mint CrazyFaces NFTs.',
      buttonText: 'MINT',
      enableButtonCheck: userCanMintERC20,
      handleClick: handleWBCMint
    },
    {
      title: 'CrazyFaces NFTs',
      text: 'If you have not minted any of the CrazyFaces NFTs with your current wallet, you may go ahead and do that below. One CrazyFace NFT costs 100 WBC.',
      buttonText: 'MINT',
      enableButtonCheck: userCanMintNFT,
      handleClick: handleNFTMint
    },
    {
      title: 'Governance Token',
      text: 'You will need to wrap a CrazyFaces NFT to create a governance token. You will need a governance token to vote on proposals.',
      buttonText: 'WRAP',
      enableButtonCheck: userCanWrapNFT,
      handleClick: handleNFTWrap
    }
  ]

  return (
    <section className='token-management'>
      <div className="token-management__grid">
        {TOKEN_MANAGEMENT_MAP.map((action, index) => {
          return (
            <TokenManagementOptions
              key={index}
              title={action.title}
              text={action.text}
              buttonText={action.buttonText}
              enableButtonCheck={action.enableButtonCheck}
              handleClick={action.handleClick}
            />
          )
        })}
      </div>
    </section>
  )
}

export default TokenManagement
