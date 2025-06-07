import {Box, Button, IconButton, Modal} from "@mui/material";
import {useEffect, useState} from "react";
import mermaid from "mermaid";
import ClearRounded from "@mui/icons-material/ClearRounded";
import {
    BACKGROUND_COLOUR,
    MERMAID_DARK_MODE_COLOUR,
    MERMAID_LIGHT_MODE_COLOUR,
    PADDING_SMALL
} from "../helpers/styleConstants.ts";
import {ContentCopyRounded} from "@mui/icons-material";

export const RenderedMermaidPreview = ({content, setShowRendered}: { content: string, setShowRendered: unknown }) => {
    useEffect(() => {
        const mermaidDiagramElement = document.querySelector('#mermaid-diagram');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mermaidDiagramElement.innerHTML = content;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mermaidDiagramElement.removeAttribute('data-processed');
        mermaid.contentLoaded();
    }, [content])

    return (
        <Box display={"flex"}
             alignItems={'center'}
             justifyContent={"center"}
             sx={{width: '100vw', height: '100vh'}}
        >
        <Box display={"flex"}
             justifyContent={"center"}
             bgcolor={BACKGROUND_COLOUR}
             padding={PADDING_SMALL}
        >
            <Box display={"flex"}
                 justifyContent={"center"}
                 sx={{height: '90vh', overflowY: 'scroll'}}>
                <pre className="mermaid" id="mermaid-diagram"></pre>
            </Box>
            <Box alignSelf={"start"}>
                <IconButton onClick={() =>
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    setShowRendered(false)}
                >
                    <ClearRounded />
                </IconButton>
            </Box>
        </Box>
        </Box>
    )
}

export const MermaidPreview = ({content}: { content: string }) => {
    const [showRendered, setShowRendered] = useState(false);

    const copyMarkup = () => {
        navigator.clipboard.writeText(content).then(() => null);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const markupForPreview = content.replaceAll(MERMAID_DARK_MODE_COLOUR, MERMAID_LIGHT_MODE_COLOUR);

    return (
        <Box display={'flex'}>
            <Button onClick={copyMarkup}><ContentCopyRounded /></Button>
            <Button onClick={() => setShowRendered(!showRendered)}>Toggle Rendered Diagram</Button>
            {<Modal
                open={showRendered}
                onClose={() => setShowRendered(false)}
            >
                <RenderedMermaidPreview content={markupForPreview} setShowRendered={setShowRendered}/>
            </Modal>}
        </Box>
    )
}