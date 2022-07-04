import { PropsWithChildren } from "react";

import { BANNER_TEXT } from "../../constants";
import Banner from "../Banner";

const HomeContainer: React.FC<PropsWithChildren> = ({ children }) => (
  <section className="container">
    <Banner text={BANNER_TEXT} />
  </section>
);

export default HomeContainer;