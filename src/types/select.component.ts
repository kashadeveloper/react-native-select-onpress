import SelectReturnType from "./select.returntype";
import {ReactNode} from "react";

export default interface SelectComponentProps {
	value: SelectReturnType;
	children: ReactNode
}