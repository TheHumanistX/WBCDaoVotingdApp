import { TokenManagementOptions } from '../components'

const ACTION_MAP = [
  {
    title: 'TurtleCat Coin (WBC)',
    text: 'If you have not minted any of the WBC token with your current wallet, you may go ahead and do that below. You will need WBC to mint CrazyFaces NFTs.',
    buttonText: 'MINT'
    // handleClick: handleWBCMint
  },
  {
    title: 'CrazyFaces NFTs',
    text: 'If you have not minted any of the CrazyFaces NFTs with your current wallet, you may go ahead and do that below. One CrazyFace NFT costs 100 WBC.',
    buttonText: 'MINT'
    // handleClick: handleNFTMint
  },
  {
    title: 'Governance Token',
    text: 'You will need to wrap a CrazyFaces NFT to create a governance token. You will need a governance token to vote on proposals.',
    buttonText: 'WRAP'
    // handleClick: handleNFTWrap
  }
]

const TokenManagement = () => {

  const handleWBCMint = () => {
    console.log('Clicked on WBC Mint')
  }

  const handleNFTMint = () => {
    console.log('Clicked on NFT Mint')
  }

  const handleNFTWrap = () => {
    console.log('Clicked on NFT Wrap')
  }

  return (
    <section className='token-management'>
      <div className="token-management__flex">
        {ACTION_MAP.map((action, index) => {
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
