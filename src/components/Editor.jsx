import styled from "styled-components";

const EditorTextArea = styled.textarea`
  height: 40vh;
  max-width: 100%;
  width: 700px;
  overflow: auto;
`;

function Editor({ markdown, onChangeMarkdown }) {
  return (
    <EditorTextArea
      onChange={(e) => onChangeMarkdown(e.target.value)}
      value={markdown}
      id="editor"
    ></EditorTextArea>
  );
}

export default Editor;
