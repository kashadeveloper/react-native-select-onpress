import SelectReturnType from "./select.returntype";
import {ReactNode} from "react";

export interface SelectProviderProps {
	defaultValue: SelectReturnType;
	onChange: (value: SelectReturnType, prevValue: SelectReturnType) => void;
	children: ReactNode;
}