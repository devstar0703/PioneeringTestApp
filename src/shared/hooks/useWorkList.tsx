import * as React from 'react'

import { useLocalStorage } from 'react-use'
import { getCurrentDate } from 'src/utils/helper/dateHelper'

const WorkListContext = React.createContext({})

interface WorkListProviderProps {
  children: React.ReactElement
}

export const WorkListProvider = ({ children }: WorkListProviderProps) => {
  const [workList, setWorkList] = useLocalStorage<any>('work_list', [])
  const [countOfBtn, setCountOfBtn] = useLocalStorage<any>('count_btn', '0')

  const provider = {
    workList,
    countOfBtn,

    pushWorkReg: (detail: string) => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (workList) {
        const tempWorkList: any = [...workList]
        tempWorkList.push(`${getCurrentDate()} ${detail}`)

        setWorkList([...tempWorkList])
      }
    },

    removeWorkReg: (index: number) => {
      if (workList != null) {
        const tempWorkList: any = [...workList]
        tempWorkList.splice(index, 1)

        setWorkList([...tempWorkList])
      }
    },

    changeCountofBtn: () => {
      setCountOfBtn(Number(countOfBtn) + 1)
    },

    clearStorage: () => {
      setWorkList([])
      setCountOfBtn('0')
    }
  }

  return <WorkListContext.Provider value={provider}>{children}</WorkListContext.Provider>
}

const useWorkList = () => React.useContext(WorkListContext)

export default useWorkList
