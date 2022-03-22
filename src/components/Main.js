import Menu from './Menu'
import React from 'react'
import Home from './Home'
import Hypnosis from './Hypnosis'
import Applications from './Applications'
import WhoAmI from './WhoAmI'
import Appointment from './Appointment'
import FAQ from './FAQ'
import Footer from './Footer'

const Main = () => {
  return (
    <>
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
        <Home id='accueil'/>
        <Hypnosis id='hypnose'/>
        <WhoAmI id='qui-suis-je'/>
        <Applications id='applications'/>
        <FAQ id='faq'/>
        <Appointment id='rdv' />
        <Footer />
    </>
  )
}

export default Main