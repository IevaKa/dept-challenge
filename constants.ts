export enum routeLabels {
  HOME = "home",
  WORK = "work",
  ABOUT = "about",
  CULTURE = "culture",
  SERVICES = "services",
  PARTNERS = "partners",
  STORIES = "stories",
  CAREERS = "careers",
  EVENTS = "events",
  CONTACT = "contact",
  INSIGHTS = "insights",
  TERMS_AND_CONDITIONS = "Terms and conditions",
}

export const mainMenuRoutes = [
  { route: "/", label: routeLabels.HOME },
  { route: "/work", label: routeLabels.WORK },
  { route: "/culture", label: routeLabels.CULTURE },
  { route: "/services", label: routeLabels.SERVICES },
  { route: "/partners", label: routeLabels.PARTNERS },
  { route: "/stories", label: routeLabels.STORIES },
  { route: "/careers", label: routeLabels.CAREERS },
  { route: "/events", label: routeLabels.EVENTS },
  { route: "/contact", label: routeLabels.CONTACT },
  { route: "/insights", label: routeLabels.INSIGHTS },
];

export const termsAndConditionsRoute = {
  route: "/terms-and-conditions",
  label: routeLabels.TERMS_AND_CONDITIONS,
};

export const aboutRoute = { route: "/about", label: routeLabels.ABOUT };
