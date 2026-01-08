import MDEditor from "@uiw/react-md-editor"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import { Box } from "@mui/material"


const RichTextEditor = ({ value = "", onChange, placeholder, readOnly }) => {
    return (
        <Box data-color-mode="light">
            <MDEditor
                preview="edit"
                hideToolbar={false}
                data-color-mode="light"
                style={{ borderRadius: 0 }}
                value={value}
                onChange={(val) => onChange?.(val || "")}
                textareaProps={{
                    placeholder,
                    disabled: readOnly,
                }}
                height={'100vh'}
            />
        </Box>
    )
}

export default RichTextEditor