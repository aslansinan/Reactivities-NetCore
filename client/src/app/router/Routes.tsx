import {createBrowserRouter, RouteObject} from "react-router-dom";
import ActivtiyDashboard from "../../features/activities/dashboard/ActivtiyDashboard";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import ActivityForm from "../../features/activities/form/ActivityForm";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";

export const routes: RouteObject[] = [{
  path: '/',
  element: <App/>,
  children : [
    {path: '',element:<HomePage />},
    {path: 'activities',element:<ActivtiyDashboard />},
    {path: 'activities/:id',element:<ActivityDetails />},
    {path: 'createActivity',element:<ActivityForm />}
  ]
}]
export const router = createBrowserRouter(routes);