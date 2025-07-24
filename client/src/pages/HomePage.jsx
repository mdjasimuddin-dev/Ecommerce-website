import FeatureSkeleton from "../skeleton/FeatureSkeleton";
import SliderSkeleton from "../skeleton/SliderSkeleton";

const HomePage = () => {
  return (
    <div>
      <h1>This is a Home Page</h1>
      <SliderSkeleton />
      <div className="grid grid-cols-5 gap-20 bg-gray-300 py-10 px-5">
        {Array.from({ length: 5 }).map(() => {
          return <FeatureSkeleton />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
