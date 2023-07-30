import {
  addMessageAC,
  DialogsAT,
  InitialStateT,
} from "../../redux/dialogs.reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { AppStateT } from "../../redux/store";
import { Dispatch } from "redux";

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  list: state.dialogs.list,
  messages: state.dialogs.messages,
});

type MapDispatchPT = {
  addMessage: (message: string) => void;
};

const mapDispatchToProps = (dispatch: Dispatch<DialogsAT>): MapDispatchPT => ({
  addMessage: (message: string) => dispatch(addMessageAC(message)),
});

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(
  mapStateToProps,
  mapDispatchToProps,
)(Dialogs);
