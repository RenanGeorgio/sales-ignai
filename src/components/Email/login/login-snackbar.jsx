import { Component } from "react";
import { connect } from "react-redux";
import Snackbar from "../snackbar/snackbar";
import { withTranslation } from "react-i18next";

export class LoginSnackbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {error, t} = this.props;
    let message;
    if (error === null) {
      message = '';
    } else {
      message = t(`login.errors.${error}`);
    }
    return (
      <Snackbar show={error !== null} message={message}/>
    );
  }
}
const mapStateToProps = state => ({
  error: state.email.application.errors.authentication
});

export default connect(mapStateToProps)(withTranslation()(LoginSnackbar));
