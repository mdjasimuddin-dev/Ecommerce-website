import FeatureSkeleton from "../../skeleton/FeatureSkeleton";
import featureStore from "../../store/FeatureStore";

const Feature = () => {
  const { featureList } = featureStore();

  if (featureList === null) {
    return <FeatureSkeleton />;
  } else {
    return (
      <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-36">
        <h1>Experience the MJ Soft bd Difference</h1>
        <p className="text-base font-normal md:w-1/2 mx-auto">
          We're committed to bringing you the best. Our core features are
          designed to offer unparalleled convenience, reliability, and peace of
          mind every time you shop.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5">
          {featureList.map((item) => {
            return (
              <div className=" bg-white p-2 items-center lg:p-5">
                {/* <div>
                    
                  </div> */}
                <div className="items-center">
                  <figure>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                      alt="Shoes"
                    />
                  </figure>
                  <h1 className="text-lg">{item.name}</h1>
                  <p className="text-base">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Feature;
