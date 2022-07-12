import React from "react";
import Button from "../../../components/Button";
import SubTitle from "../../../components/SubTitle/SubTitle";

import UsageStatistics from "../components/UsageStatistics/UsageStatistics";

const ContactUsContainer: React.FC = () => (
  <>
    <UsageStatistics />
    <SubTitle>Join Ouvidor Digital! Click below to buy our Contact Us solution.</SubTitle>
    <Button text={"Add to cart"} onClick={() => console.log("add product to the Redux store")} />
  </>
);

export default ContactUsContainer;
