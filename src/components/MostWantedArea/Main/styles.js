import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 32px auto 0;
`;

export const Title = styled.h5`
  font-size: 24px;
`;

export const SubTitle = styled.h6`
  font-size: 16px;
  color: darkgray;
`;

export const ShowcaseList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  grid-template-areas:
    "showcaseItem-1 showcaseItem-1 showcaseItem-1 showcaseItem-2 showcaseItem-2 showcaseItem-2"
    "showcaseItem-3  showcaseItem-3 showcaseItem-4 showcaseItem-4 showcaseItem-5 showcaseItem-5";
`;
