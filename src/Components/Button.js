import React from "react";

// Styles Components Library
import styled from "styled-components";

// Twin Macro
import tw from "twin.macro";

const Button = ({ redirectLink, logo, text }) => {
  return (
    <Container
      className="w-fit"
      onClick={() => window.open(redirectLink, "_blank")}
    >
      <Logo src={logo} alt="btn-logo" />

      <Content>
        <Text>{text}</Text>
      </Content>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  ${tw`
  bg-black 
  flex 
  items-center 
  py-2 
  px-4 
  rounded-md 
  mt-2 
  cursor-pointer
  `}
`;

const Logo = styled.img`
  ${tw`
w-5 
h-5
minmd:w-10 
minmd:h-10 
object-contain
`}
`;

const Content = styled.div``;

const Text = styled.p`
  ${tw`
ml-3
text-white
minmd:text-lg
`}
`;
