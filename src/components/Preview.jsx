import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const PreviewSection = styled.div`
  h1 {
    text-align: center;
  }

  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Preview({ markdown }) {
  return (
    <PreviewSection id="preview">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </PreviewSection>
  );
}

export default Preview;
