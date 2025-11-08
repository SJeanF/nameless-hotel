import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 16px;
  margin-top: 8px;
  padding-bottom: 8px;
  list-style: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 100%);
    background-color: black;
    width: 85%;
    height: 1px;
  }
`;

export const LocationIcon = styled.span`
  font-size: 24px;
  padding-bottom: 6px;
`;

export const TextsContainer = styled.div`
  margin-left: 16px;
`;

export const StateName = styled.h5`
  font-size: 18px;
`;

export const StateContry = styled.p`
  font-size: 16px;
`;
