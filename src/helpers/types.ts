import type {methods} from "./methods.ts";
import type {statusCodes} from "./statusCodes.ts";
import type {Dispatch, SetStateAction} from "react";

export type MethodType = typeof methods[number];
export type StatusCodeType = typeof statusCodes[number];

export type InteractionType = {
    id: string,
    method: MethodType,
    endpoint: string,
    requestBody: string,
    statusCode: StatusCodeType,
    responseBody: string,
}

export type ValuesForMarkup = {
    participantAName: string,
    participantBName: string,
    interactions: InteractionType[]
}

export type InteractionProps = {id: string, interaction: InteractionType, setInteractions: Dispatch<SetStateAction<InteractionType[]>>}
export type SelectStatusCodeProps = {statusCode: number, setStatusCode: Dispatch<SetStateAction<StatusCodeType>>}
export type SelectMethodProps = {method: MethodType, setMethod: Dispatch<SetStateAction<MethodType>>}
export type MermaidMakerProps = {setMermaidMarkup: Dispatch<SetStateAction<string>>}