import React from "react";
import Titulo from "../Titulo";
import Conta from "../Conta";
import styled from "styled-components";
import Extrato from "../Extrato";

const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
  color: #A9A9A9;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.text};
  justify-content: space-between;
`;

export default () => {
  return (
    <Container>
      <Titulo>Olá Paulo!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};
