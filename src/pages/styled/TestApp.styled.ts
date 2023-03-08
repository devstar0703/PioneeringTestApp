import tagStyled from 'styled-components'

export const TestAppLayout = tagStyled.div`
    height : 100vh ;
    width : 100%;
`
export const ContentView = tagStyled.div`
    flex-grow : 1;
    position : relative ;
    background : ${(props) => props.theme.custom.palette.background.content};

    margin-top : ${(props) => props.theme.custom.layout.header}px;
    padding-top : 40px;
    padding-left : 30px;
    padding-right : 30px;

    min-height : calc(100vh - ${(props) => props.theme.custom.layout.header}px);

    @media screen and (max-width: 450px) {
        padding : 10px;
    }
`

export const ContentBodyMain = tagStyled.div`
  display : flex;
`
