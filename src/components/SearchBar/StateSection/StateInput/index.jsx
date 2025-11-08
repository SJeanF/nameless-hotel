import { useState } from "react";
import * as S from "./styles";
import StateSuggestions from "../StatesSuggestions";

const StateInput = () => {
  const [inputActive, setInputActive] = useState(false);

  const handleInput = () => {
    setInputActive(true);
  };

  const BlurInput = () => {
    setInputActive(false);
  };

  return (
    <S.Container>
      <S.StateInput
        $active={inputActive}
        placeholder="Para onde você vai?"
        onClick={handleInput}
        onBlur={BlurInput}
      />
      <StateSuggestions active={inputActive} />
    </S.Container>
  );
};

export default StateInput;
