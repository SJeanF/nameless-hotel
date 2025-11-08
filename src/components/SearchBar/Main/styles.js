import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  max-width: 1024px;
  width: 100%;
`;

export const SearchBar = styled.div`
  background-color: yellow;
  display: grid;
  grid-template-columns: 1fr 1fr 20%;
  gap: 4px;
  min-height: 48px;
  padding: 4px;
  border-radius: 4px;
`;

export const ButtonsContainer = styled.div`
  position: relative;
`;

export const SubmitButton = styled.button`
  border: none;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: blue;
  font-weight: bold;
`;
