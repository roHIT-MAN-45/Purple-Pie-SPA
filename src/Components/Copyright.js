import React from "react";

// Styles Components Library
import styled from "styled-components";

// Twin Macro
import tw from "twin.macro";

const Copyright = ({ banner }) => {
  return (
    <Container className={banner}>
      <Text>
        Copyright © Purple Pie Created By{" "}
        <Highlight>Rohit Sunil Chavan</Highlight> All Rights Reserved.
      </Text>
    </Container>
  );
};

export default Copyright;

const Container = styled.div`
  ${tw`
bg-primary 
px-4 
py-2 
justify-center 
items-center 
flex-col 
text-center
text-white
`}
`;

const Text = styled.p`
  ${tw`
my-5 
minmd:my-10 
font-light 
text-xl 
minmd:text-3xl 
minmd:leading-16
minlg:text-4xl 
sm:text-lg
xs:text-base
`}
`;

const Highlight = styled.span`
  ${tw`font-medium`}
`;
