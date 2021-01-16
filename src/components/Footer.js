import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  padding: 1rem 0 2rem;
  font-size: 0.95rem;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; {new Date().getFullYear()} by Lettuce Entertain You</p>
    </FooterStyles>
  );
}
