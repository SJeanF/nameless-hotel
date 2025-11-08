import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  background-color: gray;
  width: 512px;
  height: 256px;
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.$active ? "visible" : "hidden")};
  opacity: ${(props) => (props.$active ? "1" : "0")};
  padding: 8px;
  border-radius: 4px;
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
