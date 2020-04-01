/// <reference types="react" />
import { TextInputProps } from "react-native";
export interface TextInputLNFProps extends TextInputProps {
    backgroundColor?: string;
}
export declare const TextInputLNF: ({ backgroundColor, ...rest }: TextInputLNFProps) => JSX.Element;
export interface TextFieldBaseProps {
    label?: string;
    backgroundColor?: string;
    nativeTextInputProps?: TextInputProps;
}
export declare const TextFieldBase: (props: TextFieldBaseProps) => JSX.Element;
