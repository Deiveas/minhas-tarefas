// Footer.tsx
import React from 'react'
import {
  FooterContainer,
  FooterText
} from '../../containers/Footer/FooterStyles'

const FooterComp: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <FooterContainer>
      <FooterText>© {currentYear} Desenvolvido por Deive Silva</FooterText>
    </FooterContainer>
  )
}

export default FooterComp
