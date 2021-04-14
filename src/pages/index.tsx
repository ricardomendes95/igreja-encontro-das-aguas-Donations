import React from 'react'

import * as S from '../styles/pages/Home'
import Header from '../components/Header'
import Baseboard from '../components/Baseboard'

import Routes from '../routes'

const Home: React.FC = () => {
  return (
    <S.Container>
      <Header />
      <Routes />
      <Baseboard />
    </S.Container>
  )
}

export default Home
