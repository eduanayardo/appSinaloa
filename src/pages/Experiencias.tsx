import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Experiencias.css';

const Experiencias: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Experiencias</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Experiencias</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer name="Experiencias page" />
            </IonContent>
        </IonPage>
    );
};

export default Experiencias;
