import { connect } from "react-redux";
import HomePage from "../components/homepage";
import {register} from "../actions/asyncactions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    register:(data,cbFunc)=> dispatch(register(data,cbFunc))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
