import { TestAppLayout } from './styled/TestApp.styled';

import Header from 'src/components/Layouts/Header';
import ContentBody from 'src/pages/ContentBody';

import { useTheme } from '@mui/styles';

const TestApp = () => {
    const theme = useTheme();

    return (
        <TestAppLayout>
            <Header
                theme={theme}
            />
            <ContentBody />
        </TestAppLayout>
    )
}

export default TestApp;