import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNavLink, IonPage, IonRow, IonThumbnail, IonTitle, IonToggle, IonToolbar, ToggleCustomEvent } from '@ionic/react';
import './Destinos.scss'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Municipio from './Municipio';
import { moon } from 'ionicons/icons';

const sendGetRequest = async () => {
    const getMunicipios = {
        method: 'GET',
        url: 'http://localhost/api_rest/items/read',
        params: { peticion: 'municipios' }
    };

    return await axios.request(getMunicipios).then(response => {
        console.log(response.data);
        return response.data;
    })
};

const Destinos: React.FC = () => {
    const [municipios, setMunicipios] = React.useState([]);
    const [themeToggle, setThemeToggle] = useState(false);
    
    React.useEffect(() => {
        sendGetRequest().then(data => setMunicipios(data.municipios));
    }, []);

    // Listen for the toggle check/uncheck to toggle the dark theme
    const toggleChange = (ev: ToggleCustomEvent) => {
        toggleDarkTheme(ev.detail.checked);
    };

    // Add or remove the "dark" class on the document body
    const toggleDarkTheme = (shouldAdd: boolean) => {
        document.body.classList.toggle('dark', shouldAdd);
    };

    // Check/uncheck the toggle and update the theme based on isDark
    const initializeDarkTheme = (isDark: boolean) => {
        setThemeToggle(isDark);
        toggleDarkTheme(isDark);
    };

    useEffect(() => {
        // Use matchMedia to check the user preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Initialize the dark theme based on the initial
        // value of the prefers-color-scheme media query
        initializeDarkTheme(prefersDark.matches);

        // Listen for changes to the prefers-color-scheme media query
        prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
    }, []);

    return (
        <IonPage id="municipios">
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="destinos"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList className="ion-margin-top">
                    <IonItem>
                        {/* <IonIcon slot="start" icon={moon} /> */}
                        <IonLabel>Modo oscuro</IonLabel>
                        <IonToggle
                            checked={themeToggle} onIonChange={toggleChange}
                            slot="end"
                            name="darkMode"
                        />
                    </IonItem>
                </IonList>
                <IonGrid>
                    <IonRow>
                        <IonCol size='12'>
                            <h1>Destinos de Sinaloa</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        {
                            municipios.map((item, i) => {
                                return (
                                    <IonCol className='municipio municipio-background' style={{ backgroundImage: `url(${item.imagen})` }} size="12">
                                        <IonNavLink routerDirection="forward" component={() => <Municipio state={{ id: item.id }} />}>
                                            {/* <Link to={`/Municipio/${item.id}`}> */}
                                            <IonLabel className='nombre'>{item.nombre}</IonLabel> <br />
                                            <IonLabel className='zona'>{item.zona}</IonLabel>
                                            {/* </Link> */}
                                        </IonNavLink>
                                    </IonCol>
                                );
                            })
                        }
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Destinos;
