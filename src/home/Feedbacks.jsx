import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { fortuneSVG } from "components/SVG";

const swiperSettings = {
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  slidesPerView: 1,
};

const Feedbacks = ({ strings }) => {
  const next = useRef();
  const prev = useRef();

  return (
    <section className="feedbacks">
      <div className="autoContainer">
        <div className="feedbacks__inner">
          <div className="feedbacks__inner-info">
            <strong>{strings.caption}</strong>
            <h2>{strings.title}</h2>
            <p>{strings.paragraph}</p>
          </div>
          <div className="feedbacks__slider">
            <Swiper
              modules={[Navigation]}
              {...swiperSettings}
              navigation={{ nextEl: next.current, prevEl: prev.current }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prev.current;
                swiper.params.navigation.nextEl = next.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              <SwiperSlide>
                <div className="feedbacks__slider-item">
                  <p>“{strings["item-1"].paragraph}”</p>
                  <div className="feedbacks__slider-item-ico">{fortuneSVG}</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feedbacks__slider-item">
                  <p>“{strings["item-2"].paragraph}”</p>
                  <div className="feedbacks__slider-item-ico">{fortuneSVG}</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feedbacks__slider-item">
                  <p>“{strings["item-3"].paragraph}”</p>
                  <div className="feedbacks__slider-item-ico">{fortuneSVG}</div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-arrow swiper-arrow-prev" ref={prev}>
              <span className="custIcon custIcon--left"></span>
            </div>
            <div className="swiper-arrow swiper-arrow-next" ref={next}>
              <span className="custIcon custIcon--right"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
