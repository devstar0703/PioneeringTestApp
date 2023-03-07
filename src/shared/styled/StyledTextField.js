import { TextField, styled } from '@mui/material'

export default styled(TextField)`
  & .MuiFormHelperText-root {
    font-size: 14px;
    font-weight: bold;
    color: red;
    text-align: left;
    width: 100%;
  }

  &.success {
    & .MuiFormHelperText-root {
      color: #18bd18;
    }
  }

  &.error {
    & .MuiFormHelperText-root {
      color: red;
    }
  }

  & .MuiOutlinedInput-root {
    border-radius: 10px;

    & fieldset {
      border-color: 1px solid black;
    }

    &:hover fieldset {
      border-color: 1px solid black;
    }

    &.Mui-focused fieldset {
      border-color: 1px solid black;
    }
  }

  & .MuiInputBase-input {
    color: ${(props) => props.theme.palette.primary.content} !important;
    border-radius: 10px;
    padding: 5px !important;
  }
`
