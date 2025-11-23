import styled from "styled-components";

const symbolChoice = () => {
  if ((props) => props.$type === "next") {
    return "→";
  } else if ((props) => props.$type === "prev") {
    return "←";
  }
};

export const Container = styled.span`
  width: auto;
  height: auto;

  &:before {
    content: ${symbolChoice};
    font-weight: bolder;
    color: black;
    font-size: 24px;
  }
`;
