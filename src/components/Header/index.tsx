import React from "react";

import imgProfile from "../../assets/profile.jpg";

import {
  Container,
  ProfileName,
  Greeting,
  UserName,
  ProfileImg,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <ProfileName>
        <Greeting>Olá,</Greeting>
        <UserName>Charles</UserName>
      </ProfileName>

      <ProfileImg source={imgProfile} />
    </Container>
  );
};

export default Header;
