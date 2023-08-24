import React, { useState } from 'react'

const NftMintModal = ({ userERC20Balance }) => {

    const [quantityToMint, setQuantityToMint] = useState(null)
    const maxNFTsCanMint = userERC20Balance / 100

    return (
        <>
            <div className="nft-mint-modal__overlay"></div>
            <div className='nft-mint-modal__flex'>
                <div className="nft-mint-modal__top-text">
                    <span className='top-text__line-one'>
                        Mint CrazyFaces NFTs
                    </span>
                    <span className='top-text__line-two'>
                        You can mint up to {maxNFTsCanMint} CrazyFaces NFTs
                    </span>
                </div>
                
            </div>
        </>
    )
}

export default NftMintModal
