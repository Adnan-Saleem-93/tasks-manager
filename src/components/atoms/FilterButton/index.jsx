import React, {useMemo} from 'react'
import Button from '@mui/material/Button'
import {Colors} from '../../../utils/constants'
import {useStore} from '../../../context/store'

const FilterButton = ({text, clickAction = null}) => {
  const {selectedFilter} = useStore((state) => state)
  const isSelected = useMemo(() => selectedFilter === text, [selectedFilter, text])

  return (
    <Button
      variant="outlined"
      sx={{
        boxShadow: 'none',
        minWidth: '90%',
        background: isSelected ? '#1e558b' : Colors.LIGHT,
        color: isSelected ? Colors.LIGHT : Colors.SECONDARY,
        borderRadius: 5,
        '&:hover': {
          background: isSelected ? '#1b3472' : Colors.LIGHT
        }
      }}
      onClick={clickAction}
    >
      {text}
    </Button>
  )
}

export default FilterButton
