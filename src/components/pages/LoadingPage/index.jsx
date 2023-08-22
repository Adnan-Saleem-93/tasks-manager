import React from 'react'
import {Box, CircularProgress} from '@mui/material'

const LoadingPage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" width="100vw" height="100vh">
      <CircularProgress size={120} />
    </Box>
  )
}

export default LoadingPage
