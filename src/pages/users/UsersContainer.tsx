import { connect } from "react-redux";
import { Users } from "./Users";
import {
  follow,
  InitialStateT,
  setCurrentPage,
  setLoadingPage,
  setUsers,
  toggleProgressFollow,
  unfollow,
  UserT,
} from "../../redux/users.reducer";
import { AppStateT } from "../../redux/store";
import { Component } from "react";
import { Pagination2 } from "../../components/pagination/Pagination2";
import { Preloader } from "../../components/preloader/Preloader";
import { usersAPI } from "../../api/api";

type UsersCPT = InitialStateT & MapDispatchPT;

class UsersC extends Component<UsersCPT> {
  componentDidMount() {
    const { list, pageSize, currentPage, setUsers, setLoadingPage } =
      this.props;
    if (!list.length) {
      setLoadingPage(true);
      usersAPI.getUsers(currentPage, pageSize).then((data) => {
        setUsers(data.items, data.totalCount);
        setLoadingPage(false);
      });
    }
  }
  componentDidUpdate(prevProps: Readonly<UsersCPT>) {
    const { pageSize, currentPage, setUsers, setLoadingPage } = this.props;
    if (currentPage !== prevProps.currentPage) {
      setLoadingPage(true);
      usersAPI.getUsers(currentPage, pageSize).then((data) => {
        setUsers(data.items, data.totalCount);
        setLoadingPage(false);
      });
    }
  }

  render() {
    let {
      list,
      totalCount,
      pageSize,
      currentPage,
      isPageLoading,
      follow,
      unfollow,
      setCurrentPage,
      progressFollow,
      toggleProgressFollow,
    } = this.props;
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
        <Users
          list={list}
          follow={follow}
          unfollow={unfollow}
          progressFollow={progressFollow}
          toggleProgressFollow={toggleProgressFollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  list: state.users.list,
  totalCount: state.users.totalCount,
  pageSize: state.users.pageSize,
  currentPage: state.users.currentPage,
  isPageLoading: state.users.isPageLoading,
  progressFollow: state.users.progressFollow,
});

type MapDispatchPT = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (user: UserT[], count: number) => void;
  setCurrentPage: (page: number) => void;
  setLoadingPage: (isLoad: boolean) => void;
  toggleProgressFollow: (isFetch: boolean, id: number) => void;
};

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setLoadingPage,
    setCurrentPage,
    toggleProgressFollow,
  },
)(UsersC);
