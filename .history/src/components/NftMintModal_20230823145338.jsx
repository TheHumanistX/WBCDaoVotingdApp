import { useState } from 'react'
import ReactDOM from 'react-dom';

const NftMintModal = ({ nftMintModalIsOpen, userERC20Balance, onClose }) => {

    if (!nftMintModalIsOpen) return null

    const [quantityToMint, setQuantityToMint] = useState(null)

    const maxNFTsCanMint = userERC20Balance / 100

    const erc20Cost = quantityToMint * 100
    const erc20Remaining = userERC20Balance - erc20Cost

    const handleMintNFTs = () => {
        console.log('NftMintModal - handleMintNFTs() - ')

    }

    return ReactDOM.createPortal(
        <>
            {}
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
                    This will cost <span>{erc20Cost}</span> TurtleCatCoin (WBC). 
                    <br />
                    This will leave you with <span>{erc20Remaining}</span> TurtleCatCoint (WBC).
                </p>
                <button className='nft-mint-modal__mint-button' onClick={handleMintNFTs}>
                    MINT NFTS
                </button>
                <div className='nft-mint-modal__close-x' onClick={onClose}>
                    X
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default NftMintModal
