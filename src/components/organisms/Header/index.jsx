import React from 'react'
import {Colors} from '../../../utils/constants'
import {Typography} from '@mui/material'
import Grid from '@mui/material/Grid'

const Header = () => {
  return (
    <Grid
      container
      spacing={2}
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      paddingX={1}
      paddingY={2}
    >
      <Grid item xs={12}>
        <Typography variant="h4" color={Colors.PRIMARY}>
          Task Manager
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header
