import { useState } from "react";
import Editor from "./components/Editor";
import initialMarkdown from "./data/markdown";
import Preview from "./components/Preview";
import styled from "styled-components";

const screenWidth = {
  small: "375px",
  medium: "550px",
  laptop: "768px",
};

const Wrapper = styled.div`
  display: flex;

  justify-content: center;
  gap: 3rem;
  padding: 2.5rem;

  @media (max-width: ${screenWidth.laptop}) {
    flex-direction: column;
    align-items: center;
  }
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <Wrapper>
      <Editor onChangeMarkdown={setMarkdown} markdown={markdown} />
      <Preview markdown={markdown} />
    </Wrapper>
  );
}

export default App;
