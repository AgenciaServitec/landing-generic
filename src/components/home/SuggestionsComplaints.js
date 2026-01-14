import styled from "styled-components";
import { FormContact } from "../ui";
import QRCode from "react-qr-code";

export const SuggestionsComplaints = ({ title }) => {
  return (
    <Container id="sugerencias">
      <h2 className="title">{title}</h2>
      <FormContact />
      <QRCode
        value="https://dscs.jbiene.com/#sugerencias"
        style={{ display: "none" }}
      />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: auto;
  padding: 1.2rem;
  .title {
    text-align: center;
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-right: 2rem;
  }
`;
