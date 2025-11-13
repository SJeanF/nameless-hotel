import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import StateSuggestions from "../StatesSuggestions";

const StateInput = () => {
  const [inputActive, setInputActive] = useState(false);

  const SafeClick = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (SafeClick && !SafeClick.current.contains(event.target))
        setInputActive(false);
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  const handleInput = () => {
    setInputActive(true);
  };

  return (
    <S.Container ref={SafeClick}>
      <S.StateInput
        $active={inputActive}
        placeholder="Para onde você vai?"
        onClick={handleInput}
      />
      <StateSuggestions active={inputActive} />
    </S.Container>
  );
};

export default StateInput;
