import {methods} from "./methods.ts";
import {statusCodes} from "./statusCodes.ts";

const emptyInteraction = {
    method: methods[0],
    endpoint: '',
    requestBody: '',
    statusCode: statusCodes[0],
    responseBody: '',
}

export const generateEmptyInteraction = () => {
    return {
        id: Date.now().toString(),
        ...emptyInteraction
    }
}