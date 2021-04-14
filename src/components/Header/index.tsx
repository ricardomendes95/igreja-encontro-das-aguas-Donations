import React from 'react'
import * as S from './styles'
import Logo from '../../assets/iea-logo.png'

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Menu>
        <S.Logo src={Logo} alt="" />
        <S.Name>
          <h1>IGREJA EVANGÉLICA</h1>
          <h1>ENCONTRO DAS ÁGUAS</h1>
        </S.Name>
      </S.Menu>
    </S.Container>
  )
}
export default Header
