import { useState } from 'react';
import { ethers } from 'ethers';
import { NftMintModal, SlideOutNotifModal, TokenManagementOptions } from '../components'
import { useCrazyFaces, useCrazyFacesMinting, useTurtleCatCoin } from '../context'

const TokenManagement = () => {
  const { CRAZYFACES_MINTING_CONTRACT_ADDRESS, crazyFacesMintingContract } = useCrazyFacesMinting();
  const { crazyFacesContract, userNFTBalance } = useCrazyFaces();
  const { setUseEffectTrigger, turtleCatCoinContract, useEffectTrigger, userCanMint, userERC20Balance } = useTurtleCatCoin()

  const [transactionHash, setTransactionHash] = useState('')
  const [nftMintModalIsOpen, setNftMintModalIsOpen] = useState(false)

  // ! Maybe a util function or custom hook to enclose the three functions below?  Look back at marketplace to see how we did that there and see if we can do something similar here.
  // ! Want to create (if possible) a reuseable piece of code that can be passed needed information to handle all three functions, preferably.
  const userCanMintERC20 = userCanMint
  const userCanMintNFT = userERC20Balance >= 100
  const userCanWrapNFT = userNFTBalance >= 1

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

  const handleNFTMint = async (quantityToMint, setQuantityToMint) => {

    if (turtleCatCoinContract && crazyFacesMintingContract) {
      try {
        const signatureWithArgs = "getWBCPrice(uint256)";
        const totalNFTMintPrice = await crazyFacesMintingContract.functions[signatureWithArgs](quantityToMint);
        const bigNumberValue = totalNFTMintPrice[0];

        const approvalResponse = await turtleCatCoinContract.approve(CRAZYFACES_MINTING_CONTRACT_ADDRESS, totalNFTMintPrice.toString())
        const approvalReceipt = await approvalResponse.wait()
        console.log("wbc amount approval success", approvalReceipt)
        console.log("Approval status", approvalReceipt.status)
        if (approvalReceipt.status === 1) {
          try {
            const transactionResponse = await crazyFacesMintingContract.buyNFTs(quantityToMint)
            const transactionReceipt = await transactionResponse.wait()
            console.log("transactionReceipt", transactionReceipt)
            console.log('NFT Mint Succesful!')
            setUseEffectTrigger(prevState => !prevState)
            setQuantityToMint(0)
            setNftMintModalIsOpen(false)

            // TODO: Create another 'modal' or pop-up that will slide out in the top right on the page and inform the user they have successfully minted ## nfts after the NftMintModal closes automatically.

          } catch (err) {
            console.error('Error minting NFTs: ', err)
          }

        } else {
          console.log("Approval transaction failed");
          return null;
        }
      } catch (err) {
        console.error('Error approving ERC20 tokens: ' + err)
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
      handleClick: handleOpenModal
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
        handleNFTMint={handleNFTMint}
        nftMintModalIsOpen={nftMintModalIsOpen}
        userERC20Balance={userERC20Balance}
        onClose={() => setNftMintModalIsOpen(false)}
      />
      <SlideOutNotifModal
        topText={topText}
        bottomText={bottomText}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </section>
  )
}

export default TokenManagement
