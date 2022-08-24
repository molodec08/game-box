import React from 'react';
import styled from "styled-components";
import {FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiChevronRight} from 'react-icons/fi';
import {ButtonBase} from "../ButtonBase";

const StyledPagination = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  width: fit-content;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  @media (max-width: 576px) {
    height: 43px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #d3d3d3;
  }
`

const StyledPaginationValue = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 100%;
  border-right: 1px solid #d3d3d3;
  border-left: 1px solid #d3d3d3;
`

export const Pagination = ({page, setPage, pages, className}) => {

  const isFirstPage = page === 1;
  const isLastPage = page === pages;

  const handlePagination = () => {
    console.log('teeest')
  }

  return (
    <>
      {pages !== 1 && (
        <StyledPagination>
          <ButtonBase
            onClick={() => setPage(1)}
            btnPagination
            leftPagination
            disabled={isFirstPage}
          >
            <FiChevronsLeft />
          </ButtonBase>
          <ButtonBase
            onClick={() => setPage(page - 1)}
            btnPagination
            disabled={isFirstPage}
          >
            <FiChevronLeft />
          </ButtonBase>
          <StyledPaginationValue>
						{page} / {pages}
					</StyledPaginationValue>
          <ButtonBase
            disabled={isLastPage}
            onClick={() => setPage(page + 1)}
            btnPagination
          >
            <FiChevronRight />
          </ButtonBase>
          <ButtonBase
            disabled={isLastPage}
            onClick={() => setPage(Number(pages))}
            btnPagination
            rightPagination
          >
            <FiChevronsRight />
          </ButtonBase>
        </StyledPagination>
      )}
    </>
  );
}