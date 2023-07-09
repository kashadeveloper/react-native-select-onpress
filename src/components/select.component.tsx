import {useCallback} from "react";
import {SelectContext} from "../provider/select.provider";
import {Pressable} from "react-native";
import SelectValueDefault from "../provider/select.default";
import SelectComponentProps from "../types/select.component";

export const Select = (props: SelectComponentProps) => {
	const handler = useCallback((context: SelectValueDefault) => {
		context.value = props.value
		context.onChange(context.value)
	}, [])
	return (
		<SelectContext.Consumer>
			{context => (
				<Pressable onPress={() => handler(context)}>
					{props.children}
				</Pressable>
			)}
		</SelectContext.Consumer>
	)
}