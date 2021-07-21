import React from 'react';
import { Imagenes } from '../Constants/Imagenes';
import "../css/Folleto.css";

const Folleto = () => {
    window.document.title = 'Folleto - Rotafolio';
    return (
        <div className="folleto">
            <div className="f_folleto">
                <div className="f_encabezado">
                    <img className="LogoColgate" src={Imagenes.LogoColgate} alt="LogoColgate" />
                    <div className="f_textoEncabezado">
                        <h2 className="subtitulo">Acabas de recibir un <br></br> tratamiento especializado para</h2>
                        <h1 className="titulo">prevenir y controlar <br></br> la caries dental</h1>
                    </div>
                </div>
                <img src={Imagenes.folletoImagenPrincipal} alt="ImagenPrincipal" />
                <div className="f_contexto">
                    <div className="f_textoInicial">
                        <p>Instrucciones para lograr un mejor resultado después de la aplicación del barniz <b>Colgate Duraphat&#174;</b></p>
                    </div>
                    <div className="f_puntos">
                        <ul>
                            <li>Las siguientes 2 horas luego de la aplicación, no ingerir ningún alimento, ni sólido ni líquido.</li>
                            <li>Después de las 2 horas iniciales, tener dieta blanda hasta las 12 horas.</li>
                            <li>Cepilla tus dientes a las 12 horas de haber recibido la aplicación de Duraphat, así dejarás actuar la capa protectora de barniz, liberando el flúor que necesitas para tus dientes.</li>
                        </ul>
                    </div>
                    <div className="f_recuadro rojo">
                        <h3>Recuerda que:</h3>
                        <p>El exceso de barniz restante será removido cuando cepilles tus dientes y uses la seda dental.  En ese momento ya tus dientes estarán protegidos contra la caries gracias al flúor que queda en contacto con ellos.</p>
                    </div>
                    <img src={Imagenes.folletoLogo} alt="ImagenDelLogo" className="ImagenDelLogo" />
                    <div className="f_recuadro morado">
                        <p>No olvides que la <b>caries</b> aparece cuando no hay una efectiva remoción de la placa bacteriana.</p>
                    </div>
                    <div className="f_puntos">
                        <h3>Para prevenirla sigue estos consejos:</h3>
                        <ul>
                            <li>Cepilla tus dientes con crema dental con flúor, 3 veces al día por 2 minutos.</li>
                            <li>Usa la seda dental mínimo 1 vez al día.</li>
                            <li>Visita al odontólogo mínimo dos veces al año.</li>
                            <li>Reduce las veces que comes y bebes alimentos azucarados.</li>
                            <li>Pregunta a tu odontólogo por la aplicación de barniz de flúor para prevenir la caries.</li>
                        </ul>
                    </div>
                    <img src={Imagenes.folletoBannerFinal} alt="ImagenDelBannerFinal" className="ImagenDelBannerFinal" />
                </div>
            </div>
        </div>
    );
};

export default Folleto;