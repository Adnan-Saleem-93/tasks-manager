import React, {useEffect} from 'react'

import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import {useStore} from '../../../context/store'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function Notification() {
  const {
    notification: {open, message, severity},
    hideNotification
  } = useStore((state) => state)

  useEffect(() => {
    setTimeout(() => {
      hideNotification()
    }, [5000])
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    hideNotification()
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{width: '100%'}}>
        {message}
      </Alert>
    </Snackbar>
  )
}
