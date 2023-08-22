import { NavLink } from 'react-router-dom'
import { ConnectWallet } from '../components'


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
      <ConnectWallet />
    </nav>
  )
}

export default Navigation
