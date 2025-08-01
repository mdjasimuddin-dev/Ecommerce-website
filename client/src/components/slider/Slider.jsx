import productStore from "../../store/ProductStore";
import SliderSkeleton from "./../../skeleton/SliderSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const { sliderList } = productStore();

  if (sliderList === null) {
    return <SliderSkeleton />;
  } else {
    return (
      <>
        <div className="mt-28">
          <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
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
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >

              {sliderList.map((slideData) => {
                console.log(slideData.img1);
                return (
                  <div key={slideData._id}>
                    <SwiperSlide>
                      <div>
                        <img
                          className="w-full h-[60vh]"
                          src={`https://cdn.stocksnap.io/img-thumbs/280h/abstract-waves_XYBLVEGDJM.jpg`}
                          alt=""
                        />
                      </div>
                      <div></div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      </>
    );
  }
};

export default Slider;
