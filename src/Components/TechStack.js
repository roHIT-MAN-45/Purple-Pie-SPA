import React from "react";

// Styles Components Library
import styled from "styled-components";

// Twin Macro
import tw from "twin.macro";

// Components
import StackCard from "./StackCard";

// Assets
import assets from "../assets";

const TechStack = ({ banner }) => {
  return (
    <Container className={banner}>
      <SubContainer>
        <Content>
          <Heading>Technologies</Heading>
          <Description>
            Purple Pie has been developed using a cross-platform technology,
            Rect Native Expo
          </Description>
        </Content>

        {/* Stack Cards */}
        <StackWrapper>
          <StackCard icon={assets.react} text="React Native" />
          <StackCard icon={assets.javascript} text="Javascript" />
          <StackCard icon={assets.fastapi} text="FastAPI" />
          <StackCard icon={assets.python} text="Python" />
          <StackCard icon={assets.jwt} text="JWT" />
          <StackCard icon={assets.css} text="CSS" />
          <StackCard icon={assets.git} text="Git" />
          <StackCard icon={assets.postgresql} text="PostgreSQL" />
        </StackWrapper>
      </SubContainer>
    </Container>
  );
};

export default TechStack;

const Container = styled.div`
  ${tw`
bg-primary
flex 
justify-center 
items-center 
p-16 
sm:p-8
`}
`;

const SubContainer = styled.div`
  ${tw`
flex-col 
text-center
flex 
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
text-white
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
text-white
`}
`;

const StackWrapper = styled.div`
  ${tw`
flex 
justify-center 
flex-wrap
`}
`;
