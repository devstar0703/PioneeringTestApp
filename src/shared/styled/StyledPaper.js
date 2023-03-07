import { Paper, styled } from '@mui/material'

export default styled(Paper)`
  border-radius: 10px;
  border: 1px solid gray;

  & .MuiDialogContent-root {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px 20px 20px 20px !important;
  }

  & .MuiDialogTitle-root {
  }

  & .MuiDialogActions-root {
    padding: 10px;
  }
`
