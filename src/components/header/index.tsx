import Model from "../../assets/img/model_01.png";
import TitleHeader from "../../assets/icon/Title_header.svg";
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
} from "./style.js";
const Header = () => {
  return (
    <ViewContainer>
      <HeaderContainer>
        <Left>
          <MainText>
            <Title_Header_Icon src={TitleHeader} />
            <Subtitle>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </Subtitle>
            <Shop_Button>Shop Now</Shop_Button>
          </MainText>

          <SelesContainer>
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
          </SelesContainer>
        </Left>
        <Right>
          <Image src={Model} />
        </Right>
      </HeaderContainer>
    </ViewContainer>
  );
};

export default Header;
