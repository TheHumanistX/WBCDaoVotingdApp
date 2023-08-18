import { Link } from 'react-router-dom'

const ACTION_MAP = {
  home: {
    label: 'Home',
    path: '/',
    component: 'Home'
  },
  viewProposals: {
    label: 'View Proposals',
    path: '/view-proposals',
    component: 'ViewProposals'
  },
  submitProposals: {
    label: 'Submit Proposals',
    path: '/submit-proposals',
    component: 'SubmitProposals'
  },
  tokenManagement: {
    label: 'Token Management',
    path: '/token-management',
    component: 'TokenManagement'
  }
}

const Navigation = () => {
  return (
    <nav>
      <ul>
        {ACTION_MAP.map((action) => {
          return (
            <li key={action.label}>
              <Link to={action.path} className='navbar__link'>
                {action.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
