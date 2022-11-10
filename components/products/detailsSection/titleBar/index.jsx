import TitleGroup from "./TitleGroup";
import SingleTitle from "./SingleTitle";

const TitleBar = () => {
  return (
    <TitleGroup>
      <SingleTitle>Description</SingleTitle>
      <SingleTitle>Product Details</SingleTitle>
      <SingleTitle>Reviews</SingleTitle>
      <SingleTitle>Policy</SingleTitle>
    </TitleGroup>
  );
};

export default TitleBar;
