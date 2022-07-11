import React from "react";

import Button from "../../../components/Button";
import CommentsSection from "../components/CommentsSection";
import Description from "../components/Description";

const DenouncementContainer: React.FC = () => (
  <>
    <Description />
    <CommentsSection />
    <Button text="Buy now" onClick={() => console.log("add to Redux's store")} />
  </>
);

export default DenouncementContainer;
