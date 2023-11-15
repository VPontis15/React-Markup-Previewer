function Editor({ markdown, onChangeMarkdown }) {
  return (
    <textarea
      onChange={(e) => onChangeMarkdown(e.target.value)}
      value={markdown}
      id="editor"
    ></textarea>
  );
}

export default Editor;
