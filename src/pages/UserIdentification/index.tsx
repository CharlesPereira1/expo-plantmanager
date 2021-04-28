import React from "react";

import Button from "../../components/Button";

import {
  Container,
  Content,
  Form,
  Title,
  Emoji,
  Input,
  Footer,
} from "./styles";

const UserIdentification: React.FC = () => {
  return (
    <Container>
      <Content>
        <Form>
          <Emoji>😄</Emoji>
          <Title>Como podemos {"\n"} chamar você?</Title>
          <Input />

          <Footer>
            <Button title="Confirmar" />
          </Footer>
        </Form>
      </Content>
    </Container>
  );
};

export default UserIdentification;
