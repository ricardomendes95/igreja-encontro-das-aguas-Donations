import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`
export const LogoIea = styled.img`
  margin-top: 5%;
  margin-right: 5%;
  width: 90%;
  height: 60%;
`
export const Logo = styled.img`
  width: 250px;
  height: 200px;
`

export const Picpay = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10%;
  span {
    font-size: 1.5rem;
  }
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      width: 60%;
      height: 40%;
      margin-bottom: 24px;
      margin-top: 24px;
      background-color: white;
      border-radius: 20px;
      :hover {
        background-color: #bebebe;
      }
    }
  }
`

export const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 60%;
    height: 40%;
    margin-bottom: 24px;
    margin-top: 24px;
    background-color: white;
    border-radius: 20px;
  }

  p {
    font-size: 1.4rem;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 1.3rem;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 30px 0px 20px 0px;
    color: white;
    font: 700 1.7rem 'PT Serif', serif;
  }

  p {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 24px;
    margin-left: 0px;
    text-align: justify;
  }
`
