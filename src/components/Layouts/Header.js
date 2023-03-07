import { HeaderDiv, Text } from './styled/Header.styled';

import { useTheme } from '@mui/styles';

const Header = () => {
    const theme = useTheme();

    return (
        <>
            <HeaderDiv
                theme={theme}
            >
                <Text>Pioneering Programmers Test App</Text>
            </HeaderDiv>
        </>
    )
}

export default Header ;