import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {ButtonBase} from "../../../UI/ButtonBase";
import Ul from "../../../UI/Ul";
import {SearchItem} from "../SearchItem";
import {useGetGamesBySearchQuery} from '../../../../services/GameboxService';
import {Spinner} from "../../../UI/Spinner";

const StyledWrapper = styled.div`
  --offset: 15px;
  position: absolute;
  z-index: 2;
  top: calc(100% + 7px);
  left: 0;
  width: 100%;
  color: #fff;
  background-color: #333;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
      top: 100%;
      border-radius: 0;
      background-color: #2f2f2f;
  }
`

const StyledList = styled.ul`

`

export const SearchList = ({value}) => {

  const [page, setPage] = useState('1')
  const {data, isFetching, refetch} = useGetGamesBySearchQuery({name: value, page})
  const {results} = {...data}

  useEffect(() => {
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <StyledWrapper>
      {/*<div className={styles.top}>*/}
      {/*  <div className={styles.btns}>*/}
      {/*    <ButtonBase*/}
      {/*      type='button'*/}
      {/*      onClick={() => handleChangeType('1')}*/}
      {/*      className={classNames(styles.btn, type === '1' && styles.active)}*/}
      {/*    >*/}
      {/*      Фильмы*/}
      {/*    </ButtonBase>*/}
      {/*    <ButtonBase*/}
      {/*      type='button'*/}
      {/*      onClick={() => handleChangeType('2')}*/}
      {/*      className={classNames(styles.btn, type === '2' && styles.active)}*/}
      {/*    >*/}
      {/*      Сериалы*/}
      {/*    </ButtonBase>*/}
      {/*    <ButtonBase*/}
      {/*      type='button'*/}
      {/*      onClick={() => handleChangeType('3')}*/}
      {/*      className={classNames(styles.btn, type === '3' && styles.active)}*/}
      {/*    >*/}
      {/*      Мультики*/}
      {/*    </ButtonBase>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <>
        {results?.length ? (
          <>
            {!isFetching ? (
              <>
                <Ul list>
                  {results.map((item) => (
                    <SearchItem key={item.id} item={item} />
                  ))}
                </Ul>
              </>
            ) : (
              <div>
                <Spinner variant='dark' size={'48px'} />
              </div>
            )}
          </>
        ) : (
          <p>По вашему запросу ничего не найдено</p>
        )}
      </>
      <ButtonBase more>Показать все</ButtonBase>
    </StyledWrapper>
  );
}