import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { setInCart, selectIsInCart } from "../redux";
import Button from "../../../components/Button";
import CommentsSection from "../components/CommentsSection";
import Description from "../components/Description";

const DenouncementContainer: React.FC = () => {
  const isInCart = useSelector(selectIsInCart);

  const dispatch = useDispatch();

  return (
    <>
      <Description />
      <CommentsSection />
      <Button
        size="large"
        disabled={isInCart}
        text={isInCart ? "Added!" : "Buy now"}
        onClick={() => dispatch(setInCart(true))}
      />
    </>
  );
};

export default DenouncementContainer;
