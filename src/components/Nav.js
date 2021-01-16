import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  margin: 2rem 0 3rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr repeat(2, minmax(80px, 150px));
    gap: 0.5rem;
    align-items: center;

    li {
      text-align: right;
      &:nth-child(1) {
        text-align: left;
      }
    }
  }
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
    margin-bottom: 64;
    max-width: 320;
  }
  .headingAccentStyles {
    color: '#663399';
  }
`;

export default function Nav() {
  return (
    <HeaderStyle>
      <NavStyles>
        <ul>
          <li>
            <H1Style>
              <abbr title="Lettuce Entertain You">LEY</abbr> - Recipes
            </H1Style>
          </li>
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
