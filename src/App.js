import Menu from './components/Menu'
import Home from './components/Home'
import Hypnosis from './components/Hypnosis'
import Applications from './components/Applications'
import WhoAmI from './components/WhoAmI'
import Appointment from './components/Appointment'
import FAQ from './components/FAQ'
import {StylesProvider} from './context.js'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import LegalMentions from './components/LegalMentions'
import SiteMap from './components/SiteMap'

function App() {
  return (
    <StylesProvider>
      <Menu logo="ÉLIE PRALAT hypnose"
          tabs={[
            { title: 'Accueil', id: 'accueil' },
            { title: 'L\'hypnose', id: 'hypnose' },
            { title: 'Qui-suis-je ?', id: 'qui-suis-je' },
            { title: 'Applications', id: 'applications' },
            { title: 'FAQ', id: 'faq' },
            { title: 'Prendre rendez-vous', id: 'rdv' }
          ]}
      />
      <Home />
      <Hypnosis />
      <WhoAmI />
      <Applications />
      <FAQ />
      <Appointment />
      <Footer />

      <Routes>
        <Route path='/legal-mentions' element={<LegalMentions />} />
        <Route path='/sitemap' element={<SiteMap />} />
      </Routes>
    </StylesProvider>
  );
}

export default App;
