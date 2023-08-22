import React from 'react'
import {Box} from '@mui/material'
import IconButton from '../../atoms/IconButton'

const RowActions = ({actionsList}) => {
  return (
    <Box>
      {actionsList.map((action, index) => {
        const {icon, text, color, variant, onClick} = action
        return (
          <IconButton
            key={index}
            icon={icon}
            text={text}
            color={color}
            variant={variant}
            clickAction={onClick}
          />
        )
      })}
    </Box>
  )
}

export default RowActions
