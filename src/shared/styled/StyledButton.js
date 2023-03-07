import {
    styled,
    Button
} from '@mui/material';

export default styled(Button)`
    background : ${props => props.theme.palette.button.bg};
    border-radius : 5px;
    padding: 10px 20px;
    color : ${props => props.theme.palette.button.text};
    text-transform : capitalize ;

    :hover {
        background : ${props => props.theme.palette.button.bg};
    }

    &:disabled {
        background : gray;
        cursor : not-allowed !important;
    }
`