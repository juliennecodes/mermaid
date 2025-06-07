import './App.css'
import {Box} from "@mui/material";
import {MermaidMaker} from "./components/MermaidMaker.tsx";
import {MermaidMarkupPreview} from "./components/MermaidMarkupPreview.tsx";
import {useState} from "react";
import {MermaidPreview} from "./components/MermaidPreview.tsx";
import {PADDING_MEDIUM} from "./helpers/styleConstants.ts";

function App() {
    const [mermaidMarkup, setMermaidMarkup] = useState('');

    return (
        <Box display={'flex'}
             justifyContent={'center'}
             paddingY={PADDING_MEDIUM}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{maxWidth: '1280px'}}
            >
                <MermaidMaker setMermaidMarkup={setMermaidMarkup}/>
                <Box>
                    {mermaidMarkup.length > 1 && <MermaidPreview content={mermaidMarkup}/>}
                </Box>
            </Box>
        </Box>
  )
}

export default App
