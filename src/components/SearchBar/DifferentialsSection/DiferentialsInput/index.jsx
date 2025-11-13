import { useEffect, useRef, useState } from "react";
import DiferentialCheckContainer from "../DiferentialsCheckContainer";
import * as S from "./styles";

const DiferentialsInput = () => {
  const [inputActive, setInputActive] = useState(false);

  const SafeClick = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (SafeClick.current && !SafeClick.current.contains(event.target)) {
        setInputActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInput = () => {
    setInputActive(true);
  };

  return (
    <S.Container ref={SafeClick}>
      <S.DiferentialInput onClick={handleInput} type="button">
        Diferenciais
      </S.DiferentialInput>
      <DiferentialCheckContainer active={inputActive} />
    </S.Container>
  );
};

export default DiferentialsInput;
