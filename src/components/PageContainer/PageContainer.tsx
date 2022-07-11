import React, { PropsWithChildren } from "react";

import { Container } from "./PageContainer.styles";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => <Container>{children}</Container>;

export default PageContainer;
