import React from 'react';
import styled from "styled-components";
import Container from "../UI/Container";
import {Title} from "../UI/Title";
import {Body} from "../UI/Body";
import Filters from "../Filters";
import {FiltersToggle} from "../Filters/components/FiltersToggle";
import {useGetGamesQuery} from "../../services/GameboxService";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Content} from "../UI/Content";

const StyledGamesContainer = styled.div`
  height: 100%;
  background-color: #f4f4f4;
  padding: 50px 40px;

  @media (max-width: 768px) {
      padding: 40px ${props => props.theme.containerOffset} 60px;
  }
`

export const Home = (props) => {

  const {filters} = useTypedSelector(state => state.filtersReducer);
  const {page} = useTypedSelector(state => state.paginationReducer);
  const {data, isLoading, isFetching} = useGetGamesQuery({page, filters});

  return (
    <section>
      <StyledGamesContainer {...props}>
        <Container>
          <Title>Игры</Title>
          <Body>
            <FiltersToggle/>
            <Filters/>
            <Content data={data} isLoading={isLoading} isFetching={isFetching} />
          </Body>
        </Container>
      </StyledGamesContainer>
    </section>
  );
};