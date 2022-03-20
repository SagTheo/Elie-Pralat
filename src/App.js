import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import LegalMentions from './components/LegalMentions'
import SiteMap from './components/SiteMap'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/legal-mentions' element={<LegalMentions />} />
      <Route path='/sitemap' element={<SiteMap />} />
    </Routes>
  );
}

export default App;
