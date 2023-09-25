import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonContent, IonBackButton, IonButtons, IonImg, IonIcon, IonText, ToggleCustomEvent, IonItem, IonList, IonToggle, IonLabel } from '@ionic/react'
import { RouteComponentProps } from 'react-router';
import axios from 'axios';
import { earthOutline, peopleOutline, navigateCircleOutline, moon } from 'ionicons/icons';

import "./Municipio.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import ExploreContainer from '../components/ExploreContainer';

interface Municipio extends RouteComponentProps<{
    id: string;
}> { }

function openExternalUrl(url: string) {
    window.open(url, '_blank');
}

const sendGetRequest = async (id: string) => {
    const getMunicipio = {
        method: 'GET',
        url: 'http://192.168.100.65/api/items/read',
        params: { peticion: 'municipio', id: id }
    };

    return await axios.request(getMunicipio).then(response => {
        console.log(response.data);
        return response.data;
    })
};

const Municipio: React.FC<Municipio> = (props) => {
    const [municipio, setMunicipio] = React.useState([]);
    const [actividades, setActividades] = React.useState([]);
    const [imperdibles, setImperdibles] = React.useState([]);
    const [imagenes, setImagenes] = React.useState([]);
    const [pueblos, setPueblos] = React.useState([]);
    const id = props.state.id;

    React.useEffect(() => {
        sendGetRequest(id).then(data => {
            setMunicipio(data),
                setActividades(data.actividades),
                setImperdibles(data.imperdibles),
                setImagenes(data.imagenes),
                setPueblos(data.pueblos)
        });
    }, []);

    
    return (
        <IonPage id="municipio">
            <IonContent fullscreen={true}>
                <IonHeader className="ion-no-border">
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="Destinos"></IonBackButton>
                        </IonButtons>

                    </IonToolbar>
                </IonHeader>

                <div className="municipio-fondo" style={{ backgroundImage: `url(${municipio.banner})` }}>

                    {municipio.pueblo != "0000" ? (
                        <IonImg src={municipio.pm} alt={municipio.nombre}></IonImg>
                    ) : (
                        <h1>{municipio.nombre}</h1>
                    )}
                    <br />
                    <h3>{municipio.titulo}</h3>
                </div>
                
                <div className="ion-padding municipio-detalle">
                    <p><IonIcon icon={navigateCircleOutline}></IonIcon> Superficie: {municipio.superficie} km<sup>2</sup> </p>
                    <p><IonIcon icon={peopleOutline}></IonIcon> Población: {municipio.poblacion} habitantes</p>
                    <p><IonIcon icon={earthOutline}></IonIcon>
                        {municipio.pueblo != "0000" ? (` Pueblo magico: desde ${municipio.pueblo}`) : (` Fundación: ${municipio.fundacion}`)}
                    </p>
                    <p>{municipio.descripcion}</p>
                    {municipio.gastronomia ? (<><div><h3>Gastronomia</h3>{municipio.gastronomia}</div></>) : ("")}
                    {
                        actividades != null && actividades.length > 0 ? (<>
                            <IonText>
                                <h2>Actividades</h2>
                            </IonText>
                            {
                                actividades.map((actividad, i) => {
                                    return (
                                        <><div className='actividad'>
                                            <h4>{actividad.nombre}</h4>
                                            {
                                                actividad.descripcion != "" ? (
                                                    <><p>{actividad.descripcion}</p></>
                                                ) : ("")
                                            }
                                            {
                                                actividad.actividad != null && actividad.actividad != "" ? (
                                                    <><IonText><br /> - <b>Actividades</b>: {actividad.actividad}</IonText></>
                                                ) : ("")
                                            }
                                            {
                                                actividad.servicio != null && actividad.servicio != "" ? (
                                                    <><IonText><br /> - <b>Servicios</b>: {actividad.servicio}</IonText></>
                                                ) : ("")
                                            }
                                        </div></>
                                    );
                                })
                            }
                        </>) : ("")
                    }
                    {
                        municipio.imagen != null ? (<IonImg src={municipio.imagen} alt={municipio.nombre}></IonImg>) : ("")
                    }
                    {
                        imperdibles != null && imperdibles.length > 0 ? (<>
                            <IonText>
                                <h2>Lo imperdible</h2>
                            </IonText>
                            {
                                imperdibles.map((imperdible, i) => {
                                    return (
                                        <><div>
                                            <h4>{imperdible.nombre}</h4>
                                            <IonText>{imperdible.descripcion}</IonText>
                                        </div><hr /></>
                                    );
                                })
                            }
                        </>) : ("")
                    }
                    {
                        imagenes != null && imagenes.length > 0 ? (<>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                loop={true}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                            >
                                {
                                    imagenes.map((imagen, i) => {
                                        return (
                                            <SwiperSlide>
                                                <IonImg
                                                    src={imagen.url}
                                                    alt={municipio.nombre}
                                                ></IonImg>
                                            </SwiperSlide>
                                        );
                                    })
                                }
                            </Swiper></>) : ("")
                    }
                    {
                        pueblos != null && pueblos.length > 0 ? (<>
                            {
                                pueblos.map((pueblo, i) => {
                                    return (
                                        <><IonImg
                                            src={pueblo.url}
                                            alt={pueblo.nombre}
                                        ></IonImg>
                                            <IonText>{pueblo.nombre}</IonText> <br />
                                            <IonText>{pueblo.titulo}</IonText> <br />
                                            <p>{pueblo.descripcion}</p>
                                        </>

                                    );
                                })
                            }
                        </>) : ("")
                    }
                </div>
            </IonContent>
        </IonPage >
    );
};

export default Municipio;