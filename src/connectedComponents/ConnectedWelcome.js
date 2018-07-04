import Welcome from "../components/Welcome";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return { firstName: state.firstName };
};

export default connect(mapStateToProps)(Welcome);
