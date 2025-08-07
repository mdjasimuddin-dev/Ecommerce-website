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
                    <SwiperSlide className="p-10 bg-orange-300">
                      <section className="  dark:bg-gray-100 dark:text-gray-800">
                        <div className="w-full flex col-reverse flex-col justify-center mx-auto px-6 lg:flex-row lg:justify-between">
                          <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                              {slideData.title}
                              erat pharetra
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                              {slideData.desc}
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                              <a
                                rel="noopener noreferrer"
                                href="#"
                                className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
                              >
                                Buy Now
                              </a>
                              
                            </div>
                          </div>

                          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <img
                              src={slideData.img1}
                              alt=""
                              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                            />
                          </div>
                        </div>
                      </section>
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
