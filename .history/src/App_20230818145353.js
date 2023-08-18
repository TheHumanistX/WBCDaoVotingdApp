import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { EthersProvider } from './context';
import { Navigation } from './components'
import { Home, ViewProposals, SubmitProposals, TokenManagement } from './pages'

const activeChain = "goerli"

function App() {
  return (
    <ThirdwebProvider activeChain={activeChain}>
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
