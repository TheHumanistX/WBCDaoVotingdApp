import { MintERC20, MintNFT } from '../components'

const TokenManagement = () => {
  return (
    <section className='token-management'>
      <div className="token-management__flex">
        <MintERC20 />
        <MintNFT />
      </div>
    </section>
  )
}

export default TokenManagement
