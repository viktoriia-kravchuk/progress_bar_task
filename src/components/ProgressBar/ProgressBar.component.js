import React, { PureComponent } from "react";
import checkmark from "../../img/check-arrow.png";

export default class ProgressBar extends PureComponent {
  getProgress() {
    let current = 0;
    const allSteps = this.props.allSteps;
    const lastStep = this.props.allSteps.length - 1;

    for (let i = 0; i < lastStep + 1; i++) {
      if (this.props.currentStep === allSteps[i]) {
        current = i;
      }
    }

    return allSteps.map((step, i) => {
      if (i === lastStep) {
        return;
      }
      return (
        <>
          <div
            key={step}
            className={`label ${i <=current ? "primary" : "secondary"}`}
          >
            <div>
              {i < current ? (
                <img src={checkmark} alt="check-mark-icon" />
              ) : (
                <p>{i + 1}</p>
              )}
            </div>
            <p>{step.split("_")[0]}</p>
          </div>
          <div className={`indicator ${i< current ? "primary" : "secondary"}`}>
            <div />
          </div>
        </>
      );
    });
  }

  render() {
    return (
      <div className="ProgressBar">
        <div className="indicator primary">
          <div />
        </div>
        {this.getProgress()}
      </div>
    );
  }
}
