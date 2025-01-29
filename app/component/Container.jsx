const Container = ({ children,className}) => {
  return <div className={`${className} max-w-[1216px] mx-auto px-2`}>{children}</div>;
};

export default Container;
