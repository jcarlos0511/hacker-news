import * as React from 'react'

import { Button, Skeleton } from '../../Atoms'
import { Card, DropDown, List, Pagination } from '../../Molecules'
import useNews from '../../../hooks/useNews'
import useNewsState from '../../../hooks/useNewsState'
import useNewsUpdater from '../../../hooks/useNewsUpdater'
import useScrollDirection from '../../../hooks/useScrollDirection'
import { defaultItems, skeletonCards, views } from '../../../utils/constants'
import { StyledFilterFlex, StyledMain } from './styles'

const Main = () => {
  const { state } = useNewsState()
  const { dispatch } = useNewsUpdater()

  const { data, isLoading, isFetching } = useNews({
    query: state.query,
    page: state.page
  })

  React.useEffect(() => {
    if (data !== undefined) {
      dispatch({
        type: 'GET_NEWS',
        payload: {
          ...data,
          hits: data?.hits?.map((hit) => ({
            ...hit,
            is_fav:
              state.favorites.find((fav) => hit.objectID === fav.objectID)
                ?.is_fav ?? false
          }))
        }
      })
      localStorage.setItem('news', JSON.stringify(state))
    }
  }, [data, state.favorites, state.view])

  const scrollDirection = useScrollDirection({ initialDirection: 'up' })
  const [scrolledToTop, setScrolledToTop] = React.useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <StyledMain>
      <StyledFilterFlex
        justifyContent="center"
        scrollDirection={scrollDirection}
        scrolledToTop={scrolledToTop}
      >
        {views.map((view) => (
          <Button
            key={view}
            active={state.view === view}
            disabled={state.view === view}
            onClick={() => dispatch({ type: 'CHANGE_VIEW', payload: view })}
          >
            {view}
          </Button>
        ))}
      </StyledFilterFlex>

      <DropDown
        items={[{ name: 'Select your news' }, ...defaultItems]}
        positionTopMenu="306px"
        positionLeftMenu="146px"
        scrollDirection={scrollDirection}
        scrolledToTop={scrolledToTop}
      />

      {state.view === 'all' && (
        <List>
          {isLoading || isFetching
            ? skeletonCards.map((item) => <Skeleton key={item} height="90px" />)
            : state.news?.hits?.map((hit) => (
                <Card key={hit.objectID} data={hit} />
            ))}
        </List>
      )}

      {state.view === 'my favs' && (
        <List>
          {state.favorites.length > 0
            ? (
                state.favorites?.map((hit) => (
              <Card key={hit.objectID} data={hit} />
                ))
              )
            : (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              Add Favs ...
            </div>
              )}
        </List>
      )}
      <Pagination lastPage={data?.nbPages ?? 0} />
    </StyledMain>
  )
}

export default Main
