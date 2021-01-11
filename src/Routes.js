import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "Views/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

/**
 * central routing
 */
export const namedRoutes = {
  home: { index: "/" },
  listing: { index: "/listing" },
  savedHomes: { index: "/saved-homes" },
  savedSearch: { index: "/saved-search" },
  messages: { index: "/messages" },
  notifications: { index: "/notifications" },
  billing: { index: "/billing" },
  analytics: { index: "/analytics" },
  blog: { index: "/blog" },
};

export default Routes;
