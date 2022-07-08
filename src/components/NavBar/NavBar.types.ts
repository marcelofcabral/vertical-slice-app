import { RoutePaths } from "../../shared/types";

export type LinkContainerProps = {
  active: boolean;
};

export interface TabProps {
  active: boolean;
  navigatesTo: RoutePaths;
  onClick: () => void;
}
