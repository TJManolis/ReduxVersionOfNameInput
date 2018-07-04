import NameInput from "../components/NameInput";
import { connect } from "react-redux";
import { changeFirstName } from "../actions/actions";

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    changeFirstName: firstName => dispatch(changeFirstName(firstName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameInput);
