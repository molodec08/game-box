import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {FiX, FiSearch, FiChevronLeft} from 'react-icons/fi';
import {useRouter} from 'next/router';
import {useActions} from '../../hooks/useActions';
import {TextField} from '../UI/TextField';
import {ButtonBase} from '../UI/ButtonBase';
import {useOnClickOutside} from 'usehooks-ts';
import {useDebounce} from '../../hooks/useDebounce';
import {SearchList} from './components/SearchList';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const StyledForm = styled.form`
  position: relative;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: opacity 0.3s;
    
    ${props => props.visible && `
      opacity: 1;
      pointer-events: all;
    `}
  }
`

export const Search = ({props}) => {
  const {visible} = useTypedSelector(state => state.searchReducer)
  const {setSearch, setVisible} = useActions()
  const [value, setValue] = useState('')
  const {debouncedValue, setDebouncedValue} = useDebounce(value.trim(), 300);
  const formRef = useRef(null)
  const inputRef = useRef(null)
  const router = useRouter();

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    setSearch(value)
    // router.push(`/search/${value}`)
  }

  useEffect(() => {
    setVisible(false)
    setValue('')
  }, [router])

  const handleClearInput = () => {
    setValue('')
    setVisible(false)
    setDebouncedValue('')
  }

  useOnClickOutside(formRef, () => setVisible(false))

  const isActive = debouncedValue && visible;

  const openSearch = () => {
    setVisible(true)
    inputRef.current?.focus()
  }

  return (
    <>
      <StyledForm {...props} visible={visible} onSubmit={submitForm} ref={formRef} action="#">
        <TextField
          search
          ref={inputRef}
          variant='dark'
          type="search"
          value={value}
          onChange={handleChange}
          placeholder='Поиск...'
          onClick={() => setVisible(true)}
        />
        <ButtonBase
          hideSearch
          type='button'
          onClick={() => setVisible(false)}
        >
          <FiChevronLeft />
        </ButtonBase>
        <ButtonBase
          active={value}
          closeBtn
          type='button'
          onClick={handleClearInput}
        >
          <FiX />
        </ButtonBase>
        <ButtonBase
          searchBtn
          disabled={!value.length}
          onClick={submitForm}
        >
          <FiSearch />
        </ButtonBase>
        {isActive && <SearchList value={debouncedValue} />}
      </StyledForm>
      <ButtonBase onClick={openSearch} openSearch>
        <FiSearch />
      </ButtonBase>
    </>
  )
}