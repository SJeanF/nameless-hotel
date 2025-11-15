import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: auto;
  margin-top: 128px;
`;

export const Tittle = styled.h3`
  font-size: 24px;
`;

export const ReasonsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 32px;
`;
