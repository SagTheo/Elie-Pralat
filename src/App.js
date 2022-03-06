import Menu from './components/Menu'
import Home from './components/Home'
import Hypnosis from './components/Hypnosis'
import 'bootstrap/dist/css/bootstrap.min.css'
import {StylesProvider} from './context.js'

function App() {
  return (
    <StylesProvider>
      <Menu logo="ÉLIE PRALAT hypnose"
            tabs={[
              { title: 'Accueil', id: 'accueil' },
              { title: 'L\'hypnose', id: 'hypnose' },
              { title: 'Applications', id: 'applications' },
              { title: 'Qui-suis-je ?', id: 'qui-suis-je' },
              { title: 'Prendre rendez-vous', id: 'rdv' }
            ]}
      />
      <Home />
      <Hypnosis />
    </StylesProvider>
  );
}

export default App;
