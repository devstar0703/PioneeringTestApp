/* eslint-disable @typescript-eslint/prefer-optional-chain */
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

interface DeleteModalProps {
  open: boolean
  handleClose: () => void
  btnRef: React.RefObject<HTMLButtonElement>
  clickEvent: () => void
}

const DeleteModal = ({
  open,
  handleClose,
  btnRef,
  clickEvent
}: DeleteModalProps) => {
  const deleteButton = () => {
    handleClose()
    clickEvent()
  }

  return (
    <Dialog open={open} fullWidth PaperComponent={StyledPaper}>
      <DialogTitle>Delete?</DialogTitle>
      <Divider />
      <DialogContent>
        Are you sure you want to remove the {btnRef && btnRef.current && btnRef.current.innerText}? This cannot be undone!
      </DialogContent>
      <Divider />
      <DialogActions>
        <DeleteButton onClick={deleteButton}>Delete</DeleteButton>
        <CancelButton onClick={handleClose}>Cancel</CancelButton>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteModal

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

const DeleteButton = styled(Button)`
  background: #cc0000;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  text-transform: capitalize;

  :hover {
    background: #cc0000;
  }
`
