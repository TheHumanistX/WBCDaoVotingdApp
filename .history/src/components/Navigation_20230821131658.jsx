import { NavLink } from 'react-router-dom'
import { useEthers } from '../context'


const ACTION_MAP = [

  {
    label: 'View Proposals',
    path: '/view-proposals',
    component: 'ViewProposals'
  },
  {
    label: 'Submit Proposals',
    path: '/submit-proposals',
    component: 'SubmitProposals'
  },
  {
    label: 'Token Management',
    path: '/token-management',
    component: 'TokenManagement'
  }
]

const Navigation = () => {

  const { userWallet } = useEthers();

  const handleConnectEthers = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('Please install MetaMask')
    }
  }

  const userWalletSlice = userWallet ? `${userWallet.slice(0, 6)}...${userWallet.slice(-4)}` : ''

  return (
    <nav>
      <ul>
        {ACTION_MAP.map((action) => {
          return (
            <li key={action.label}>
              <NavLink to={action.path} className='navbar__link'>
                {action.label}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <button className='connect-wallet__button' onClick={handleConnectEthers}>{userWallet ? {userWalletSlice} : 'Connect'}</button>
    </nav>
  )
}

export default Navigation
