import React, { Component } from "react";
import CenterCard from "../centerCard";
import { connect } from "react-redux";
import { getUserProfile } from "../../actions";
class Account extends Component {
  componentWillMount() {
    // this.props.getUserProfile();
  }
  render() {
    return (
      <CenterCard>
        <div className="card border-secondary">
          <h4 className="card-header">Account</h4>
          <div className="card-body">
            <p className="text-muted">Server status: {status} ☀</p>
            <form>
              <div className="form-group">
                <label>Full Name:</label>
                <input
                  disabled="true"
                  type="text"
                  name="firstName"
                  className="form-control form-control-lg"
                  placeholder="Full Name"
                  value={this.props.profile ? this.props.profile.name : ""}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  disabled
                  readOnly
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="sample@email.com"
                  value={this.props.profile ? this.props.profile.email : ""}
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </CenterCard>
    );
  }
}

function mapStateToProps({ state }) {
  return { profile: state.profile };
}

export default connect(
  mapStateToProps,
  { getUserProfile }
)(Account);
