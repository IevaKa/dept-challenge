export enum routeLabels {
  HOME = "home",
  WORK = "work",
  CULTURE = "culture",
  SERVICES = "services",
  PARTNERS = "partners",
  STORIES = "stories",
  CAREERS = "careers",
  EVENTS = "events",
  CONTACT = "contact",
  INSIGHTS = "insights",
}

export const routes = [
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
