import React, {useEffect} from 'react';
import styled from "styled-components";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";
import {Loader} from "../Loader";
import {Subtitle} from "../Subtitle";
import Grid from "../Grid";
import {Pagination} from "../Pagination";

const StyledContent = styled.div`
  width: 100%;
`

export const Content = ({data, isLoading, isFetching}) => {
  const {page} = useTypedSelector(state => state.paginationReducer)
  const {setPage} = useActions()

  useEffect(() => {
    scrollTo(0, 0)
  }, [page])

  const GamesContent = (
    <>
      <Grid data={data} />
      <Pagination page={page} setPage={setPage} pages={Math.floor(data?.count / 20)} />
    </>
  )

  return (
    <>
      {isLoading || isFetching ? <Loader /> : (
        <StyledContent>
          {!data?.results?.length ? <Subtitle>Ничего не найдено!</Subtitle> : GamesContent}
        </StyledContent>
      )}
    </>
  );
};