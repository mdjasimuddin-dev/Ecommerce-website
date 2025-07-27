
import FeatureStore from "../../store/FeatureStore";
import FeatureSkeleton from "./../../skeleton/FeatureSkeleton";

const Feature = () => {
  const { featureList } = FeatureStore();

  if (featureList === null) {
    return <FeatureSkeleton/>;
  }
  return (
    <div>
      <h1>Feature List Components</h1>
    </div>
  );
};

export default Feature;
