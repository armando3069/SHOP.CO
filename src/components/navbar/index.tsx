import React, { FC,useState } from "react";
import styled from "styled-components";
import Hamburger from "../../assets/icon/hamburger.svg";
import Account from "../../assets/icon/account.svg";
import Shop from "../../assets/icon/shop.svg";
import Search from "../../assets/icon/search_black.svg";
import LogoShop from "../../assets/icon/SHOP.CO.svg";

const Navbar: FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const Middle = styled.div`
    display: ${isOpen ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 700px) {
   //  display: none;
     flex-direction: column;
     margin-top: 300px;
    

  }

`;

  return (
    <ViewContainer>
      <NavContainer>
        <Left>
          <HideBlock onClick={handleOpen}>
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
          <Icon2 src={Shop} alt="" />
          <Icon2 src={Account} alt="" />
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
  width: 1240px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

const HideBlock = styled.div`
  display: none;

  @media (max-width: 700px) {
   display: block;
  }
`;

const Logo = styled.div``;

const LogoImage = styled.img`
  width: 126px;
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
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 700px; /* Lățimea maximă inițială */

  @media (max-width: 700px) {
   margin:0;
   padding:0;

  }
`;

const Input = styled.input`
  width: 100%; /* Umple întregul spațiu al containerului */
  height: 60px;
  border: none;
  border-radius: 30px;
  padding-left: 50px;
  background-color: #f0f0f0;
  font-size: 1.2rem;
  color: #666;

  /* Adaugă media queries pentru a controla micșorarea */
  @media (max-width: 800px) {
    max-width: 600px; /* Se micșorează la 600px la ecrane mai mici */
  }

  @media (max-width: 600px) {
    max-width: 100%; /* Ocupă întreaga lățime a containerului */
    min-width: 300px; /* Asigură o dimensiune minimă la ecrane foarte mici */
  }

    @media (max-width: 700px) {
    display:none;

  }


`;

const Icon = styled.img`
  position: absolute;
  left: 15px;
  width: 40px;
  height: 24px;
  opacity: 0.5;

  @media (max-width: 700px) {
    position: relative;
    left: 0;
    opacity: 1;
  }
`;

const Icon2 = styled.img`
  width: 30px;
`;