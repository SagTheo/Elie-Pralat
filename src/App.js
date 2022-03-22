import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import LegalMentions from './components/LegalMentions'
import SiteMap from './components/SiteMap'
import {StylesProvider} from './context.js'

function App() {
  return (
    <StylesProvider>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/legal-mentions' element={<LegalMentions />} />
        <Route path='/sitemap' element={<SiteMap />} />
      </Routes>
    </StylesProvider>
  );
}

export default App;
