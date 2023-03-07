import tagStyled from 'styled-components';

export const HeaderDiv = tagStyled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;

    padding-right : 20px;
    padding-left : 20px;

    height : ${props => props.theme.layout.header}px;
    width : 100%;
    
    background : ${props => props.theme.palette.background.top};
    color : ${props => props.theme.palette.primary.top};

    position : fixed;
    left : 0px;
    top : 0px;
    z-index : 100000;
`

export const Text = tagStyled.p`
    font-size: 25px;
`