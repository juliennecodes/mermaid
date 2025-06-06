import {methods} from "./methods.ts";
import {statusCodes} from "./statusCodes.ts";

export const emptyInteraction = {
    method: methods[0],
    endpoint: '',
    requestBody: '',
    statusCode: statusCodes[0],
    responseBody: '',
}