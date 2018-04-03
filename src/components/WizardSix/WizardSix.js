import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateCost, updateDPayment } from "../../ducks/reducer";

class WizardSix extends Component {
  render() {
    const { updateCost, updateDPayment } = this.props;
    return (
      <div className="parent-div">
        <div className="vert-align">
          {" "}
          <p>What is the estimated purchase price?</p> <br />
          <input type="text" placeholder="amount" onChange={updateCost} />{" "}
          <br />
          <p>How much are you putting down as a down payment?</p> <br />
          <input type="text" placeholder="amount" onChange={updateDPayment} />
          <Link to="/wSeven">
            <button className="margin-btn"> Next </button>
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { cost, downPayment } = state;
}
export default connect(mapStateToProps, { updateCost, updateDPayment })(
  WizardSix
);
