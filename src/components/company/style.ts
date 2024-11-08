import styled from "styled-components";

export const ViewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const CompanyContainer = styled.div`
  width: 1240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: black;
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
`;

export const Image = styled.img`
  width: 100px;
  height: 25px;
  object-fit: contain;

   @media (min-width: 700px) {
       width: 200px;
      height: 50px;

  }

`;
