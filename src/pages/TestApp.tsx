import { TestAppLayout } from './styled/TestApp.styled'

import Header from 'src/components/Layouts/Header'
import ContentBody from 'src/pages/ContentBody'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPager, faMobile } from '@fortawesome/free-solid-svg-icons'
import { type IMenuItem } from 'src/types/types'

const TestApp = () => {
  const menuList: IMenuItem[] = [
    {
      label: 'Page 1',
      // eslint-disable-next-line react/react-in-jsx-scope
      icon: <FontAwesomeIcon icon={faPager} />,
      link: '/page-one'
    },
    {
      label: 'Page 2',
      // eslint-disable-next-line react/react-in-jsx-scope
      icon: <FontAwesomeIcon icon={faMobile} />,
      link: '/page-two'
    }
  ]

  return (
    <TestAppLayout>
      <Header menuList={menuList} />
      <ContentBody menuList={menuList} />
    </TestAppLayout>
  )
}

export default TestApp
