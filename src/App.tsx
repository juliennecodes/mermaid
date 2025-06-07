import {Box, Typography} from "@mui/material";
import {MermaidMaker} from "./components/MermaidMaker.tsx";
import {useState} from "react";
import {MermaidPreview} from "./components/MermaidPreview.tsx";
import {BACKGROUND_COLOUR, PADDING_MEDIUM, TEXT_COLOURS_LIGHT} from "./helpers/styleConstants.ts";

function App() {
    const [mermaidMarkup, setMermaidMarkup] = useState('');

    return (
        <Box display={'flex'}
             justifyContent={'center'}
             paddingY={PADDING_MEDIUM}
             bgcolor={BACKGROUND_COLOUR}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{maxWidth: '1280px'}}
            >
                <Typography color={TEXT_COLOURS_LIGHT}>Mermaid Markup Maker</Typography>
                <MermaidMaker setMermaidMarkup={setMermaidMarkup}/>
                <Box>
                    {mermaidMarkup.length > 1 && <MermaidPreview content={mermaidMarkup}/>}
                </Box>
            </Box>
        </Box>
  )
}

export default App
