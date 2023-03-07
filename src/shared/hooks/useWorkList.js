import * as React from 'react'

import { useLocalStorage } from 'react-use'
import { getCurrentDate } from 'src/utils/helper/dateHelper'

const WorkListContext = React.createContext({})

export const WorkListProvider = ({ children }) => {
  const [workList, setWorkList] = useLocalStorage('work_list', [])
  const [countOfBtn, setCountOfBtn] = useLocalStorage('count_btn', '0')

  const provider = {
    workList,
    countOfBtn,

    pushWorkReg: (detail) => {
      let tempWorkList = [...workList]
      tempWorkList.push(`${getCurrentDate()} ${detail}`)

      setWorkList([...tempWorkList])
    },

    removeWorkReg: (index) => {
      let tempWorkList = [...workList]
      tempWorkList.splice(index, 1)

      setWorkList([...tempWorkList])
    },

    changeCountofBtn: () => {
      setCountOfBtn(Number(countOfBtn) + 1)
    }
  }

  return <WorkListContext.Provider value={provider}>{children}</WorkListContext.Provider>
}

const useWorkList = () => React.useContext(WorkListContext)

export default useWorkList
