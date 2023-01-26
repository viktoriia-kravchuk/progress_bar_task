import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper";
import ProgressBar from "src/components/ProgressBar/ProgressBar.component";
import {
  BILLING_STEP,
  DETAILS_STEP,
  SHIPPING_STEP,
} from "@scandipwa/scandipwa/src/route/Checkout/Checkout.config";
import "./Checkout.extension.style.scss";

class Checkout extends SourceCheckout {
  checkoutSteps = [SHIPPING_STEP, BILLING_STEP, DETAILS_STEP];
  render() {
    return (
      <>
        <ProgressBar
          allSteps={this.checkoutSteps}
          currentStep={this.props.checkoutStep}
        />
        <main block="Checkout">
          <ContentWrapper
            wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
            label={__("Checkout page")}
          >
            {this.renderSummary(true)}
            <div block="Checkout" elem="Step">
              {this.renderTitle()}
              {this.renderGuestForm()}
              {this.renderStep()}
              {this.renderLoader()}
            </div>
            <div>
              {this.renderSummary()}
              {this.renderPromo()}
              {this.renderCoupon()}
            </div>
          </ContentWrapper>
        </main>
      </>
    );
  }
}

export default Checkout;
