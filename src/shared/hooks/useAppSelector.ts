// had to break the "no one imports from app" rule here.

import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../../app/store";

// ugly workaround. TODO: check why this isn't working without the "as" part.
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
