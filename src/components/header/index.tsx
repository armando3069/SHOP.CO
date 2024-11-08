import Model from "../../assets/img/profile.png";
import TitleHeader from "../../assets/icon/Title_header.svg";
//import { useMediaQuery } from "react-responsive";
import MiniStar from "../../assets/icon/miniStar.svg";
import BigStar from "../../assets/icon/Star.svg";
import {
  ViewContainer,
  HeaderContainer,
  Left,
  Right,
  Image,
  Title_Header_Icon,
  Shop_Button,
  Subtitle,
  MainText,
  SelesContainer,
  SalesData,
  ParagraphData,
  ParagraphNum,
  BigTitle,
  Star1,
  Star2,
} from "./style.js";
const Header = () => {
  return (
    <ViewContainer>
      <HeaderContainer>
        <Left>
          <MainText>
            {/* <Title_Header_Icon src={TitleHeader} /> */}
            <BigTitle>FIND CLOTHES THAT MATCHES YOUR STYLE</BigTitle>
            <Subtitle>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </Subtitle>
            <Shop_Button>Shop Now</Shop_Button>
          </MainText>

          {/* <SelesContainer>
            <SalesData>
              <ParagraphData>200+</ParagraphData>
              <ParagraphNum>International Brands</ParagraphNum>
            </SalesData>

            <SalesData>
              <ParagraphData>2,000+</ParagraphData>
              <ParagraphNum>High-Quality Products </ParagraphNum>
            </SalesData>

            <SalesData>
              <ParagraphData>30,000+</ParagraphData>
              <ParagraphNum>Happy Customers </ParagraphNum>
            </SalesData>
          </SelesContainer> */}
        </Left>
        <Right>
          <Star1 src={MiniStar} alt="miniStar" />
          <Star2 src={BigStar} alt="bigStar" />
          <Image src={Model} />
        </Right>
      </HeaderContainer>
    </ViewContainer>
  );
};

export default Header;
