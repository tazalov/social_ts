import { addMessage, InitialStateT } from "../../redux/dialogs.reducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { AppStateT } from "../../redux/store";

const mapStateToProps = (state: AppStateT): InitialStateT => ({
  list: state.dialogs.list,
  messages: state.dialogs.messages,
});

type MapDispatchPT = {
  addMessage: (message: string) => void;
};

export default connect<InitialStateT, MapDispatchPT, unknown, AppStateT>(
  mapStateToProps,
  { addMessage },
)(Dialogs);
