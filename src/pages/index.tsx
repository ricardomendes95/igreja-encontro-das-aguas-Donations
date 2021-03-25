import React from 'react'
import Head from 'next/head'

import IeaLogo from '../assets/iea2.png'
import caixa from '../assets/caixa.png'
import picpay from '../assets/picpay.png'

import * as S from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <S.Container>
      <Head>
        <title>Encontro das águas</title>
      </Head>
      <S.Header>
        <S.LogoIea src={IeaLogo} alt="IEA" />

        <h1>Contribua com a obra de Deus</h1>
        <p>
          Sua contribuição é um ato voluntário, uma decisão de amor pela obra de
          Deus e pelas vidas que podem ser abençoadas por meio de nossas ações e
          projetos.
        </p>
      </S.Header>
      <S.Content>
        <h2>FORMAS DE CONTRIBUIR</h2>
        <span>Tranferêcia online/ Depósitos/ PicPay</span>
        <S.Caixa>
          <img src={caixa} alt="logo caixa" />
          <p> AGÊNCIA: 0051 / OPERAÇÃO: 013</p>
          <p>CONTA-POUPANÇA: 00033020-5</p>
          <p>CNPJ: 10.462.948/0001-12</p>
        </S.Caixa>

        <S.Picpay>
          <span>Clique aqui para doar pelo Picpay</span>
          <a href="https://app.picpay.com/user/igreja.encontro.das.aguas">
            <img src={picpay} alt="" />
          </a>
        </S.Picpay>
      </S.Content>
    </S.Container>
  )
}

export default Home
