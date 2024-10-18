import React from "react";
import styled from "styled-components";
import Model from "../../assets/img/model_01.png";
import TitleHeader from "../../assets/icon/Title_header.svg";

const Header = () => {
  return (
    <ViewContainer>
      <HeaderContainer>
        <Left>
          <Title_Header_Icon src={TitleHeader} />
        </Left>
        <Right>
          <Image src={Model} />
        </Right>
      </HeaderContainer>
    </ViewContainer>
  );
};

export default Header;

const ViewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f0f1;
`;

const HeaderContainer = styled.div`
  width: 1550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 1000px;
`;


const Title_Header_Icon = styled.img`
  width: 700px;
`;
