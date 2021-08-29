import React from "react"
import theme from "../constants/theme";
import _ from "lodash";
import Header from "../components/header";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";

class Layout extends React.Component {

  render() {

    return (
      <ThemeProvider theme={theme}>
          <>
            <Header 
             />
            {this.props.children}
            </>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
