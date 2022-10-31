import BlockText from "./BlockText";
import Bar from "./Bar";

const Title = ({ children, size, color, line, weight }) => {
  return (
    <div>
      <BlockText size={size} color={color} line={line} weight={weight}>
        {children}
      </BlockText>
      <Bar />
    </div>
  );
};

export default Title;
