import React from "react";

import { selectTotalValue } from "../redux";
import { incrementQuantity, decrementQuantity, selectQuantity } from "../../contactUs/redux";
import { selectIsInCart, setInCart } from "../../denouncement/redux";
import useAppDispatch from "../../../shared/hooks/useAppDispatch";
import useAppSelector from "../../../shared/hooks/useAppSelector";
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

const OrderContainer: React.FC = () => {
  const contactUsQuantity = useAppSelector(selectQuantity);
  const isDenouncementInCart = useAppSelector(selectIsInCart);
  const totalValue = useAppSelector(selectTotalValue);

  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <Title>Order information</Title>
        <OrderInfoBody>
          <ProductInfo>
            <Text>Contact Us Solution licenses: </Text>
            <Button size="small" text="-" onClick={() => dispatch(decrementQuantity())} />{" "}
            <SubTitle>{contactUsQuantity}</SubTitle>{" "}
            <Button size="small" text="+" onClick={() => dispatch(incrementQuantity())} />
          </ProductInfo>
          <ProductInfo>
            <Text>Denouncement Solution: </Text>
            <SubTitle>{isDenouncementInCart ? 1 : 0}</SubTitle>
            <Button
              size="medium"
              text={isDenouncementInCart ? "Remove" : "Add"}
              onClick={() => dispatch(setInCart(isDenouncementInCart ? false : true))}
            />
          </ProductInfo>
          <TotalValueContainer>
            <SubTitle>Total: {totalValue}</SubTitle>
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
