import firebase from "firebase/app";

import { tickerrProductionAppConfig } from "../config/firebaseConfig";

const getConfig = (): any => tickerrProductionAppConfig;

firebase.initializeApp(getConfig());