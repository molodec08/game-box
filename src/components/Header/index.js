import React, {useRef} from 'react';
import styled from "styled-components";
import {Search} from '../Search';
import {useOnClickOutside} from 'usehooks-ts';
import Container from "../UI/Container";
import {Logo} from '../UI/Logo';
import {Burger} from '../UI/Burger';
import Flex from "../UI/Flex";
import {useActions} from "../../hooks/useActions";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
  background-color: ${props => props.backgroundColor || props.theme.colors.dark};

  @media (min-width: 768px) {
      background-color: ${props => props.backgroundColor || props.theme.colors.lightDark};
  }
`

export const Header = ({...props}) => {

  const ref = useRef(null)
  const {toggleMenu} = useActions()

  useOnClickOutside(ref, () => toggleMenu(false))

  return (
    <StyledHeader {...props}>
      <Container headerContainer>
        <Flex
          {...props}
          align={'center'}
          justify={'space-between'}
        >
          <Logo />
          <Search />
          <Burger />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
