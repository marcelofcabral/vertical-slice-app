import { RoutePaths } from "../../shared/routing/types";

export type LinkContainerProps = {
  active: boolean;
};

export interface TabProps {
  active: boolean;
  navigatesTo: RoutePaths;
  onClick: () => void;
}
