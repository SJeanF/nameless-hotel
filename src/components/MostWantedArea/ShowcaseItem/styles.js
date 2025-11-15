import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  height: 256px;
  grid-area: ${(props) => props.$gridArea};
  list-style: none;
  background-image: url(${(props) => props.$src});
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 8px;
  z-index: 0;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, transparent 70%, black 110%);
    border-radius: 8px;
    z-index: 1;
    inset: 0;
  }
`;

export const CityName = styled.h5`
  position: relative;
  margin: 24px 0 0 16px;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const StateIcon = styled.img`
  max-height: 1em;
  margin-left: 8px;
`;
