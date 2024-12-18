import { useState } from "react";
import styled from "styled-components";
import Close from "../../assets/icon/Frame.svg";

const Discount = () => {
  const [close, setClose] = useState(false);

  const Main_Container = styled.div`
    width: 100%;
    display: ${close ? "none" : "flex"};
    justify-content: center;
    align-items: center;
    background-color: black;
  `;

  const handleChange = () => {
    setClose(true);
  };

  return (
    <Main_Container>
      <Container>
        <Link href="#">
          Sign up and get 20% off to your first order. <Span>Sign Up Now</Span>
        </Link>
      </Container>
      <Button onClick={handleChange}>
        <img src={Close} alt="" />
      </Button>
    </Main_Container>
  );
};

export default Discount;

const Link = styled.a`
  background-color: black;
  color: #ffff;
  text-align: center;
  font-size: 0.875rem;
  text-decoration: none;

  @media (max-width: 700px) {
      font-size: 0.75rem;

  }
`;
const Span = styled.span`
  text-decoration: underline;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
   @media (max-width: 700px) {
      display:none;

  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1240px;
  height: 38px;
  background-color: black;
  padding: 0 40px;
`;
