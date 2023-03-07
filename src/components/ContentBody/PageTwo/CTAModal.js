import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  styled,
  Button
} from '@mui/material'

import { StyledPaper } from 'src/shared/styled'

const CTAModal = (props) => {
  const { open, handleClose } = props

  return (
    <Dialog open={open} fullWidth PaperComponent={StyledPaper}>
      <DialogTitle>Information</DialogTitle>
      <Divider />
      <DialogContent>You have clicked the Single CTA</DialogContent>
      <Divider />
      <DialogActions>
        <OkayButton onClick={handleClose}>Close</OkayButton>
      </DialogActions>
    </Dialog>
  )
}

export default CTAModal

const OkayButton = styled(Button)`
  background: #03f;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  text-transform: capitalize;

  :hover {
    background: #03f;
  }
`
