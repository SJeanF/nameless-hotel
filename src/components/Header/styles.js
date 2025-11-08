import styled from "styled-components";

export const Header = styled.header`
  padding: 16px 0 48px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto 0 auto;
`;

export const Tittle = styled.h1`
  color: white;
`;

export const SignUpArea = styled.div``;

export const Button = styled.button`
  padding: 8px;
  margin-right: 8px;
  background-color: white;
  color: cadetblue;
  border: 1px solid cadetblue;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background-color: rgb(0, 0, 160);
    color: white;
    border-color: white;
  }
`;
