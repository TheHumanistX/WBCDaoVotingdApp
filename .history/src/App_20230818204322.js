import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { ThirdwebProvider } from '@thirdweb-dev/react'
import { EthersProvider } from './context';
import { Navigation } from './components'
import { Home, ViewProposals, SubmitProposals, TokenManagement } from './pages'

const activeChain = "goerli"
// const clientId = process.env.REACT_APP_THIRDWEB_CLIENT_API_KEY

function App() {
  console.log('clientId: ', clientId)
  return (

        <div className="App">
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/submit-proposals' element={<SubmitProposals />} />
            <Route path='/view-proposals' element={<ViewProposals />} />
            <Route path='/token-management' element={<TokenManagement />} />
          </Routes>
        </div>

  );
}

export default App;
