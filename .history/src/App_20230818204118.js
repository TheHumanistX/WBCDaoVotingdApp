import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { EthersProvider } from './context';
import { Navigation } from './components'
import { Home, ViewProposals, SubmitProposals, TokenManagement } from './pages'

const activeChain = "goerli"
const clientId = '254e923d35d33a1d5f3891f97b0afb8ec1b96c268373f52c861cc97147a0204cf4a20e366893ceedf87c29795b921549418feed9b1348c22495c6e5da34277ea'

function App() {
  console.log('clientId: ', clientId)
  return (
    <ThirdwebProvider activeChain={activeChain} clientId={clientId}>
      {/* <EthersProvider> */}
        <div className="App">
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/submit-proposals' element={<SubmitProposals />} />
            <Route path='/view-proposals' element={<ViewProposals />} />
            <Route path='/token-management' element={<TokenManagement />} />
          </Routes>
        </div>
      {/* </EthersProvider> */}
    </ThirdwebProvider>
  );
}

export default App;
