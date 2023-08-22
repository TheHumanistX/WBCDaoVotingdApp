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

  const { provider, setUserWallet } = useEthers();

  const handleConnectEthers = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        setUserWallet(accounts[0])
        console.log(accounts)
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('Please install MetaMask')
    }
  }

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
      <button className='connect-wallet__button' onClick={handleConnectEthers}>{provider ? 'Connected' : 'Connect'}</button>
    </nav>
  )
}

export default Navigation
