import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import imgProfile from "../../assets/profile.jpg";

import {
  Container,
  ProfileName,
  Greeting,
  UserName,
  ProfileImg,
} from "./styles";

const Header: React.FC = () => {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    const loadStorageUser = async () => {
      const user = (await AsyncStorage.getItem("asyncUsers")) || "";

      setUserName(user);
    };

    loadStorageUser();
  }, []);

  return (
    <Container>
      <ProfileName>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </ProfileName>

      <ProfileImg source={imgProfile} />
    </Container>
  );
};

export default Header;
