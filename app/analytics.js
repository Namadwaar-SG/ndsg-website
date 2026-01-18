import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TAG);
};

export const trackButtonClick = (buttonName) => {
  ReactGA.event("newsletter_download", {
    button_name: buttonName,
  });
};
