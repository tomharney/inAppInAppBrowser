import React from 'react';
import { IonPage, IonButton } from '@ionic/react';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';

const Browser: React.FC = () => {

    const options:InAppBrowserOptions = {
        location: 'no',
        zoom: 'no',
        hideurlbar: 'yes',
        toolbarposition: 'bottom'
    } 

    const openBrowser = (url: string) => {
        const browser = InAppBrowser.create(url,'_self',options);
        // browser.executeScript(your script) // Docs aren't clear to me and i haven't tested
        browser.show()
    }

    return (
        <IonPage>
            <IonButton onClick={()=> openBrowser('https://google.com')}>Open InAppBrowser</IonButton>
        </IonPage>
    );
};