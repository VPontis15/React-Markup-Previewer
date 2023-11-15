import ReactMarkdown from "react-markdown";

function Preview({ markdown }) {
  return (
    <div id="preview">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Preview;
