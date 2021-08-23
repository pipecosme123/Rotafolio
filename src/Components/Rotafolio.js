import React, { useState, useEffect } from 'react';
import { SlidersRotafolio } from '../Constants/Imagenes';
import ReactGA from 'react-ga';
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
  // let numSlider = 0;
  const [numSlider, setNumSlider] = useState(0);


  const ckickGoogleAnalitycs = (nums) => {
    // console.log(nums);
    if (nums === 22) {
      ReactGA.event({
        category: 'Click',
        action: `Ingresaron al folleto de Duraphat`,
      });
    }
  }

  const notify = (num) => {
    if (num === 1) {
      toast.info('Te recomendamos rotar la pantalla de tu dispositivo móvil para tener una mejor experiencia', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 8000,
        toastId: "noti1"
      });
    } else if (num === 2) {
      toast.info('Puedes dar click a esta imagen', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        toastId: "noti2"
      });
    }
  }

  useEffect(() => {
    if (resolucion < 500 && orientacion === 0 && numSlider === 0) {
      notify(1);
    }

    if (show) {
      notify(2);
    }
  })

  return (
    <div className="carrousel">

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => { setNumSlider(swiper.activeIndex); swiper.activeIndex === 22 ? setShow(true) : setShow(false);}}
      >
        {SlidersRotafolio.map(slider => (
          <SwiperSlide key={slider._id}>
            {({ isActive }) => (
              <div>
                <a href={slider.href} target="blank" onClick={() => ckickGoogleAnalitycs(numSlider)}>
                  <img className="img_slider" src={slider.Slider} alt="" />
                </a>
              </div>
            )}
          </SwiperSlide>

        ))}
      </Swiper>

      {/* <p className={show ? "activate" : "noActivate"} id="notif">Puedes dar click <br></br> a esta imagen</p>
      onChange={ isActive && slider._id === 22 ?  setShow(true) : setShow(false)}   {slider.href}
      */}
    </div>
  );

};

export default Rotafolio;

