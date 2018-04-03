import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateEmail, updateFirst, updateLast } from "../../ducks/reducer";
class WizardTen extends Component {
  render() {
    const { updateEmail, updateFirst, updateLast } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>What is your name?</p> <br />
          <input type="text" placeholder="First Name" onChange={updateFirst} />
          <input type="text" placeholder="Last Name" onChange={updateLast} />
          <input type="text" placeholder="email" onChange={updateEmail} />
          <Link to="/wEleven">
            <button className="margin-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { firstName, lastName, email } = state;
  return { firstName, lastName, email };
}
export default connect(mapStateToProps, {
  updateEmail,
  updateFirst,
  updateLast
})(WizardTen);
