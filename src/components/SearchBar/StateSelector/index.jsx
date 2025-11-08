import { useState } from "react";
import * as S from "./styles";
import StateSuggestions from "../../StatesSuggestions";

const StateSelector = () => {
  const [inputActive, setInputActive] = useState(true);

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

export default StateSelector;
