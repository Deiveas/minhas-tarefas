// Footer.tsx
import React from 'react'
import { FooterContainer, FooterText } from './FooterStyles'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <FooterContainer>
      <FooterText>© {currentYear} Desenvolvido por Deive Silva</FooterText>
    </FooterContainer>
  )
}

export default Footer
