import { useState } from "react";
import Editor from "./components/Editor";
import initialMarkdown from "./data/markdown";
import Preview from "./components/Preview";

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <div>
      <Editor onChangeMarkdown={setMarkdown} markdown={markdown} />
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;
