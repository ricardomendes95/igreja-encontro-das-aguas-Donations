import React from 'react'

import * as S from './styles'
import Header from '../../components/Header'
import Baseboard from '../../components/Baseboard'
import Pix from '../../assets/pix.png'
import Caixa from '../../assets/caixa.png'

export default function Dizimos() {
  return (
    <S.Container>
      {/* <Header /> */}
      <S.Card>
        <h1>Contribua com a obra de Deus</h1>
        <p>
          Sua contribuição é um ato voluntário, uma decisão de amor pela obra de
          Deus e pelas vidas que podem ser abençoadas por meio de nossas ações e
          projetos.
        </p>
      </S.Card>
      <S.Info>
        <h3>FORMAS DE CONTRIBUIR</h3>
        <span>Tranferêcia online/ Depósitos/ PicPay</span>
      </S.Info>
      <S.Card>
        <img src={Pix} alt="pix" />
        <h3>Chave: 10.462.948/0001-12</h3>
        <p>
          Atenção: o Nome que irá aperecer, é Ministério Águas do Trono (que é o
          atingo nome da nossa igreja)mas a conta pertence a Encontro das Águas
        </p>
      </S.Card>
      <S.Card>
        <img src={Caixa} alt="pix" />
        <p> AGÊNCIA: 0051 / OPERAÇÃO: 013</p>
        <p>CONTA-POUPANÇA: 00033020-5</p>
        <p>CNPJ: 10.462.948/0001-12</p>
      </S.Card>
    </S.Container>
  )
}
