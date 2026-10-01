const routes = {
  home: "home",
  about: "about",
  projects: "projects",
  contact: "contact"
};

export function getCurrentRoute() {
  const hash = window.location.hash.replace("#/", "");

  return routes[hash] || routes.home;
}

export function startRouter(onRouteChange) {
  window.addEventListener("hashchange", () => {
    onRouteChange(getCurrentRoute());
  });

  onRouteChange(getCurrentRoute());
}