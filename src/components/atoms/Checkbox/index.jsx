import React, {useState} from 'react'
import Checkbox from '@mui/material/Checkbox'

export default function ControlledCheckbox({isChecked = false, customAction = null}) {
  const [checked, setChecked] = useState(isChecked)

  const handleChange = (event) => {
    setChecked(event.target.checked)
    customAction && customAction()
  }

  return (
    <Checkbox checked={checked} onChange={handleChange} inputProps={{'aria-label': 'controlled'}} />
  )
}
