import React, { useCallback, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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

  const navigate = useNavigation();

  const handleStart = () => {
    if (name) navigate.navigate("Confirmation");
  };

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

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled && !!name ? "😄" : "😃"}</Emoji>
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
                <Button
                  title="Confirmar"
                  onPress={handleStart}
                  actived={!!name}
                />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default UserIdentification;
