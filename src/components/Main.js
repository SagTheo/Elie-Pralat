import Menu from './Menu'
import React from 'react'
import Home from './Home'
import Hypnosis from './Hypnosis'
import Applications from './Applications'
import WhoAmI from './WhoAmI'
import Appointment from './Appointment'
import FAQ from './FAQ'
import Footer from './Footer'
import {StylesProvider} from '../context.js'

const Main = () => {
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
    </StylesProvider>
  )
}

export default Main