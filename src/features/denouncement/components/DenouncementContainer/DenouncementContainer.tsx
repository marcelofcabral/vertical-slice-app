import React from "react";

import useAppDispatch from "../../../../shared/redux/hooks/useAppDispatch";
import useAppSelector from "../../../../shared/redux/hooks/useAppSelector";
import { setInCart, selectIsInCart } from "../../redux";
import Button from "../../../../components/Button";
import CommentsSection from "../CommentsSection";
import Description from "../Description";
import useUpdateTotalOrderValueOnChanges from "../../../../shared/dataUpdate/hooks/useUpdateTotalOrderValueOnChanges";

const DenouncementContainer: React.FC = () => {
  useUpdateTotalOrderValueOnChanges();

  const isInCart = useAppSelector(selectIsInCart);

  const dispatch = useAppDispatch();

  const onButtonClick = () => {
    dispatch(setInCart(true));
  };

  return (
    <>
      <Description />
      <CommentsSection />
      <Button size="large" disabled={isInCart} text={isInCart ? "Added!" : "Buy now"} onClick={onButtonClick} />
    </>
  );
};

export default DenouncementContainer;
