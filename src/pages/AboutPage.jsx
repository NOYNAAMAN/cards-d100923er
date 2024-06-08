import React from "react";
import PageHader from "../components/PageHader";
import { Box } from "@mui/material";
import "../styling/css/style.css";
export default function AboutPage() {
  return (
    <Box>
      <PageHader
        titel="About Page"
        subtitle="on this page you can find explanations about ..."
      ></PageHader>

      <div class="about-section">
        <h1>About Our Website</h1>
        <p>
          Welcome to our website, the leading platform for creating and
          promoting business cards.
        </p>

        <h2>What Does Our Website Offer?</h2>
        <p>
          Our website allows you to create a personalized business card designed
          to promote your business professionally and effectively. Whether it's
          a private or public business, the business card will include all the
          necessary information for potential clients to reach you, such as the
          business name, address, email, and more.
        </p>

        <h2>Types of Cards</h2>
        <p>Our system allows the creation of two types of cards:</p>
        <ul>
          <li>
            <strong>Business Card:</strong> This card is intended for private
            and public businesses, providing all the essential details about
            your business.
          </li>
          <li>
            <strong>Non-Business Card:</strong> This card is suitable for
            non-commercial purposes and can be used for a variety of other
            needs.
          </li>
        </ul>

        <h2>Interacting with the Website</h2>
        <p>
          Interacting with our website is simple and intuitive. You can easily
          search for businesses using our advanced search engine and discover a
          variety of businesses across different fields. Each business card
          contains all the important details about the business, allowing you to
          contact the business owner directly if needed.
        </p>
        <p>
          Additionally, you can save the business cards you like to your
          favorites. All saved cards will appear under your favorite cards list,
          providing you with quick and convenient access to them at any time.
        </p>

        <h2>How to Get Started?</h2>
        <p>
          To get started, all you need to do is register on the website and
          create your business card. The registration and creation process is
          quick and straightforward, and within minutes, you can showcase your
          business in the best possible way.
        </p>

        <p>
          We are here to help you succeed! Join us and start promoting your
          business today.
        </p>
      </div>
    </Box>
  );
}
