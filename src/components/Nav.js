import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  margin: 2rem 0 3rem;
`;

const H1Style = styled.h1`
  margin-top: 0;
  margin-bottom: 64;
  max-width: 320;

  .headingAccentStyles {
    color: '#663399';
  }
`;

const NavStyles = styled.nav`
  .headingStyles {
    margin-top: 0;
    margin-tottom: 64;
    max-width: 320;
  }
  .headingAccentStyles {
    color: '#663399';
  }
`;

export default function Nav() {
  return (
    <HeaderStyle>
      <H1Style>
        <abbr title="Lettuce Entertain You">LEY</abbr> - Recipes
      </H1Style>
      <NavStyles>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes/">Recipes</Link>
          </li>
        </ul>
      </NavStyles>
    </HeaderStyle>
  );
}
