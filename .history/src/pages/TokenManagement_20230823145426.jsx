import { useState } from 'react';
import { NftMintModal, TokenManagementOptions } from '../components'
import { useCrazyFaces, useTurtleCatCoin } from '../context'

const TokenManagement = () => {

  const { crazyFacesContract, userNFTBalance } = useCrazyFaces();
  const { setUseEffectTrigger, turtleCatCoinContract, useEffectTrigger, userCanMint, userERC20Balance } = useTurtleCatCoin()

  const [transactionHash, setTransactionHash] = useState('')
  const [nftMintModalIsOpen, setNftMintModalIsOpen] = useState(false)

  // ! Maybe a util function or custom hook to enclose the three functions below?  Look back at marketplace to see how we did that there and see if we can do something similar here.
  // ! Want to create (if possible) a reuseable piece of code that can be passed needed information to handle all three functions, preferably.
  console.log('TokenManagement - useEffectTrigger: ', useEffectTrigger)
  const userCanMintERC20 = userCanMint
  console.log('TokenManagement - userCanMintERC20: ', userCanMintERC20)
  const userCanMintNFT = userERC20Balance >= 100
  console.log('TokenManagement - userCanMintNFT: ', userCanMintNFT)
  const userCanWrapNFT = userNFTBalance >= 1
  console.log('TokenManagement - userCanWrapNFT: ', userCanWrapNFT)

  const handleOpenModal = () => {
    setNftMintModalIsOpen(true)
  }

  const handleWBCMint = async () => {
    console.log('TokenManagement - Clicked on WBC Mint')
    if (turtleCatCoinContract) {
      try {
        const transaction = await turtleCatCoinContract.mint()
        const transactionReceipt = await transaction.wait()
        if (transactionReceipt) {
          setTransactionHash(transactionReceipt.transactionHash)
          console.log('TokenManagement - transactionReceipt: ', transactionReceipt)
          setUseEffectTrigger(prevState => !prevState)
        }
      } catch (err) {
        console.error('Error minting ERC20 tokens: ' + err)
      }
    }
  }

  const handleNFTMint = async () => {
    console.log('Clicked on NFT Mint')
    console.log('User WBC Balance: ', userERC20Balance)
    if (turtleCatCoinContract && crazyFacesContract) {
      try {

      } catch (err) {
        console.error('Error minting ERC20 tokens: ' + err)
      }
    }
  }

  const handleNFTWrap = async () => {
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
      <NftMintModal
        nftMintModalIsOpen={nftMintModalIsOpen}
        userERC20Balance={userERC20Balance}
        onClose={() => setNftMintModalIsOpen(false)}
      />
    </section>
  )
}

export default TokenManagement
