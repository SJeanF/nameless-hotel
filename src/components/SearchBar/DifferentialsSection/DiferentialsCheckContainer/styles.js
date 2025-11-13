import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: -4px;
  top: 56px;
  display: ${(props) => (props.$active ? "flex" : "none")};
  flex-direction: column;
  background-color: gray;
  width: 256px;
  height: 100vh;
  max-height: 256px;
  padding: 8px;
  border-radius: 4px;
`;

export const Tittle = styled.h4`
  padding: 16px;
`;

export const OptionsList = styled.ul`
  overflow-y: auto;

  :last-child {
    padding-bottom: 0;
  }
`;

export const Option = styled.li`
  padding: 12px 0;
  list-style: none;
`;

export const OptionCheckBox = styled.input`
  margin-left: 16px;
  cursor: pointer;
`;

export const OptionName = styled.label`
  margin-left: 8px;
  cursor: pointer;
`;
