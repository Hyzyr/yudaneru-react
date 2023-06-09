import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation } from "swiper";
import { fortuneSVG } from "components/SVG";

const swiperSettings = {
  loop: true,
  // effect: "fade",
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
          <div className="feedbacks__slider">
            <Swiper
              modules={[Navigation, EffectFade]}
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
                  <p>
                    {strings["item-1"].paragraph}
                    <span className="noBreak">{strings["item-1"].break}</span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feedbacks__slider-item">
                  <p>
                    {strings["item-2"].paragraph}
                    <span className="noBreak">{strings["item-1"].break}</span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="feedbacks__slider-item">
                  <p>
                    {strings["item-3"].paragraph}
                    <span className="noBreak">{strings["item-1"].break}</span>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
