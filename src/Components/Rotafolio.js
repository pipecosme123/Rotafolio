import React, { useState, useEffect } from 'react';
import { SlidersRotafolio } from '../Constants/Imagenes';
import "../css/Rotafolio.css";

import { toast } from 'react-toastify';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

toast.configure()
const Rotafolio = () => {
  let orientacion = window.orientation;
  let resolucion = window.screen.width;
  window.document.title = 'Duraphat - Rotafolio';

  const [show, setShow] = useState(false);

  function notify(){
    toast.info('Te recomendamos rotar la pantalla de tu dispositivo móvil para tener una mayor experiencia',{position: toast.POSITION.TOP_CENTER, autoClose: 8000});
  }
  
  function info(){
    toast.info('Puedes dar click a esta imagen',{position: toast.POSITION.TOP_CENTER, autoClose: 5000});
  }

  useEffect(() => {
    if(resolucion < 500 && orientacion === 0){
      notify();
    }
  
    if(show){
      info();
    }
  })

  return (
    <div className="carrousel">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {SlidersRotafolio.map(slider => (
          <SwiperSlide key={slider._id}>
            {({ isActive }) => (
              <div onChange={ isActive && slider._id === 22 ?  setShow(true) : setShow(false)}>
                <a href={slider.href}>
                  <img className="img_slider" src={slider.Slider} alt="" />
                </a>
              </div>
            )}
          </SwiperSlide>

        ))}
      </Swiper>
      {/* <p className={show ? "activate" : "noActivate"} id="notif">Puedes dar click <br></br> a esta imagen</p> */}
    </div>
  );

};

export default Rotafolio;

