import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 30px;
`

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-left: 20px;
  display: flex;
  align-items: center;

  &:first-of-type {
  margin-left: 0;
};

&:before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url('path/to/icon.png');
  background-repeat: no-repeat;
  background-size: 100%;
  margin-right: 5px;
};

&.active{
    color: red;
}

`
export const NavStyled = styled.nav`
    display: flex;

`;

export const MainImage = styled.img`
    margin-inline: auto;
     max-width: 100%;
    object-fit: cover;

 


`