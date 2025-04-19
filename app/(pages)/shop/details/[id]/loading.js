import { ScaleLoader } from "react-spinners";
const loading = () => {
  return (
    <div className="flex justify-center items-end w-full relative h-[200px] md:h-[300px] lg:h-[500px]">
      <ScaleLoader
        className="absolute top-1/2 lg:top-[100px]"
        color="#E7B053"
      />
    </div>
  );
};

export default loading;
