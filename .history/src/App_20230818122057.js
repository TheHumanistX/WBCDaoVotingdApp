import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Home, Proposals, SubmitProposals, TokenManagement } from './pages'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/submit-proposals' element={<SubmitProposals />} />
        <Route path='/view-proposals' element={<Proposals />} />
        <Route path='/token-management' element={<TokenManagement />} />
      </Routes>
    </div>
  );
}

export default App;
