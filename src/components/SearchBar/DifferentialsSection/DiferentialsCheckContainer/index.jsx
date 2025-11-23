import * as S from "./styles";

const DiferentialCheckContainer = ({ active }) => {
  const diferentials = [
    "Café da manhã incluso",
    "Wi-Fi de alta velocidade",
    "Ar condicionado",
    "Piscina",
    "Estacionamento gratuito",
    "Serviço de quarto",
    "Academia",
  ];

  return (
    <S.Container $active={active}>
      <S.Tittle>Opicionais</S.Tittle>
      <S.OptionsList>
        {diferentials.map((curr) => (
          <S.Option key={curr}>
            <S.OptionCheckBox
              id={`diferentials-${curr}`}
              name={`diferentials-${curr}`}
              value={`diferentials-${curr}`}
              type="checkbox"
            />
            <S.OptionName htmlFor="diferential">{curr}</S.OptionName>
          </S.Option>
        ))}
      </S.OptionsList>
    </S.Container>
  );
};

export default DiferentialCheckContainer;
