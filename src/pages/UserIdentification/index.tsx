import React, { useCallback, useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import Button from "../../components/Button";

import {
  Container,
  Content,
  Form,
  Header,
  Title,
  Emoji,
  Input,
  Footer,
} from "./styles";

const UserIdentification: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const handleInputblur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputChange = useCallback((value) => {
    setIsFilled(!!value);
    setName(value);
  }, []);

  useEffect(() => {
    console.log("isFilled=", isFilled, "isFocused=", isFocused, "name=", name);
  }, [isFilled, isFocused, name]);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Content>
          <Form>
            <Header>
              <Emoji>{isFilled ? "😄" : "😃"}</Emoji>
              <Title>Como podemos {"\n"} chamar você?</Title>
            </Header>
            <Input
              isFocused={isFocused || isFilled}
              placeholder="Digite um nome"
              onBlur={handleInputblur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />

            <Footer>
              <Button title="Confirmar" />
            </Footer>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default UserIdentification;
