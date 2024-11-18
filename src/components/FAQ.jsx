import React from "react";
import HumanImg from "../assets/Humaaans.png";
export default function FAQ() {
  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-center font-bold text-3xl mt-12 mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-500 mb-6">
        The FAQ section provides answers to common questions about how to donate
        winter clothing and the process involved. It helps users understand the
        steps they need to take to contribute to the cause and ensures a smooth
        donation experience.
      </p>
      <div className="flex items-center flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center">
          <img src={HumanImg} alt="" />
        </div>
        <div className="flex-1">
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How do I donate winter clothing?
            </div>
            <div className="collapse-content">
              <p>
                Simply log in to our platform, browse the donation campaigns,
                and select the one you'd like to contribute to. You’ll find a
                donation form that you can fill out to submit your clothing
                donation. After submitting the form, our volunteers will arrange
                a pickup or drop-off location based on the campaign.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Where will the donations go?
            </div>
            <div className="collapse-content">
              <p>
                Donations will go to vulnerable communities across Bangladesh,
                particularly those in rural and low-income areas who struggle
                with harsh winter conditions. Our platform connects donors to
                these communities through coordinated campaigns.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I donate used clothing?
            </div>
            <div className="collapse-content">
              <p>
                Yes, gently used winter clothing is greatly appreciated! We ask
                that the clothes be clean, in good condition, and suitable for
                the cold weather. This way, we ensure the recipients receive
                clothing that will keep them warm and comfortable.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Is my donation tax-deductible?
            </div>
            <div className="collapse-content">
              <p>
                Please check with your local tax authorities for information
                about potential tax deductions related to charitable donations.
                While we focus on providing warmth to those in need, we
                encourage you to inquire about any available benefits for your
                generous contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
