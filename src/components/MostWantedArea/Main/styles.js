import styled from "styled-components";

export const ShowcaseList = styled.ul`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  grid-template-areas:
    "showcaseItem-0 showcaseItem-0 showcaseItem-0 showcaseItem-1 showcaseItem-1 showcaseItem-1"
    "showcaseItem-2  showcaseItem-2 showcaseItem-3 showcaseItem-3 showcaseItem-4 showcaseItem-4";
`;
