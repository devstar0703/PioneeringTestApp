import * as React from 'react' ;

import { BrowserRouter , Routes , Route } from 'react-router-dom';

import { ThemeProvider, CssBaseline } from '@mui/material';

import useThemeMode from 'src/shared/hooks/useThemeMode';

const TestApp = React.lazy(() => import('./TestApp')) ;

const Main = () => {
    const {
        themeMode
    } = useThemeMode() ;

    return (
        <BrowserRouter>
            <ThemeProvider theme={themeMode}>
                <CssBaseline />
                <React.Suspense fallback={<React.Fragment />} >
                    <Routes>
                        <Route path="*" element={<TestApp />} />
                    </Routes>
                </React.Suspense>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default Main ;