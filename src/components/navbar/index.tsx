import React, { FC } from "react";
import styled from "styled-components";
import Hamburger from "../../assets/icon/hamburger.svg";
import Account from "../../assets/icon/account.svg";
import Shop from "../../assets/icon/shop.svg";
import Search from "../../assets/icon/search_black.svg";
import LogoShop from "../../assets/icon/SHOP.CO.svg";

const Navbar: FC = () => {
  return (
    <ViewContainer>
      <NavContainer>
        <Left>
          <HideBlock>
            <img src={Hamburger} alt="" />
          </HideBlock>
          <Logo>
            <LogoImage src={LogoShop} />
          </Logo>
        </Left>
        <Middle>
          <Paragraf>Shop</Paragraf>
          <Paragraf>On Sale</Paragraf>
          <Paragraf>New Arrivals</Paragraf>
          <Paragraf>Brands</Paragraf>
        </Middle>
        <Right>
          <Find>
            <Icon src={Search} alt="" />
            <Input type="text" placeholder="Search for products..." />
          </Find>
          <Icon src={Shop} alt="" />
          <Icon src={Account} alt="" />
        </Right>
      </NavContainer>
    </ViewContainer>
  );
};

export default Navbar;

const ViewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.div`
  width: 1550px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 100px;
`;

const HideBlock = styled.div`
  display: none;
`;

const Logo = styled.div``;

const LogoImage = styled.img`
  width: 200px;
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;
`;

const Paragraf = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  color: black;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  gap: 18px;
`;

const Find = styled.div`
  position: relative;
`;

const Input = styled.input`
  min-width: 700px;
  height:60px;
  border:none;
  border-radius:67px;
  background-color: #f0f0f0;
  font-size:1.2rem;
`;

const Icon = styled.img`
width: 30px;
`;

