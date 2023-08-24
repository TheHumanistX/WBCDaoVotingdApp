import React, { useState } from 'react'

const NftMintModal = ({ userERC20Balance }) => {

    const [quantityToMint, setQuantityToMint] = useState(null)
    const maxNFTsCanMint = userERC20Balance / 100

    const erc20Cost = quantityToMint * 100
    const erc20Remaining = userERC20Balance - erc20Cost

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
                <input
                    type='number'
                    className='nft-mint-modal__input'
                    value={quantityToMint}
                    onChange={(e) => {
                        console.log('NftMintModal - e: ', e)
                        setQuantityToMint(e.target.value)
                    }
                    }
                />
                <p className='nft-mint-modal__cost-text'>
                    This will cost {quantityToMint * 100} TurtleCatCoin (WBC), leaving you with {userERC20Balance - (quantityToMint * 100)} TurtleCatCoint (WBC).
                </p>
            </div>
        </>
    )
}

export default NftMintModal
