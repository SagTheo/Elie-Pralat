import Menu from './components/Menu'
import Home from './components/Home'
import Hypnosis from './components/Hypnosis'
import Applications from './components/Applications'
import WhoAmI from './components/WhoAmI'
import FAQ from './components/FAQ'
import 'bootstrap/dist/css/bootstrap.min.css'
import {StylesProvider} from './context.js'

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
    </StylesProvider>
  );
}

export default App;
