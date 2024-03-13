const Scroll = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        overflowY: "scroll",
        border: ".1px solid #0ccac4",
        height: "800px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
