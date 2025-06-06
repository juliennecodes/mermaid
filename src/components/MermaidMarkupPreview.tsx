import {Box, TextField} from "@mui/material";

export const MermaidMarkupPreview = ({content}: {content: string}) => {
    return (
        <Box>
            <TextField
                multiline
                minRows={12}
                value={content}
                sx={{width: 540}}
            />
        </Box>
    )
}