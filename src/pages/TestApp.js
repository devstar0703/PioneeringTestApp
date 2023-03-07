import { TestAppLayout } from './styled/TestApp.styled'

import Header from 'src/components/Layouts/Header'
import ContentBody from 'src/pages/ContentBody'

import { useTheme } from '@mui/styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPager, faMobile } from '@fortawesome/free-solid-svg-icons'

const TestApp = () => {
  const menuList = [
    {
      label: 'Page 1',
      icon: <FontAwesomeIcon icon={faPager} />,
      link: '/page-one'
    },
    {
      label: 'Page 2',
      icon: <FontAwesomeIcon icon={faMobile} />,
      link: '/page-two'
    }
  ]

  const theme = useTheme()

  return (
    <TestAppLayout>
      <Header theme={theme} menuList={menuList} />
      <ContentBody menuList={menuList} />
    </TestAppLayout>
  )
}

export default TestApp
