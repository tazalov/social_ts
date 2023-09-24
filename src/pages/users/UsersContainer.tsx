import { Component, ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { redirectToLogin } from '../../utils/hoc/redirectToLogin'
import { Pagination2, Preloader } from '../../components'
import { RootStateT } from '../../redux/store'
import {
  getUsers,
  getUsersState,
  setCurrentPage,
  setFollow,
  setUnfollow,
  UsersST,
} from '../../redux/users-reducer'
import { User } from './user/User'
import { S } from './Users.styled'

type UsersCPT = UsersST & MapDispatchPT

//TODO shouldComponentUpdate & memo - когда будем пилить филтрацию.

class UsersC extends Component<UsersCPT> {
  componentDidMount() {
    const { list, pageSize, currentPage, getUsers } = this.props
    if (!list.length) {
      getUsers(currentPage, pageSize)
    }
  }
  componentDidUpdate(prevProps: Readonly<UsersCPT>) {
    const { pageSize, currentPage, getUsers } = this.props
    if (currentPage !== prevProps.currentPage) {
      getUsers(currentPage, pageSize)
    }
  }

  render() {
    let {
      list,
      totalCount,
      pageSize,
      currentPage,
      isPageLoading,
      setFollow,
      setUnfollow,
      setCurrentPage,
      progressFollow,
    } = this.props
    return isPageLoading ? (
      <Preloader size={150} />
    ) : (
      <>
        <Pagination2
          pageSize={pageSize}
          currentPage={currentPage}
          totalCount={totalCount}
          setPage={setCurrentPage}
        />
        <S.Users>
          {list.map(el => (
            <User
              key={el.id}
              id={el.id}
              name={el.name}
              followed={el.followed}
              avatarUrl={el.photos.small}
              status={el.status}
              follow={setFollow}
              unfollow={setUnfollow}
              progressFollow={progressFollow}
            />
          ))}
        </S.Users>
      </>
    )
  }
}

interface MapDispatchPT {
  setFollow: (id: number) => void
  setUnfollow: (id: number) => void
  setCurrentPage: (page: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

export default compose<ComponentType>(
  connect<UsersST, MapDispatchPT, unknown, RootStateT>(getUsersState, {
    setFollow,
    setUnfollow,
    setCurrentPage,
    getUsers,
  }),
  redirectToLogin,
)(UsersC)
