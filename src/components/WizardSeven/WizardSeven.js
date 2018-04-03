import React, { Component } from "react";
import { Link } from "react-router-dom";
import { updateCredit } from "../../ducks/reducer";
import { connect } from "react-redux";

class WizardSeven extends Component {
  render() {
    const { updateCredit } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          <p>Estimate your credit score</p> <br />
          <div className="row">
            <Link to="/wEight">
              <button onClick={updateCredit}>Excellent</button>
            </Link>
            <Link to="/wEight">
              <button onClick={updateCredit}>Good</button>
            </Link>
            <Link to="/wEight">
              <button onClick={updateCredit}>Fair</button>
            </Link>
            <Link to="/wEight">
              <button onClick={updateCredit}>Poor</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { credit } = state;
  return credit;
}
export default connect(mapStateToProps, { updateCredit })(WizardSeven);
