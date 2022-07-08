import React from "react";

import { SmallTabLinkContainer } from "./SmallTab.styles";
import { SmallTabProps } from "./SmallTab.types";

const SmallTab: React.FC<SmallTabProps> = ({ icon: IconComponent, active, navigatesTo }) => (
  <SmallTabLinkContainer active={active} to={navigatesTo}>
    <IconComponent size={30} color={"white"} />
  </SmallTabLinkContainer>
);

export default SmallTab;
