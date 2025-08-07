import FeatureSkeleton from "../../skeleton/FeatureSkeleton";
import featureStore from "../../store/FeatureStore";

const Feature = () => {
  const { featureList } = featureStore();

  if (featureList === null) {
    return <FeatureSkeleton />;
  } else {
    return (
      <div className="text-center text-2xl md:text-4xl font-bold space-y-2 my-5 mt-36">
        <h1>Your Shopping Experience</h1>
        <p className="text-base font-normal md:w-1/2 mx-auto">
          We've made shopping easy and stress-free with fast shipping, simple returns, and dedicated support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-5">
          {featureList.map((item) => {
            return (
              <div className="p-2 items-center lg:p-2">

                <div className="items-center flex gap-2">
                  <figure>
                    <img src={item.img} className="h-28" alt="feature image" />
                  </figure>
                  <div className="text-left space-y-1">
                    <h1 className="text-xl">{item.name}</h1>
                    <p className="text-sm font-normal">
                      {item.description.length > 50
                        ? item.description.slice(0, 50)
                        : item.description}
                    </p>
                  </div>
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
