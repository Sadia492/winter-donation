import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import default styles
import { FaRegStar, FaSnowflake } from "react-icons/fa"; // Optional: For timeline icons
import Aos from "aos";

const Timeline = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" w-4/5 mx-auto" data-aos="fade-up">
      <h2 className="text-center font-bold text-3xl mt-12 mb-3">
        How it works?
      </h2>
      <p className="text-center text-gray-500 mb-6">
        The "How It Works" section provides a step-by-step guide to help users
        understand the process of making a donation. It outlines the simple
        actions involved, from selecting a campaign to submitting your donation,
        ensuring a smooth and clear experience for all participants.
      </p>
      <div className="timeline-container rounded-xl bg-[url('https://i.ibb.co.com/NKMjw04/to-protect-665089-1280.jpg')] bg-cover bg-no-repeat bg-blend-overlay bg-blue-600 p-12 bg-center">
        <VerticalTimeline layout={"1-column-left"}>
          {/* Timeline Item 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#4e73df", color: "#fff" }}
            icon={<FaSnowflake />}
          >
            <h3 className="vertical-timeline-element-title">
              Step 1: Go to Donation campaigns route
            </h3>
            <p>
              Firstly, you have to navigate to the donation campaigns route,
              which is the specific page or section of the web application where
              all the available winter clothing donation campaigns are
              displayed. This route will show a list of campaigns, including
              details such as their goals, locations, and how users can
              contribute.
            </p>
          </VerticalTimelineElement>

          {/* Timeline Item 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#4e73df", color: "#fff" }}
            icon={<FaSnowflake />}
          >
            <h3 className="vertical-timeline-element-title">
              Step 2: Click On the Donate Now button
            </h3>
            <p>
              Secondly, you can click on the "Donate Now" button, which will
              direct you to the donation form or page. This action allows you to
              proceed with making a contribution to the selected winter clothing
              campaign.
            </p>
          </VerticalTimelineElement>

          {/* Timeline Item 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#4e73df", color: "#fff" }}
            icon={<FaSnowflake />}
          >
            <h3 className="vertical-timeline-element-title">
              Step 3: Fill Up the form
            </h3>
            <p>
              Thirdly, you need to fill up the form with the required details.
              This includes providing your contact information, selecting the
              type of donation, and any additional information as requested.
            </p>
          </VerticalTimelineElement>

          {/* Timeline Item 4 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#4e73df", color: "#fff" }}
            icon={<FaSnowflake />}
          >
            <h3 className="vertical-timeline-element-title">
              Step 4: Click on the submit
            </h3>
            <p>
              Fourthly, you can click on the "Submit" button to finalize your
              donation. This action will send your donation details to the
              system, completing the process. You will then receive a
              confirmation message acknowledging your contribution to the
              campaign.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#4e73df", color: "#fff" }}
            icon={<FaSnowflake />}
          >
            <h3 className="vertical-timeline-element-title">
              Step 5: Find Your Nearest Collection Point
            </h3>
            <p>
              After submitting your donation details, locate the nearest
              collection point where you can drop off your winter clothing. You
              can find the collection point addresses or contact volunteers
              listed on our platform.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className="mt-12 text-white">
          <h3 className="text-center font-bold text-2xl">
            Supported Divisions
          </h3>
          <p className="text-center mb-6">
            We are actively supporting campaigns across the following regions:
          </p>
          <ul className="flex justify-center gap-4 flex-wrap">
            <li>Dhaka</li>
            <li>Chittagong</li>
            <li>Rajshahi</li>
            <li>Khulna</li>
            <li>Jessore</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
