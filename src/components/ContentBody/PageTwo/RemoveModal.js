import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Button,
  styled
} from '@mui/material'

import { StyledPaper } from 'src/shared/styled'

const RemoveModal = (props) => {
  const { open, handleClose, count, clickEvent } = props

  const removeButton = () => {
    handleClose()
    clickEvent()
  }

  return (
    <Dialog open={open} fullWidth PaperComponent={StyledPaper}>
      <DialogTitle>Remove?</DialogTitle>
      <Divider />
      <DialogContent>Are you sure you want to remove the Remove {count}?</DialogContent>
      <Divider />
      <DialogActions>
        <RemoveButton onClick={removeButton}>Remove</RemoveButton>
        <CancelButton onClick={handleClose}>Cancel</CancelButton>
      </DialogActions>
    </Dialog>
  )
}

export default RemoveModal

const CancelButton = styled(Button)`
  border-radius: 5px;
  padding: 10px 20px;
  color: black;
  text-transform: capitalize;
  background: transparent;

  :hover {
    background: transparent;
  }
`

const RemoveButton = styled(Button)`
  background: #ffa500;
  border-radius: 5px;
  padding: 10px 20px;
  color: black;
  text-transform: capitalize;

  :hover {
    background: #ffa500;
  }
`
