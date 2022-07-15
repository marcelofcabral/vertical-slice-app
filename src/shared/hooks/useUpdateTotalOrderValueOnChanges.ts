import useAppSelector from "./useAppSelector";
import useAppDispatch from "./useAppDispatch";
import { selectQuantity, selectValue as selectContactUsValue } from "../../features/contactUs/redux";
import { selectIsInCart, selectValue as selectDenouncementValue } from "../../features/denouncement/redux";
import { setTotalValue } from "../../features/order/redux";
import { useEffect } from "react";

const useUpdateTotalOrderValueOnChanges = () => {
  const dispatch = useAppDispatch();

  const contactUsQuantity = useAppSelector(selectQuantity);
  const contactUsValue = useAppSelector(selectContactUsValue);
  const isDenouncementInCart = useAppSelector(selectIsInCart);
  const denouncementValue = useAppSelector(selectDenouncementValue);

  useEffect(() => {
    const totalOrderValue = contactUsQuantity * contactUsValue + (!isDenouncementInCart ? 0 : denouncementValue);
    dispatch(setTotalValue(totalOrderValue));
  }, [contactUsQuantity, contactUsValue, isDenouncementInCart, denouncementValue, dispatch]);
};

export default useUpdateTotalOrderValueOnChanges;
