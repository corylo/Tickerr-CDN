import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

import { tickerrProductionAppConfig } from "../config/firebaseConfig";

const getConfig = (): any => {
  if (process.env.NODE_ENV === "production") {
    return tickerrProductionAppConfig;
  }

  return tickerrProductionAppConfig;
  // return tickerrDevelopmentAppConfig;
};

firebase.initializeApp(getConfig());

export const analytics: firebase.analytics.Analytics = firebase.analytics();