import { SyntheticEvent } from "react";

export type selectFunction = (event: SyntheticEvent) => void;

export type inputFunction = (event: SyntheticEvent) => void;

export type downloadFunction = (event: SyntheticEvent) => void;

export type randomizerFunction = (index?: number | null) => void;
