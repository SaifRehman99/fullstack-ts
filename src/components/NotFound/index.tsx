import { NotFoundType } from "types/notfound.type";
import emptySvg from "assets/no-data.svg";
import { cn } from "utils";

const NotFound = ({ text, height = 500, width = 400, customSvg, textFont = "text-md" }: NotFoundType) => {
  return (
    <div className="flex justify-center items-center w-[100%]">
      <p className="flex flex-col justify-center items-center">
        <img src={customSvg || emptySvg} height={height} width={width} alt="not-found" />
        <span className={cn("mt-3 text-gray-400 font-bold", textFont)}>{text}</span>
      </p>
    </div>
  );
};

export default NotFound;
