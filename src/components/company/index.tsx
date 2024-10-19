import React, { FC } from "react";
import { ViewContainer, CompanyContainer, Image } from "./style.ts";
import Versace from "../../assets/icon/versace.svg";
import Zara from "../../assets/icon/zara.svg";
import Gucci from "../../assets/icon/gucii.svg";
import Prada from "../../assets/icon/prada.svg";
import Calvine from "../../assets/icon/calvine.svg";



const Company: FC = () => {
  return (
    <ViewContainer>
      <CompanyContainer>
        <Image src={Versace} />
        <Image src={Zara} />
        <Image src={Gucci} />
        <Image src={Prada} />
        <Image src={Calvine} />
      </CompanyContainer>
    </ViewContainer>
  );
};

export default Company;
