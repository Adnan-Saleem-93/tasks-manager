import {styled} from '@mui/material/styles'
import Tooltip, {tooltipClasses} from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import {Colors} from '../../../utils/constants'

const HtmlTooltip = styled(({className, ...props}) => (
  <Tooltip {...props} classes={{popper: className}} arrow />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: Colors.DARK,
    color: Colors.LIGHT,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9'
  }
}))

const CustomTooltip = ({placement = 'top', title = '', children, show = true, sx = null}) => {
  return show ? (
    <HtmlTooltip
      placement={placement}
      title={
        <>
          <Typography color="inherit">{title}</Typography>
        </>
      }
    >
      {children}
    </HtmlTooltip>
  ) : (
    <>{children}</>
  )
}

export default CustomTooltip
