// FooterStyles.ts
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${variaveis.corTituloSuperior};
  color: ${variaveis.corTexto};
  position: fixed;
  width: 100%;
  bottom: 0;
`

export const FooterText = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 0;
`
