import * as React from 'react'

import { Route, Routes } from 'react-router-dom'

import { useMeasure } from 'react-use'
import { useTheme } from '@mui/styles'

import SideBar from 'src/components/Layouts/SideBar'

import { ContentBodyMain, ContentView } from './styled/TestApp.styled'
import { useMediaQuery } from '@mui/material'
import { type IMenuItem } from 'src/types/types'

const PageOne = React.lazy(async () => await import('src/components/ContentBody/PageOne'))
const PageTwo = React.lazy(async () => await import('src/components/ContentBody/PageTwo'))

interface ContentBodyProps {
  menuList: IMenuItem[]
}

const ContentBody = ({ menuList }: ContentBodyProps) => {
  const theme = useTheme()
  const match450 = useMediaQuery('(min-width: 450px)')

  const [open, setOpen] = React.useState(true)
  const sideMenuCtrl = React.useRef<HTMLDivElement>(null)

  const [setSideMenuCtrl, { width }] = useMeasure()

  React.useEffect(() => {
    if (sideMenuCtrl?.current) {
      setSideMenuCtrl(sideMenuCtrl.current)
    }
  }, [])

  return (
    <ContentBodyMain>
      <div ref={sideMenuCtrl}>
        {match450 && <SideBar open={open} setOpen={setOpen} menuList={menuList} />}
      </div>
      <ContentView style={{ width: `calc(100vw - ${width + 5}}px)` }} theme={theme}>
        <React.Suspense fallback={<React.Fragment />}>
          <Routes>
            <Route path="/*" element={<PageOne />} />
            <Route path="/page-two" element={<PageTwo />} />
            <Route path="/page-one" element={<PageOne />} />
          </Routes>
        </React.Suspense>
      </ContentView>
    </ContentBodyMain>
  )
}

export default ContentBody
