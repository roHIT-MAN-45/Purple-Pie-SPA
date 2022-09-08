import React from "react";

// Styles Components Library
import styled, { css } from "styled-components";

// Twin Macro
import tw from "twin.macro";

// Components
import Button from "./Button";

// Assets
import assets from "../assets";

const Section = ({
  primarySection,
  secondarySection,
  button,
  heading,
  description,
  image,
  banner,
}) => {
  // Primary Section ⚡
  if (primarySection)
    return (
      <Container className={banner} reverse={false}>
        <SubContainer reverse={false}>
          <Content reverse={false}>
            <Heading reverse={false}>{heading}</Heading>
            <Description reverse={false}>{description}</Description>
            {button && (
              <Button
                redirectLink={
                  "https://expo.dev/@rohitchavan110116114/purple-pie?release-channel=prod-v1"
                }
                text="Expo Go"
                logo={assets.expo}
              />
            )}
          </Content>
          <ImageContainer>
            <Image
              src={image}
              alt="section-image"
              reverse={false}
              className="minmd:h-11/12"
            />
          </ImageContainer>
        </SubContainer>
      </Container>
    );

  // Secondary Section ⚡
  if (secondarySection)
    return (
      <Container className={banner} reverse={true}>
        <SubContainer reverse={true}>
          <Content reverse={true}>
            <Heading reverse={true}>{heading}</Heading>
            <Description reverse={true}>{description}</Description>
            {button && (
              <Button
                redirectLink={
                  "https://expo.dev/@rohitchavan110116114/purple-pie?release-channel=prod-v1"
                }
                text="Expo Go"
                logo={assets.expo}
              />
            )}
          </Content>
          <ImageContainer>
            <Image
              src={image}
              alt="section-image"
              reverse={true}
              className="minmd:h-11/12"
            />
          </ImageContainer>
        </SubContainer>
      </Container>
    );
};

export default Section;

const Container = styled.div`
  ${tw`
/* Container */
min-h-screen
flex
justify-center
items-center
p-16
sm:p-8
`}
  /* Props Style */
  ${(props) =>
    props.reverse
      ? css`
          ${tw`
      bg-white
      `}
        `
      : css`
          ${tw`
      bg-primary
      `}
        `}
`;

const SubContainer = styled.div`
  ${tw`
flex
items-center
w-11/12
sm:w-full
minmd:w-3/4
`}

  /* Props Style */
    ${(props) =>
    props.reverse
      ? css`
          ${tw`
            flex-row-reverse
            md:flex-col-reverse
  `}
        `
      : css`
          ${tw`
flex-row 
md:flex-col
`}
        `}
`;

const Content = styled.div`
  ${tw`
flex-1 
w-full 
flex 
justify-start 
flex-col 
md:mb-10
`}
  /* Props Style */
  ${(props) =>
    props.reverse
      ? css`
          ${tw`text-right`}
          leftFadeIn
        `
      : css`
          ${tw`text-left`}
          rightFadeIn
        `}
`;

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

  /* Props Style */
  ${(props) =>
    props.reverse
      ? css`
          ${tw`
          text-dark
      `}
        `
      : css`
          ${tw`
          text-white
      `}
        `}
`;

const Description = styled.p`
  ${tw`
my-5 
minmd:my-10 
font-light 
text-xl 
minmd:text-3xl 
minlg:text-4xl 
minmd:leading-16
text-white
`}
  /* Props Style */
${(props) =>
    props.reverse
      ? css`
          ${tw`
        text-dark
    `}
        `
      : css`
          ${tw`
        text-white
    `}
        `}
`;

const ImageContainer = styled.div`
  ${tw`
flex
justify-center
items-center
flex-1 
p-8
sm:px-0
`}
`;

const Image = styled.img`
  ${tw`
w-full 
h-full
minmd:w-11/12
object-contain
`}
  /* Props Style */
  ${(props) =>
    props.reverse
      ? css`
      rightFadeIn
      `
      : css`
      leftFadeIn
      `}
`;
