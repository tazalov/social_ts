import { connect } from "react-redux";
import { Users } from "./Users";
import { InitialStateT } from "../../redux/users.reducer";
import { AppStateT } from "../../redux/store";

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  list: state.users.list,
});

export default connect<InitialStateT, {}, unknown, AppStateT>(
  mapStateToProps,
  {},
)(Users);
