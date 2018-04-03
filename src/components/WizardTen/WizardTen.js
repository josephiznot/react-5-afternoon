import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateEmail, updateFirst, updateLast } from "../../ducks/reducer";
class WizardTen extends Component {
  render() {
    const { updateEmail, updateFirst, updateLast } = this.props;
    console.log(this.props.firstName);
    console.log(this.props.lastName);
    console.log(this.props.email);
    // console.log(updateFirst);
    // console.log(updateLast);
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>What is your name?</p> <br />
          <input
            type="text"
            placeholder="First Name"
            onChange={e => updateFirst(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={e => updateLast(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            onChange={e => updateEmail(e.target.value)}
          />
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
