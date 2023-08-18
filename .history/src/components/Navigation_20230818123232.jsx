import React from 'react'

const ACTION_MAP = {
  home: {
    label: 'Home',
    path: '/',
    component: 'Home'
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
  },
  viewProposals: {
    label: 'View Proposals',
    path: '/view-proposals',
    component: 'ViewProposals'
  }
}

const Navigation = () => {
  return (
    <nav>
      <ul>
        {}
      </ul>
    </nav>
  )
}

export default Navigation
