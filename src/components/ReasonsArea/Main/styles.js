import styled from "styled-components";
import { SectionComumContainer } from "../../ComumStyledComponents/styles";

export const Container = styled(SectionComumContainer)`
  margin-top: 128px;
`;

export const ReasonsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 32px;
`;
