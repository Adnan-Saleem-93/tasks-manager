import React from 'react'
import Button from '@mui/material/Button'

const ButtonComponent = ({text, variant = 'outlined', customStyles = null, clickAction = null}) => {
  return (
    <Button
      variant={variant}
      sx={{
        ...customStyles,
        boxShadow: 'none',
        minWidth: '10rem',
        ml: 1
      }}
      onClick={clickAction}
    >
      {text}
    </Button>
  )
}

export default ButtonComponent
