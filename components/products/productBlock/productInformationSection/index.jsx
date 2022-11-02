import InformationStyle from "./InformationStyle";
import BlockText from "../../../shared/texts/BlockText";
import InlineText from "../../../shared/texts/InlineText";
import Price from "./Price";
import Button from "../../../shared/buttons";
import { Rating } from "./../../../shared/cards/textBlock/Rating";
import SelectBox from "./../../../shared/selectBoxs/index";
import ColorBox from "./ColorBox";
import ActionButtonGroup from "./ActionButtonGroup";
import SocialButtons from "./SocialButtons";
import {
  FaCartPlus,
  FaHeart,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaRedditSquare,
} from "react-icons/fa";

const colorList = ["Red", "Blue", "Gray", "Black", "Navy", "Gold", "Maroon"];

const ProductInformationSection = () => {
  return (
    <InformationStyle>
      <BlockText size="lg" weight="regular">
        Lorem Ipsum is simply dummy text of the printing and typsetting
        industry.
      </BlockText>
      <Price />
      <Rating rates="5" />
      <BlockText>
        Category : <InlineText color="primary">Classic</InlineText>{" "}
      </BlockText>
      <BlockText>
        Brand : <InlineText color="primary">Rolex</InlineText>{" "}
      </BlockText>
      <BlockText>
        Material : <InlineText color="primary">Artificial Leather</InlineText>{" "}
      </BlockText>
      <ColorBox>
        <InlineText>Color : </InlineText>
        <SelectBox list={colorList} />
      </ColorBox>
      <ActionButtonGroup>
        <Button fontSize="md" bg="primary">
          Add to Cart <FaCartPlus />
        </Button>
        <Button fontSize="md">
          Add to Wishlist <FaHeart />
        </Button>
      </ActionButtonGroup>
      <BlockText>Share on : </BlockText>
      <SocialButtons>
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaInstagramSquare />
        <FaLinkedin />
        <FaRedditSquare />
      </SocialButtons>
    </InformationStyle>
  );
};

export default ProductInformationSection;
