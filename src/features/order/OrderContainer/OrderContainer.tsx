import React from "react";

import { useSelector } from "react-redux";

import {
  incrementQuantity,
  decrementQuantity,
  selectValue as selectContactUsValue,
  selectQuantity,
} from "../../contactUs/redux";
import { selectIsInCart, selectValue as SelectDenouncementValue, setInCart } from "../../denouncement/redux";
import {
  Container,
  OrderInfoBody,
  ProductInfo,
  TotalValueContainer,
  FinishOrderButtonContainer,
} from "./OrderContainer.styles";
import Title from "../../../components/Title";
import SubTitle from "../../../components/SubTitle/SubTitle";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import useAppDispatch from "../../../shared/hooks/useAppDispatch";

const OrderContainer: React.FC = () => {
  const contactUsQuantity = useSelector(selectQuantity);
  const isDenouncementInCart = useSelector(selectIsInCart);

  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <Title>Order information</Title>
        <OrderInfoBody>
          <ProductInfo>
            <Text>Contact Us Solution licenses: </Text>
            <Button size="small" text="-" /> <SubTitle>5</SubTitle> <Button size="small" text="+" />
          </ProductInfo>
          <ProductInfo>
            <Text>Denouncement Solution: </Text>
            <SubTitle>0</SubTitle>
            <Button size="medium" text={"Add"} onClick={() => console.log("clicked")} />
          </ProductInfo>
          <TotalValueContainer>
            <SubTitle>Total: 2500</SubTitle>
          </TotalValueContainer>
        </OrderInfoBody>
        <FinishOrderButtonContainer>
          <Button size="large" text="Finish order" />
        </FinishOrderButtonContainer>
      </Container>
    </>
  );
};

export default OrderContainer;
