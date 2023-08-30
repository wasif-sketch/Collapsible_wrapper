import "./styles.css";
import React, { useState } from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
  padding: 0px;
`;

const Title = styled.h2`
  cursor: pointer;
  display: inline-block;
  align-items: center;
  ${({ titleStyle }) => titleStyle && { ...titleStyle }};
`;

const Hide = styled.img`
  width: 14px;
  height: 14px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  margin-right: 10px;
  transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0deg)")};
`;

const Content = styled.div`
  opacity: ${({ open }) => (open ? "1" : "0")};
`;
export default function App({ title, titleStyle, children }) {
  const [open, setOpen] = useState(true);

  const toggleSection = () => {
    setOpen(!open);
  };

  const showContent = "React Collapsible Content";
  const collpasible = "Collapsible";

  return (
    <div className="App">
      <SectionWrapper>
        <Title onClick={toggleSection} titleStyle={titleStyle}>
          <Hide
            open={open}
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af8238d8-20cd-4acb-999b-4a5ecacd9844"
            alt="icon"
          />
          {collpasible}
        </Title>
        <Content open={open}>{showContent}</Content>
      </SectionWrapper>
    </div>
  );
}
