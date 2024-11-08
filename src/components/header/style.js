import styled from "styled-components";

export const ViewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f0f1;
`;

export const HeaderContainer = styled.div`
  width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
export const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
  padding: 20px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title_Header_Icon = styled.img`
  width: 300px;
`;

export const Shop_Button = styled.button`
  background-color: black;
  width: 100%;
  height: 52px;
  color: #ffff;
  border: none;
  border-radius: 62px;
  font-size: 0.875rem;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.6);
`;

export const BigTitle = styled.p`
  font-size: 2.8rem;
  font-weight: bold;
  // text-shadow: 0px 0 black, 0px 0 black, 0 0px black, 0 0px black;
  text-shadow: 0px 0 0px black, 0px 0 0px black, 0 0px black, 2px -3px 0px black;
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const SelesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const SalesData = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 40px;
`;

export const ParagraphData = styled.p`
  color: black;
  font-size: 3rem;
  font-weight: 500;
`;

export const ParagraphNum = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.2rem;
`;

export const Star1 = styled.img`
  position: absolute;
  width: 44px;
  height: 44px;
  top: 150px;
  left: 30px;
`;

export const Star2 = styled.img`
  position: absolute;
  width: 76px;
  height: 76px;
  top: 35px;
  right: 30px;
`;
