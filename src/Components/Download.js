import React from "react";

// Styles Components Library
import styled from "styled-components";

// Twin Macro
import tw from "twin.macro";

const Download = () => {
  return (
    <Container>
      <SubContainer>
        <Content>
          <Heading>Download the Purple Pie App</Heading>
          <Description>Download the app to place your first order</Description>
        </Content>
        <Button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1Szz0-LDe_GJVMCpe16QyZ4zHXQlfFbF5/view?usp=sharing",
              "_blank"
            )
          }
        >
          Download
        </Button>
      </SubContainer>
    </Container>
  );
};

export default Download;

const Container = styled.div`
  ${tw`
flex 
justify-center 
items-center 
p-16 
sm:p-8
text-white
`}
`;

const SubContainer = styled.div`
  ${tw`
flex 
flex-col 
text-center
items-center 
w-full 
minmd:w-3/4
`}
`;

const Content = styled.div``;

const Heading = styled.h1`
  ${tw`
font-bold
text-5xl 
sm:text-4xl 
minmd:text-6xl 
minlg:text-8xl 
leading-12
minmd:leading-13
text-black
`}
`;

const Description = styled.div`
  ${tw`
my-5 
minmd:my-10 
font-light 
text-xl 
minmd:text-3xl
minlg:text-4xl 
minmd:leading-16 
sm:text-xl
text-black
`}
`;

const Button = styled.button`
  ${tw`
  bg-primary 
  mt-4 
  py-4 
  px-6 
  text-white 
  text-lg 
  minmd:text-2xl  
  font-medium 
  rounded-lg hover:shadow-2xl
`}
`;
