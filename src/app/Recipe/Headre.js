import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Meal from "../../../public/Meal-1.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="Header bg-cover bg-center">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row justify-around items-center max-w-screen-xl">
        <div className="w-full md:w-1/2 flex flex-col md:text-start text-center md:items-start items-center  gap-9">
          <h1 className="font-bold text-white text-3xl md:text-5xl">
            Discover Your Favourite Dish With Our{" "}
            <span style={{ color: "red" }}>Tasty Recipes!</span>
          </h1>
          <p className="text-white">
            Elevate your culinary game with your flavorful recipes. Explore a
            world of delicious possibilities today.
          </p>
          <div className="flex gap-5 md:my-0 my-5">
            <button
              style={{ background: "red" }}
              className="text-white text-sm  w-32 h-11 rounded-3xl"
            >
              Explore Recipe
            </button>
            <button className="w-40 text-white flex items-center gap-2">
              <PlayCircleOutlineIcon className="w-10 h-10" />
              Watch Video
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            className="w-full"
            src={Meal}
            alt="Meal image"
            width="380"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}
