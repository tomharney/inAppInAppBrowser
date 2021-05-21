import React from 'react';
import ReactDOM from 'react-dom';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

const websiteUrl: string = "http://localhost:8084/jw"

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