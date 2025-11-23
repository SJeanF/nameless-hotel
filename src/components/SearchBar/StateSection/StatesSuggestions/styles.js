import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: -4px;
  top: 56px;
  background-color: white;
  width: 512px;
  height: 256px;
  flex-direction: column;
  display: ${(props) => (props.$active ? "flex" : "none")};
  padding: 8px;
  border-radius: 4px;
  box-shadow: 1px 2px 16px black;
`;

export const Tittle = styled.h4`
  padding: 16px;
`;

export const SuggestionsList = styled.ul`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  :last-child {
    margin-bottom: 0;
  }
`;
