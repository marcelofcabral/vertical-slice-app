import React, { ChangeEvent, useState } from "react";

import useAppDispatch from "../../../shared/hooks/useAppDispatch";
import useAppSelector from "../../../shared/hooks/useAppSelector";
import { setEmailAddress, selectEmail, addToQuantity } from "../redux";
import { EmailCTAContainer, QuantityContainer } from "./ContactUsContainer.styles";
import Button from "../../../components/Button";
import SubTitle from "../../../components/SubTitle/SubTitle";
import Text from "../../../components/Text";
import Input from "../components/Input";
import UsageStatistics from "../components/UsageStatistics/UsageStatistics";
import useUpdateTotalOrderValueOnChanges from "../../../shared/hooks/useUpdateTotalOrderValueOnChanges";

const ContactUsContainer: React.FC = () => {
  useUpdateTotalOrderValueOnChanges();

  const emailAddress = useAppSelector(selectEmail);

  const [showAddedText, setShowAddedText] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const dispatch = useAppDispatch();

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmailAddress(e.currentTarget.value));
  };

  const onAddToCart = () => {
    dispatch(addToQuantity(quantity));
    setQuantity(0);
    setShowAddedText(true);
    setTimeout(() => setShowAddedText(false), 800);
  };

  return (
    <>
      <UsageStatistics />
      <SubTitle>Join Ouvidor Digital! Click below to buy our Contact Us solution.</SubTitle>
      <EmailCTAContainer>
        <Text>Please enter your e-mail address:</Text>
        <Input onChange={onEmailChange} />
      </EmailCTAContainer>
      <Text>Number of licenses: </Text>
      <QuantityContainer>
        <Button size="small" text="-" onClick={() => setQuantity((prevQty) => (prevQty > 0 ? --prevQty : prevQty))} />
        <Text>{quantity}</Text>
        <Button size="small" text="+" onClick={() => setQuantity((prevQty) => ++prevQty)} />
      </QuantityContainer>
      <Button
        size="large"
        disabled={!emailAddress || showAddedText || quantity === 0}
        text={showAddedText ? "Added!" : "Add to cart"}
        onClick={onAddToCart}
      />
    </>
  );
};

export default ContactUsContainer;
