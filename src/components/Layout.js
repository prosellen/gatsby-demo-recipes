import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';
import Footer from './Footer';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  padding: 1rem 3rem 1rem;
  background-color: #fff;
  margin: 0 auto 4rem auto;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  @media (max-width: 820px) {
    padding: 0.5rem 1rem 1rem;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <Nav />
        {children}
        <Footer />
      </SiteBorderStyles>
    </>
  );
}
