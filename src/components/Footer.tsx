import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: rgb(0, 0, 0);
  padding: 10px;
  width: 100%;
  backdrop-filter: blur(10px);
  bottom: 0;
  height: 40px;
`;

const Text = styled.p`
  color: white;
  text-align: center;
  margin: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Text>@Made with {<>&hearts;</>} by Aryan Bajpai</Text>
    </FooterContainer>
  );
};

export default Footer;
