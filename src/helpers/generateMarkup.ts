import type {InteractionType, StatusCodeType, ValuesForMarkup} from "./types.ts";
import {statusCodeToReadableMap} from "./statusCodes.ts";

const breakFormatted = (x: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return x.replaceAll(`\n`, '<br/>');
}

const completeStatusCode = (statusCode: StatusCodeType) => {
    return `${statusCode} ${statusCodeToReadableMap.get(statusCode)}`;
}
const generateMarkupForEachInteraction = ({method, endpoint, requestBody, statusCode, responseBody}: InteractionType) => {
    return `rect rgb(35, 35, 35)
        A->>B: ${method}<br/>${endpoint}<br/>${breakFormatted(requestBody)}
        B-->>A: ${completeStatusCode(statusCode)}<br/> ${breakFormatted(responseBody)}
    end
    `;
}

export const generateMarkup = ({participantAName, participantBName, interactions}: ValuesForMarkup) => {
    let markup = `sequenceDiagram
    participant A as ${participantAName}
    participant B as ${participantBName}
    `;

    interactions.forEach((interaction) => markup = markup.concat(generateMarkupForEachInteraction(interaction)))

    return markup;
}