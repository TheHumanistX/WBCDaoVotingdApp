import { MintERC20, MintNFT, WrapNFT } from '../components'

const TokenManagement = () => {
  return (
    <section className='token-management'>
      <div className="token-management__flex">
        <MintERC20 />
        <MintNFT />
        <WrapNFT />
      </div>
    </section>
  )
}

export default TokenManagement
