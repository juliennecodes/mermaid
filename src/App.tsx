import './App.css'
import {Box} from "@mui/material";
import {MermaidMaker} from "./components/MermaidMaker.tsx";
import {MermaidMarkupPreview} from "./components/MermaidMarkupPreview.tsx";
import {useState} from "react";

function App() {
    const [mermaidMarkup, setMermaidMarkup] = useState('');

    return (
    <Box display={"flex"}>
        <MermaidMaker setMermaidMarkup={setMermaidMarkup}/>
        <MermaidMarkupPreview content={mermaidMarkup}/>
    </Box>
  )
}

export default App
