import React from 'react'
import {Box} from '@mui/material'
import FilterButton from '../../atoms/FilterButton'

const FilterSection = ({filterList}) => {
  return filterList.map((filter, index) => {
    return (
      <Box key={index}>
        <FilterButton text={filter.text} clickAction={filter.action} />
      </Box>
    )
  })
}

export default FilterSection
