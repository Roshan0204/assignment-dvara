import { connect } from "react-redux";
import ShowUsers from "../components/showUsers";
import {getCount,getUserByMobile} from "../actions/asyncactions";

const mapStateToProps = state => {
  return {
    total: state.home.total,
    userData: state.home.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCount:()=>dispatch(getCount()),
    getUserByMobile:(mobile)=>dispatch(getUserByMobile(mobile))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsers);
