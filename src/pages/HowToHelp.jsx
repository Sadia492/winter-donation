import React from "react";
import { Helmet } from "react-helmet-async";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegStar, FaSnowflake } from "react-icons/fa";
export default function HowToHelp() {
  return (
    <div className="md:w-4/5 w-11/12 mx-auto mt-20">
      <Helmet>
        <title>Winter Donation | Help</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mt-8 mb-2">How to Help</h2>

      <p className="text-gray-500 text-center mb-8">
        The “How to Help” section provides clear, actionable steps for
        individuals looking to support the winter donation campaign. It guides
        users on how to donate clothes, find collection points, spread
        awareness, and join the mission to help those in need during the harsh
        winter months.
      </p>
      <div>
        <VerticalTimeline lineColor={"#4e73df"}>
          {/* Timeline Item 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#4e73df", color: "#fff" }}
            icon={<FaSnowflake />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-blue-500">
              🧥 Donate Clothes
            </h3>
            <p>
              <ul className="list-disc">
                <li>
                  Gather gently used or new winter clothing such as coats,
                  sweaters, hats, scarves, and blankets.
                </li>
                <li>
                  Ensure the clothes are clean and in good condition to maximize
                  their usefulness.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* Timeline Item 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#4e73df", color: "#fff" }}
            icon={<FaSnowflake />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-blue-500">
              📍 Find a Collection Point
            </h3>
            <p>
              <ul className="list-disc">
                <li>
                  Use our website to locate the nearest collection point in your
                  division.
                </li>
                <li>
                  Drop off your donations at the designated locations during the
                  specified hours.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* Timeline Item 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#4e73df", color: "#fff" }}
            icon={<FaSnowflake />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-blue-500">
              🌐 Spread the Word
            </h3>
            <p>
              <ul className="list-disc">
                <li>
                  Share our campaigns with your friends and family to encourage
                  more donations.
                </li>
                <li>
                  Use social media to highlight the importance of winter
                  donations and inspire others to join the cause.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>

          {/* Timeline Item 4 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: "#4e73df", color: "#fff" }}
            icon={<FaSnowflake />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold text-blue-500">
              🙌 Join Our Mission
            </h3>
            <p>
              Every small effort counts! By donating, volunteering, or simply
              sharing our cause, you play a vital role in bringing warmth and
              comfort to those who need it most.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
