import { IonBackButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonNavLink, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Destinos.scss'
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Municipio from './Municipio';
import Eventos from './Eventos';

const sendGetRequest = async () => {
    const getMunicipios = {
        method: 'GET',
        url: 'http://192.168.100.65/api/items/read',
        params: { peticion: 'municipios' }
    };

    return await axios.request(getMunicipios).then(response => {
        console.log(response.data);
        return response.data;
    })
};

const Destinos: React.FC = () => {
    const [municipios, setMunicipios] = React.useState([]);
    React.useEffect(() => {
        sendGetRequest().then(data => setMunicipios(data.municipios));
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
                                        <IonNavLink routerDirection="forward" component={() => <Municipio state={{id: item.id}} />}>
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
