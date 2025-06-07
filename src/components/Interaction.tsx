import {useEffect, useState} from "react";
import {Box, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {statusCodes} from "../helpers/statusCodes.ts";
import {methods} from "../helpers/methods.ts";
import type {InteractionType, InteractionProps, SelectStatusCodeProps, SelectMethodProps} from "../helpers/types.ts";
import ClearRounded from '@mui/icons-material/ClearRounded';
import {CheckCircleRounded} from "@mui/icons-material";
import {LIGHT_COLOUR, PADDING_MEDIUM, PADDING_SMALL} from "../helpers/styleConstants.ts";

const SelectMethod = ({method, setMethod}: SelectMethodProps) => {

    return (
        <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>
            <InputLabel id="method-label">Method</InputLabel>
            <Select
                labelId="method-label"
                id="select-method"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
            >
                {methods.map((methodValue) => <MenuItem value={methodValue}>{methodValue}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

const SelectStatusCode = ({statusCode, setStatusCode}: SelectStatusCodeProps) => {
    return (
        <FormControl variant="filled" sx={{m: 1, minWidth: 120}}>
            <InputLabel id="status-code-label">Status Code</InputLabel>
            <Select
                labelId="status-code-label"
                id="select-status-code"
                value={statusCode}
                onChange={(e) => setStatusCode(e.target.value)}
            >
                {statusCodes.map((statusCodeValue) =>
                    <MenuItem value={statusCodeValue}>{statusCodeValue}</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export const Interaction = ({id, interaction, setInteractions}: InteractionProps) => {
    const [method, setMethod] = useState(interaction.method);
    const [endpoint, setEndpoint] = useState(interaction.endpoint);
    const [requestBody, setRequestBody] = useState(interaction.requestBody);
    const [statusCode, setStatusCode] = useState(interaction.statusCode);
    const [responseBody, setResponseBody] = useState(interaction.responseBody);

    const setValuesForInteraction = () => {
        const valuesForInteraction = {method, endpoint, requestBody, statusCode, responseBody} as InteractionType;
        setInteractions((prevState) => {
            const newVersion = [...prevState];
            newVersion[id] = valuesForInteraction;
            return newVersion;
        });
    }

    useEffect(() => {
        const valuesForInteraction = {method, endpoint, requestBody, statusCode, responseBody} as InteractionType;
        setInteractions((prevState) => {
            const newVersion = [...prevState];
            newVersion[id] = valuesForInteraction;
            return newVersion;
        });
    }, [method, endpoint, requestBody, statusCode, responseBody, id, setInteractions])

    const deleteInteraction = () => {
        setInteractions((prevState) => {
            const newVersion = [...prevState];
            newVersion.splice(id, 1);
            return newVersion;
        });
    }

    return (
        <Box display={"flex"}
             paddingX={PADDING_MEDIUM}
             paddingY={PADDING_SMALL}
             gap={PADDING_SMALL}
        >
            <Box sx={
                {backgroundColor: LIGHT_COLOUR}}
                 display={"flex"}
                 gap={PADDING_SMALL}
                 paddingX={PADDING_MEDIUM}
                 paddingY={PADDING_MEDIUM}
            >
                <Box display={'flex'} gap={PADDING_SMALL}>
                    <Box display={'flex'}
                         flexDirection={'column'}
                         gap={PADDING_SMALL}
                    >
                        <Typography>Request</Typography>
                        <Box display={"flex"} gap={PADDING_SMALL}>
                            <SelectMethod method={method} setMethod={setMethod}/>
                            <TextField
                                id="endpoint-text"
                                label="Endpoint"
                                defaultValue={endpoint}
                                variant="filled"
                                onChange={(e) => setEndpoint(e.target.value)}
                            />
                            <TextField
                                id="request-body-text"
                                label="Request Body"
                                multiline
                                minRows={4}
                                defaultValue={requestBody}
                                variant="filled"
                                onChange={(e) => setRequestBody(e.target.value)}
                            />
                        </Box>
                    </Box>

                    <Box display={'flex'}
                         flexDirection={'column'}
                         gap={PADDING_SMALL}
                    >
                        <Typography>Response</Typography>
                        <Box display={"flex"} gap={PADDING_SMALL}>
                            <SelectStatusCode statusCode={statusCode} setStatusCode={setStatusCode}/>
                            <TextField
                                id="response-body-text"
                                label="Response Body"
                                multiline
                                minRows={4}
                                defaultValue=""
                                variant="filled"
                                onChange={(e) => setResponseBody(e.target.value)}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{alignSelf: 'center'}}>
                <IconButton onClick={deleteInteraction}>
                    <ClearRounded />
                </IconButton>
            </Box>
        </Box>
    )
}