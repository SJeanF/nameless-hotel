import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const StateInput = styled.input`
  height: 100%;
  width: 100%;
  cursor: text;
  border: none;
  font-size: 16px;
  text-align: center;
  outline: none;

  &::placeholder {
    color: black;
    opacity: ${(props) => (props.$active ? ".5" : "1")};
  }
`;
