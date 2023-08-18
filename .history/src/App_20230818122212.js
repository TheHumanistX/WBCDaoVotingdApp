import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Home, ViewProposals, SubmitProposals, TokenManagement } from './pages'


function App() {
  return (
    <div className="App">
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
