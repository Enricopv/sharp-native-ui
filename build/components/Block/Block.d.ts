import * as React from "react";
export declare type dividerSpacingTypes = "normal" | "small" | "large";
export declare const dividerSpacingLarge = 24;
export declare const dividerSpacingNormal = 14;
export declare const dividerSpacingSmall = 10;
export declare const Divider: ({ spacing }: {
    spacing?: dividerSpacingTypes;
}) => JSX.Element;
export declare const Block: (props: {
    children?: React.ReactNode;
}) => JSX.Element;
