import * as React from 'react' ;

import { Route, Routes } from 'react-router-dom';

import { useMeasure } from 'react-use';
import { useTheme } from '@mui/styles';

import SideBar from 'src/components/Layouts/SideBar';

import { ContentBodyMain, ContentView } from './styled/TestApp.styled';
import { useMediaQuery } from '@mui/material';

const PageOne = React.lazy(() => import('src/components/ContentBody/PageOne')) ;
const PageTwo = React.lazy(() => import('src/components/ContentBody/PageTwo')) ;

const ContentBody = (props) => {
    const {
        menuList
    } = props;
    
    const theme = useTheme();
    const match450 = useMediaQuery('(min-width: 450px)');

    const [open, setOpen] = React.useState(true);
    const sideMenuCtrl = React.useRef() ;

    const [ setSideMenuCtrl, {width} ] = useMeasure() ;

    React.useEffect(() => {
        setSideMenuCtrl(sideMenuCtrl.current) ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) ;

    return (
        <ContentBodyMain>
            <div ref={sideMenuCtrl}>
                { match450 && <SideBar 
                    open={open}
                    setOpen={setOpen}
                    menuList={menuList}
                /> }
            </div>
            <ContentView
                width={width}
                theme={theme}
            >
                <React.Suspense fallback={<React.Fragment />} >
                    <Routes>
                        <Route path="/*" element={<PageOne />}/>
                        <Route path="/page-two" element={<PageTwo />} />
                        <Route path="/page-one" element={<PageOne />} />
                    </Routes>
                </React.Suspense>
            </ContentView>
        </ContentBodyMain>
    )
}

export default ContentBody;