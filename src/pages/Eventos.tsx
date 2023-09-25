import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Eventos.css';
import { useLocation } from 'react-router-dom';

const Eventos: React.FC = (props) => {
    // const location = useLocation();
    // const { state } = location;
    console.log(props.state);
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Eventos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Eventos</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Eventos page" />
            </IonContent>
        </IonPage>
    );
};

export default Eventos;
