import React, { Component } from "react";
import { connect } from "react-redux";
import CenterCard from "../centerCard";

class Signin extends Component {
  componentWillMount() {
    if (this.props.authenticated) {
      window.location.href = process.env.APP_URI + "/#dashboard";
    }
  }
  onClickSigninGoogle() {
    console.log(process.env.API_URI + "/auth/google");
    window.location.href = process.env.API_URI + "/auth/google";
  }
  render() {
    return (
      <CenterCard>
        <div className="card">
          <h4 className="card-header">Sign In</h4>
          <div className="card-body">
            <button onClick={this.onClickSigninGoogle}>
              Sign in with Google
            </button>
          </div>
        </div>
      </CenterCard>
    );
  }
}

function mapStateToProps({ auth }) {
  return { authenticated: auth.authenticated };
}

export default connect(mapStateToProps)(Signin);
