import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Blog = () => {
  return (
    <Accordion defaultActiveKey="0" className="mt-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span className="fw-semibold">#1..what is cors?</span>
        </Accordion.Header>
        <Accordion.Body>
          Cross-origin resource sharing is a mechanism that allows restricted
          resources on a web page to be requested from another domain outside
          the domain from which the first resource was served. A web page may
          freely embed cross-origin images, stylesheets, scripts, iframes, and
          videos
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span className="fw-semibold">
            #2..Why are you using firebase? What other options do you have to
            implement authentication?
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <p>
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience.
          </p>
          <p className="fw-semibold">
            ** TOP ALTERNATIVES TO FIREBASE AUTHENTICATION
            <li>Auth0</li>
            <li>Passport</li>
            <li>Keycloak</li>
            <li>MongoDB</li>
            <li>Okta</li>
            <li>Amazon Cognito</li>
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <span className="fw-semibold">
            #3..How does the private route work?
          </span>
        </Accordion.Header>
        <Accordion.Body>
          The react private route component renders child components ( children
          ) if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
