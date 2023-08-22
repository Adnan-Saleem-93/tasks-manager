import React from 'react'
import InputComponent from '../../atoms/Input'
import ButtonComponent from '../../atoms/Button'
import {Grid, InputLabel, Typography} from '@mui/material'
import {Colors} from '../../../utils/constants'

const InputFieldWithButton = ({
  value,
  onChange,
  variant = 'outlined',
  inputId = 'textfield-outlined',
  label = '',
  inputStyles = null,
  error = null,
  btnText,
  btnVariant = 'outlined',
  btnClick = null,
  btnStyles = null,
  placeholder = ''
}) => {
  return (
    <Grid container display="flex" flexDirection="column">
      <Grid item xs={12} display="flex">
        <InputLabel sx={{textAlign: 'left', fontWeight: 700, mr: 1}}>{label}</InputLabel>
        {/* show error text once error occurs */}
        {error && (
          <Typography variant="body1" sx={{color: Colors.ERROR}}>
            <em>({error})</em>
          </Typography>
        )}
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="space-between">
        <InputComponent
          value={value}
          variant={variant}
          id={inputId}
          changeHandler={onChange}
          customStyles={inputStyles}
          error={error}
          placeholder={placeholder}
        />
        <ButtonComponent
          text={btnText}
          variant={btnVariant}
          customStyles={btnStyles}
          clickAction={btnClick}
        />
      </Grid>
    </Grid>
  )
}

export default InputFieldWithButton
