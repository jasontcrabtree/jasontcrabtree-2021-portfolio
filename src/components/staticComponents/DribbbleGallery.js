import React from 'react';
import styled from 'styled-components';

const DribbbleGalleryStyles = styled.div`
  .dribbble-gallery--layout > * > figure {
    background: rgb(255, 255, 255);

    border: 1px solid var(--blue-white-100);

    box-shadow: var(--shadow-medium);
    border-radius: 8px;
  }

  .dribbble-gallery--layout > * > figure:hover {
    box-shadow: var(--shadow-small);
  }

  .dribbble-gallery--layout > * > figure > img {
    border: 1px solid var(--blue-white-100);
  }

  .fade-enter-active {
    transition: opacity 2.5s;
  }

  .fade-enter {
    opacity: 0;
  }

  .dribbble-gallery--layout > * > figure > figcaption {
    margin-top: var(--size-16);
  }

  @media screen and (max-width: 720px) {
    .dribbble-gallery--layout > * > figure {
      margin: var(--size-48) 0px;
      padding: 32px 16px;
    }
  }

  @media screen and (min-width: 720px) {
    .dribbble-gallery--layout {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(44%, 1fr));
      grid-gap: 48px;
    }

    .dribbble-gallery--layout > * > figure {
      padding: 48px;
    }
  }

  @media (prefers-color-scheme: dark) {
    .figcaption--layout > a:any-link {
      color: var(--primary-blue);
    }
  }
`;

function DribbbleGallery() {
  return (
    <DribbbleGalleryStyles>
      <ul className="dribbble-gallery--layout">
        <li>
          <figure>
            <img
              src="/assets/images/dribbble-shots/daily-ui-day-21.png"
              alt="A concept website showcasing different professional software tools and how they can fit and work together."
            />
            <figcaption className="figcaption--layout">
              <span>
                Daily UI #21: Smart Home Dashboard
                <span className="date--style">March 2020</span>
              </span>
              <br />
              <a href="https://dribbble.com/shots/10830259-Daily-UI-Day-021-Household-Management-Dashboard">
                View Dribbble Shot
              </a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src="/assets/images/dribbble-shots/daily-ui-day-17.png"
              alt="A concept website showcasing different professional software tools and how they can fit and work together."
            />
            <figcaption className="figcaption--layout">
              <span>
                Daily UI #17: Email Receipt Design
                <span className="date--style">March 2020</span>
              </span>
              <br />
              <a href="https://dribbble.com/shots/10796937-Daily-UI-Day-017-Email-Receipt-Email-Client">
                View Dribbble Shot
              </a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src="/assets/images/dribbble-shots/daily-ui-day-12.png"
              alt="A concept website showcasing different professional software tools and how they can fit and work together."
            />
            <figcaption className="figcaption--layout">
              <span>
                Daily UI #12: Modern Ecommerce Store
                <span className="date--style">March 2020</span>
              </span>
              <br />
              <a href="https://dribbble.com/shots/10754071-Daily-UI-Day-012-eCommerce-Cushion-Store">
                View Dribbble Shot
              </a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src="/assets/images/dribbble-shots/daily-ui-day-07.png"
              alt="A concept website showcasing different professional software tools and how they can fit and work together."
            />
            <figcaption className="figcaption--layout">
              <span>
                Daily UI #7: iOS App Settings Page
                <span className="date--style">March 2020</span>
              </span>
              <br />
              <a href="https://dribbble.com/shots/10725356-Daily-UI-007-Settings-Page">
                View Dribbble Shot
              </a>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img
              src="/assets/images/dribbble-shots/daily-ui-day-03.png"
              alt="A concept website showcasing different professional software tools and how they can fit and work together."
            />
            <figcaption className="figcaption--layout">
              <span>
                Daily UI #3: First Look Landing Page
                <span className="date--style">March 2020</span>
              </span>
              <br />
              <a href="https://dribbble.com/shots/10661535-Daily-UI-003-Landing-Page">
                View Dribbble Shot
              </a>
            </figcaption>
          </figure>
        </li>
        {/* <li>
        <figure>
          <img
            src="/assets/images/dribbble-shots/app-platform-website.png"
            alt="A concept website showcasing different professional software tools and how they can fit and work together."
          />
          <figcaption class="figcaption--layout">
            <span>
              App Stores & Platforms List concept
              <span class="date--style">March 2020</span>
            </span>
            <br />
            <a
              href="https://dribbble.com/shots/9879164-App-Stores-Platforms-List-Concept"
            >View Dribbble Shot</a>
          </figcaption>
        </figure>
      </li>  */}
        <li>
          <figure>
            <img
              src="/assets/images/dribbble-shots/open-med.png"
              alt="Two mobile screens showing the 'Home' and 'Calendar' views for a concept medical appointment app"
            />
            <figcaption className="figcaption--layout">
              <span>
                UI & UX Concept: Medical Scheduling App
                <span className="date--style">Jan 2020</span>
              </span>
              <br />
              <a href="https://dribbble.com/shots/9830555-Medical-Booking-App-Study">
                View Dribbble Shot
              </a>{' '}
              - <a href="/work/med-booking-app">Read Case Study</a>
            </figcaption>
          </figure>
        </li>
        {/* <li>
        <figure>
          <img
            src="/assets/images/dribbble-shots/chris-vector.png"
            alt="A vector illustration of my good friend Chris riding a bike with his feet up on the handlebars"
          />
          <figcaption class="figcaption--layout">
            <span>
              Vector Illustration: Chris rides into the Sunset
              <span class="date--style">Oct 2019</span>
            </span>
            <br />
            <a
              href="https://dribbble.com/shots/7321621-Illustration-Riding-into-the-Sunset"
            >View Dribbble Shot</a>
          </figcaption>
        </figure>
      </li>  */}
      </ul>
    </DribbbleGalleryStyles>
  );
}

export default DribbbleGallery;
