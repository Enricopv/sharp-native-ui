/// <reference types="react" />
import { TextInputProps } from "react-native";
export interface TextFieldBaseProps {
    label?: string;
    backgroundColor?: string;
    nativeTextInputProps?: TextInputProps;
    error?: boolean;
    helperText?: string;
    required?: boolean;
}
export declare const SimpleTextField: (props: TextFieldBaseProps) => JSX.Element;
