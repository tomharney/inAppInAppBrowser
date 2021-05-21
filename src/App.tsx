import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

const websiteUrl: string = "https://localhost:8084/jw"

const options: InAppBrowserOptions = {
  zoom: 'no',
  location: 'no',
  toolbar: 'no',
  hidden: 'yes',
  hideurlbar: 'yes',
  toolbarposition: 'bottom'
}

const browser = InAppBrowser.create(websiteUrl, '_self', options)


browser?.on('loadstop').subscribe(event => {
  browser.insertCSS({ code: "body{color: red; padding: 10mm;" });
  console.log('loadstop DONE!')
});

export default App;


