import {createContext} from 'react'
import {SelectProviderProps} from "../types/select.provider";
import SelectValueDefault from "./select.default";

export const SelectContext = createContext(new SelectValueDefault())

export const SelectProvider = (props: SelectProviderProps) => {
	return (
		<SelectContext.Provider value={{
			value: props.defaultValue,
			onChange: (value) => props.onChange(value, props.defaultValue)
		}}>
			{props.children}
		</SelectContext.Provider>
	)
}
