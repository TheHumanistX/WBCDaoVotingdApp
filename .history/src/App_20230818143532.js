import './App.css';
import { Routes, Route } from 'react-router-dom';

import { EthersProvider } from './context';
import { Navigation } from './components'
import { Home, ViewProposals, SubmitProposals, TokenManagement } from './pages'


function App() {
  return (
    // <EthersProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/submit-proposals' element={<SubmitProposals />} />
          <Route path='/view-proposals' element={<ViewProposals />} />
          <Route path='/token-management' element={<TokenManagement />} />
        </Routes>
      </div>
    // </EthersProvider>
  );
}

export default App;
