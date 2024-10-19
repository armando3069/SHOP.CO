import styled from "styled-components";

export const ViewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f0f1;
`;

export const HeaderContainer = styled.div`
  width: 1550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Left = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width:925px ;
`;

export const Title_Header_Icon = styled.img`
  width: 700px;
`;
export const Shop_Button = styled.button`
  background-color: black;
  width: 250px;
  height: 62px;
  color: #ffff;
  border: none;
  border-radius: 62px;
  font-size: 1.2rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
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
