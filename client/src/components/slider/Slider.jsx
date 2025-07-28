import productStore from "../../store/ProductStore";
import SliderSkeleton from "./../../skeleton/SliderSkeleton";

const Slider = () => {
  const { sliderList } = productStore();

  if (sliderList === null) {
    return <SliderSkeleton />;
  } else {
    return (
      <div className="mt-28">
        <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-10">
          <h1>Slider Collection</h1>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            doloribus!
          </p>

          {sliderList.map((slideData) => {
            console.log(slideData.img1);
            return (
              <div key={slideData._id}>
                <img src={slideData.img1} alt="" />
                <img src={slideData.img2} alt="" />
                <img src={slideData.img3} alt="" />
                <img src={slideData.img4} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Slider;
