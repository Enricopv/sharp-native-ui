/// <reference types="react" />
import { TextProps, TextStyle } from "react-native";
export declare type TextographyVariants = "normal" | "small" | "title" | "heading";
export declare const headingFontSize = 30;
export declare const titleFontSize = 18.75;
export declare const normalFontSize = 15;
export declare const smallFontSize = 12.5;
export declare const miniFontSize = 10;
export interface TextographyProps extends TextProps {
    children?: string;
    variant?: TextographyVariants;
    style?: TextStyle;
}
export declare const Textography: (props: TextographyProps) => JSX.Element;
