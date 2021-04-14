import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5% 0 5% 0;
  height: 100vh;
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #000;
  background-color: #c4c4c4;
  border-radius: 5%;
  padding: 10px;
  margin-bottom: 30px;

  h1 {
    font: 700 20px Roboto, sans-serif;
  }
  p {
    font-size: 18px;
    text-align: justify;
  }
  img {
    width: 176px;
    height: 78px;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #000;
  margin: 0px 0 30px 0;
  h3 {
    font-size: 1.6rem;
  }
`
