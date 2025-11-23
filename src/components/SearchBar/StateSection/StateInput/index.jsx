import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import StateSuggestions from "../StatesSuggestions";

const StateInput = () => {
  const [inputValue, setInputValue] = useState("");
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

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <S.Container ref={SafeClick}>
      <S.StateInput
        $active={inputActive}
        placeholder="Para onde você vai?"
        value={inputValue}
        onClick={handleInput}
        onChange={handleChangeInput}
      />
      <StateSuggestions active={inputActive} />
    </S.Container>
  );
};

export default StateInput;
