import React from 'react'

const WrapNFT = () => {
  return (
    <section className='wrap-nft__flex'>
    <div className='wrap-nft__title'>
        Governance Token
    </div>
    <p className='wrap-nft__text'>
        You will need to wrap a CrazyFaces NFT to create a governance token. You will need a governance token to vote on proposals.
    </p>
    <button className='wrap-nft__button'>WRAP</button>
    {/* {userCanMint ? (
        <button className='mint-erc20__button'>MINT</button>
    ) :
        (
            'User already minted'
        )
    } */}
</section>
  )
}

export default WrapNFT
