import React from "react";

// Styles Components Library
import styled from "styled-components";

// Twin Macro
import tw from "twin.macro";

const StackCard = ({ icon, text }) => {
  return (
    <Container>
      <Image src={icon} alt={text} />
    </Container>
  );
};

export default StackCard;

const Container = styled.div`
  ${tw`
bg-white 
m-10 
p-6 
rounded-full
flex 
justify-around 
items-center 
flex-col 
hover:shadow-lg 
cursor-pointer 
w-40 
h-40 
minlg:w-80 
minlg:h-80
  `}
`;

const Image = styled.img`
  ${tw`
w-20 
h-20 
minlg:w-40 
minlg:h-40 
object-contain 
mb-1
`}
`;
