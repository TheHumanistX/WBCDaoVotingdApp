import React, { useState } from 'react'

const NftMintModal = () => {

    const [quantityToMint, setQuantityToMint] = useState(null)

    return (
        <>
            <div className="nft-mint-modal__overlay"></div>
            <div className='nft-mint-modal__flex'>
                <div className="nft-mint-modal__top-text">
                    <span className='top-text__line-one'>
                        Mint CrazyFaces NFTs
                    </span>
                    <span className='top-text__line-two'>
                        You can mint up to 5 CrazyFaces NFTs
                    </span>
                </div>
                <
            </div>
        </>
    )
}

export default NftMintModal
