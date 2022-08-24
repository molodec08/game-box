import React, {memo} from 'react'
import {useRouter} from 'next/router'
import {FiChevronLeft} from 'react-icons/fi'
import {ButtonBase} from '../ButtonBase'

export const BackButton = memo(({className, variant, ...props}) => {

  const router = useRouter()
  const handleBack = () => router.back()

  return (
    <ButtonBase
      backButton
      onClick={handleBack}
      startIcon={variant === 'icon' ? null : <FiChevronLeft />}
      {...props}
    >
      {variant === 'icon' ? <FiChevronLeft /> : 'Назад'}
    </ButtonBase>
  )
})

BackButton.displayName = 'BackButton'