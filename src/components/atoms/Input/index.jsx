import React from 'react'
import {TextField, Box} from '@mui/material'
import CustomTooltip from '../CustomTooltip'
import IconButton from '../IconButton'
import ErrorIcon from '@mui/icons-material/Error'

const InputComponent = ({
  value,
  changeHandler,
  variant = 'outlined',
  id = 'outlined-basic',
  customStyles = null,
  error = null,
  placeholder = ''
}) => {
  return (
    <TextField
      id={id}
      placeholder={placeholder}
      variant={variant}
      value={value}
      onChange={changeHandler}
      fullWidth
      error={error}
      sx={{...customStyles, background: '#fff'}}
    />
  )
}

export default InputComponent
