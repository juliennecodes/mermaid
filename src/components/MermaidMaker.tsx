import {Box, Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {generateMarkup} from "../helpers/generateMarkup.ts";
import {Interaction} from "./Interaction.tsx";
import {generateEmptyInteraction} from "../helpers/helpers.ts";
import type {InteractionType, MermaidMakerProps} from "../helpers/types.ts";
import {
    COLOUR_PRIMARY_LIGHT,
    PADDING_SMALL
} from "../helpers/styleConstants.ts";

export const MermaidMaker = ({setMermaidMarkup}: MermaidMakerProps) => {
    const [participantAName, setParticipantAName] = useState('A');
    const [participantBName, setParticipantBName] = useState('B');
    const [interactions, setInteractions] = useState([generateEmptyInteraction()] as InteractionType[]);

    const addInteraction = () => {
        setInteractions((prevState) => [...prevState, generateEmptyInteraction()]);
    }

    useEffect(() => {
        const generatedMarkup = generateMarkup({participantAName, participantBName, interactions});
        setMermaidMarkup(generatedMarkup);
    }, [interactions, participantAName, participantBName, setMermaidMarkup])

    return (
        <Box>
            <Box display={"flex"}
                 flexDirection={"column"}
                 gap={PADDING_SMALL}
                 sx={{border: `2px solid ${COLOUR_PRIMARY_LIGHT}`}}
                 paddingY={PADDING_SMALL}
            >
                <Box display={"flex"}
                     gap={PADDING_SMALL}
                     justifyContent={'center'}
                >
                    <TextField
                        id="filled-helperText"
                        label="Participant A Name"
                        defaultValue="A"
                        variant="filled"
                        onChange={(e) => setParticipantAName(e.target.value)}
                    />
                    <TextField
                        id="filled-helperText"
                        label="Participant B Name"
                        defaultValue="B"
                        variant="filled"
                        onChange={(e) => setParticipantBName(e.target.value)}
                    />
                </Box>

                <Box display={"flex"}
                     flexDirection={"column"}
                     gap={PADDING_SMALL}
                     sx={{height: '64vh', overflowY: 'scroll'}}
                >
                    {interactions.map(
                        (interactionValue) =>
                            <Interaction key={interactionValue.id}
                                         id={interactionValue.id}
                                         interaction={interactionValue}
                                         setInteractions={setInteractions}/>)
                    }
                </Box>
                <Button onClick={addInteraction}>Add Interaction</Button>
            </Box>
        </Box>
    )
}
