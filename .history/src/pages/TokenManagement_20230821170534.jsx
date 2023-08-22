import { MintERC20, MintNFT } from '../components'

const TokenManagement = () => {
  return (
    <section className='token-management'>
      <MintERC20 />
      <MintNFT />
    </section>
  )
}

export default TokenManagement
