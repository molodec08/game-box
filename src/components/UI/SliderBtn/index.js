import {forwardRef} from "react"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import {ButtonBase} from "../ButtonBase"

export const SliderBtn = forwardRef(({dir}, ref) => {
  return (
    <ButtonBase
      sliderBtn
      ref={ref}
    >
      {dir === 'left' ? <FiChevronLeft /> : <FiChevronRight />}
    </ButtonBase>
  )
})

SliderBtn.displayName = 'SliderBtn'