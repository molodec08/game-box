import React from "react";
import {useActions} from '../../../../hooks/useActions'
import {useTypedSelector} from '../../../../hooks/useTypedSelector'
import {FiSliders} from 'react-icons/fi'
import {useLockedBody} from 'usehooks-ts'
import {ButtonBase} from "../../../UI/ButtonBase";

export const FiltersToggle = () => {

  const {openedFilters} = useTypedSelector(state => state.toggleReducer);
  const {toggleFilters} = useActions()

  useLockedBody(openedFilters)

  const handleToggle = () => {
    toggleFilters(!openedFilters)
  }

  return (
    <ButtonBase variant={'stroke'} btn startIcon={<FiSliders />} filterToggle onClick={handleToggle}>
      Фильтры
    </ButtonBase>
  )
}