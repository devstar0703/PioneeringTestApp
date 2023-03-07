import {
    styled,
    List
} from '@mui/material';

export default styled(List)`
    padding : 10px !important ;
    overflow : hidden !important ;
    border-radius : 10px !important;
    
    & .MuiListItem-root {
        border-radius : 0px !important ;
        border : 1px solid black !important;
        margin-bottom : 10px;
        cursor : pointer;
    }
`