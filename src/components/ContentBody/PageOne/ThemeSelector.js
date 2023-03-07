import useThemeMode from 'src/shared/hooks/useThemeMode';
import useWorkList from 'src/shared/hooks/useWorkList';

import tagStyled from 'styled-components';
import { StyledButton } from 'src/shared/styled';

const ThemeSelector = () => {
    const {
        themeTemp,
        onChangeThemeMode
    } = useThemeMode();
  
    const {
        pushWorkReg
    } = useWorkList();
    
    const handleChangeThemeMode = () => {
        onChangeThemeMode(themeTemp === 'light' ? 'dark' : 'light');
        pushWorkReg(`Theme was set to ${themeTemp === 'light' ? 'Dark' : 'Light'}`);
    }
    return (
        <ThemeSelectorMain>
            <StyledButton onClick={handleChangeThemeMode}>{`Set ${themeTemp === 'light' ? 'Dark' : 'Light'} Theme`}</StyledButton>
        </ThemeSelectorMain>
    )   
}

export default ThemeSelector;

const ThemeSelectorMain = tagStyled.div`
    padding-bottom : 10px;
`