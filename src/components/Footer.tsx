import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  backdrop-filter: blur(10px);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="flex flex-col justify-center items-center p-24">
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            textAlign: "center"
          }}
        >
          Hit me up, as per your preference
        </h1>
        <p>
          Have a question? Reach out on{" "}
          <a
            href="mailto:aryanbajpai2411@gmail.com"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Email.
          </a>
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
