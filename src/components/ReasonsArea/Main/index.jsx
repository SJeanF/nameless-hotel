import { faMoneyBill, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { SectionTitle } from "../../ComumStyledComponents/styles";
import ReasonItem from "../ReasonItem";
import * as S from "./styles";
import { faClock, faMap } from "@fortawesome/free-regular-svg-icons";

const ReasonsArea = () => {
  const namelessDiferentials = [
    {
      icon: faMoneyBill,
      title: "Facilidade de Pagamento e Cancelamento",
      description:
        "Flexibilidade total na reserva, com múltiplas formas de pagamento e políticas de cancelamento claras.",
    },
    {
      icon: faMap,
      title: "Acesso a Destinos Distantes",
      description:
        "Encontre hospedagens em locais exclusivos e explore destinos únicos com conforto e segurança.",
    },
    {
      icon: faClock,
      title: "Disponibilidade em Tempo Real",
      description:
        "Confira quartos disponíveis no momento da busca com atualização instantânea do sistema.",
    },
    {
      icon: faThumbsUp,
      title: "Comparação de Preços",
      description:
        "Compare tarifas de forma simples e encontre as melhores ofertas com transparência total.",
    },
  ];

  return (
    <S.Container>
      <SectionTitle>Por que usar a Alpha imóveis?</SectionTitle>
      <S.ReasonsList>
        {namelessDiferentials.map((curr) => (
          <ReasonItem
            key={`reason-${curr.title}`}
            icon={curr.icon}
            title={curr.title}
            description={curr.description}
          />
        ))}
      </S.ReasonsList>
    </S.Container>
  );
};

export default ReasonsArea;
