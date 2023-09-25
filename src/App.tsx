import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bonfire, navigate, balloon,  } from 'ionicons/icons';

import Destinos from './pages/Destinos';
import Eventos from './pages/Eventos';
import Experiencias from './pages/Experiencias';

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

import Municipio from './pages/Municipio';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/destinos">
                        <Destinos />
                    </Route>
                    <Route exact path="/eventos">
                        <Eventos />
                    </Route>
                    <Route path="/experiencias">
                        <Experiencias />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/destinos" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="destinos" href="/destinos">
                        <IonIcon aria-hidden="true" icon={navigate} />
                        <IonLabel>Destinos</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="experiencias" href="/experiencias">
                        <IonIcon aria-hidden="true" icon={bonfire} />
                        <IonLabel>Experiencias</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="eventos" href="/eventos">
                        <IonIcon aria-hidden="true" icon={balloon} />
                        <IonLabel>Eventos</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
            <Route path={`/Municipio/:id`} component={Municipio} />
        </IonReactRouter>
    </IonApp>
);

export default App;
