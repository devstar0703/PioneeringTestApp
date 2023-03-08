import * as React from 'react'
import useWorkList from 'src/shared/hooks/useWorkList'
import { useTheme } from '@mui/styles'
import { useInfiniteQuery } from '@tanstack/react-query'

import tagStyled from 'styled-components'

import { ListItem, IconButton } from '@mui/material'
import { StyledList } from 'src/shared/styled'
import { CloseOutlined } from '@mui/icons-material'

import { type WorkListProps } from 'src/types/hooks.types'

const WorkList = () => {
  const limit = 5

  const { workList, removeWorkReg } = useWorkList() as WorkListProps
  const observerElem = React.useRef(null)

  const theme = useTheme()

  const fecthWorkList = async (page: number) => {
    const data = await workList.slice(page - 1, page + limit - 1)

    return {
      result: data
    }
  }

  const {
    data,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch
  } = useInfiniteQuery(
    ['getWorkList'],
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    ({ pageParam = 1 }) => fecthWorkList(pageParam),
    {
      getNextPageParam: (lastPage: any, allPages: any) => {
        const nextPage: number = allPages.length + 1
        return lastPage.result.length === limit ? nextPage : undefined
      }
    }
  )

  const handleObserver = React.useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // eslint-disable-next-line no-console
      console.log('here')
      const [target] = entries
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    },
    [fetchNextPage, hasNextPage]
  )

  React.useEffect(() => {
    if (!observerElem.current) return
    const element: HTMLDivElement = observerElem.current
    const option = { threshold: 0 }

    const observer = new IntersectionObserver(handleObserver, option)
    observer.observe(element)
    return () => { observer.unobserve(element) }
  }, [fetchNextPage, hasNextPage, handleObserver])

  React.useEffect(() => {
    refetch()
  }, [workList])

  return (
    <WorkListMain theme={theme}>
      <StyledList>
        {
            isSuccess &&
            data &&
            data.pages &&
            data.pages.map(
              (page: any, pageIndex: number) =>
                // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
                page &&
                page.result &&
                page.result.map((item: any, index: number) => {
                  return (
                        // eslint-disable-next-line no-console
                        <ListItem key={index}>
                          {item}
                          <IconButton onClick={() => { removeWorkReg(index) }} color="error">
                            <CloseOutlined />
                          </IconButton>
                        </ListItem>
                  )
                })
            )}

            {hasNextPage && (
                    <div ref={observerElem}>
                        {!isFetchingNextPage
                          ? (
                              'Load more news...'
                            )
                          : (
                            <React.Fragment>
                            Loading news...
                            </React.Fragment>
                            )}
                    </div>
            )}
        {/* {workList.map((item: any, index: number) => (
          <ListItem key={index}>
            {item}
            <IconButton onClick={() => { removeWorkReg(index) }} color="error">
              <CloseOutlined />
            </IconButton>
          </ListItem>
        ))} */}
      </StyledList>
    </WorkListMain>
  )
}

export default WorkList

const WorkListMain = tagStyled.div`
    color: ${(props) => props.theme.custom.palette.primary.content} !important;
    width: 400px;
    max-height : 500px;

    overflow-y : auto;

    @media screen and (max-width: 485px) {
        width : 350px;
    }

    @media screen and (max-width: 370px) {
        width : 300px;
    }

    @media screen and (max-width: 315px) {
        width : 250px;
    }
`
