import { useState } from 'react'
import ReactDOM from 'react-dom';

const NftMintModal = ({ userERC20Balance }) => {

    const [quantityToMint, setQuantityToMint] = useState(null)
    const maxNFTsCanMint = userERC20Balance / 100

    const erc20Cost = quantityToMint * 100
    const erc20Remaining = userERC20Balance - erc20Cost

    const handleMintNFTs = () => {
        console.log('NftMintModal - handleMintNFTs() - ')

    }

    return ReactDOM.createPortal(
        <>
            <div className="nft-mint-modal__overlay" />
            <div className='nft-mint-modal__flex'>
                <div className="nft-mint-modal__top-text">
                    <span className='top-text__line-one'>
                        Mint CrazyFaces NFTs
                    </span>
                    <span className='top-text__line-two'>
                        You can mint {maxNFTsCanMint > 1 ? 'up to ' : ''}{maxNFTsCanMint} CrazyFaces {maxNFTsCanMint === 1 ? 'NFT' : 'NFTs'}
                    </span>
                </div>
                <div className='nft-mint-modal__input-flex'>
                    <label htmlFor='nftsToMint'>
                        How many NFTs to mint:
                    </label>

                    <input
                        type='number'
                        id='nftsToMint'
                        className='nft-mint-modal__input'
                        value={quantityToMint}
                        min={1}
                        max={maxNFTsCanMint}
                        onChange={(e) => {
                            console.log('NftMintModal - e: ', e)
                            setQuantityToMint(e.target.value)
                        }
                        }
                    />
                </div>
                <p className='nft-mint-modal__cost-text'>
                    This will cost {erc20Cost} TurtleCatCoin (WBC), leaving you with {erc20Remaining} TurtleCatCoint (WBC).
                </p>
                <button className='nft-mint-modal__mint-button' onClick={handleMintNFTs}>
                    MINT NFTS
                </button>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default NftMintModal
