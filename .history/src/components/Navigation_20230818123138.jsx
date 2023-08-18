import React from 'react'

const ACTION_MAP = {
  home: {
    label: 'Home',
    path: '/',
    component: 'Home'
  },
  submistProposals: {
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

const Navigation = () => {
  return (
    <nav>

    </nav>
  )
}

export default Navigation
