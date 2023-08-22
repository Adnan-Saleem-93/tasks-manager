import React from 'react'
import {Button} from '@mui/material'
import CustomTooltip from '../CustomTooltip'

const IconButton = ({
  icon,
  text = '',
  variant = 'outlined',
  color = 'primary',
  clickAction = null,
  customStyles = null
}) => {
  return (
    <CustomTooltip title={text} placement="top">
      <Button
        sx={{...customStyles, borderRadius: 5, color: color}}
        variant={variant}
        onClick={clickAction}
      >
        {icon}
      </Button>
    </CustomTooltip>
  )
}

export default IconButton
