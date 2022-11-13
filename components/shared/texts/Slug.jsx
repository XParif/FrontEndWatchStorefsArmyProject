import BlockText from "./BlockText";

const Slug = ({ children, size, color, line, weight }) => {
  return (
    <div style={{marginTop: ".5rem"}}>
      <BlockText size={size} color={color} line={line} weight={weight}>
        {children}
      </BlockText>
    </div>
  );
};
export default Slug;
