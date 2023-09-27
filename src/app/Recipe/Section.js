/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import RoomServiceTwoToneIcon from "@mui/icons-material/RoomServiceTwoTone";
import { Divider } from "@mui/material";
import Meal from "../../../public/Meal-1.png";

export default function Section() {
  const Data = [1, 2, 3, 4, 5, 6, 7, 8]; // Define the array to generate 4 items

  return (
    <div className="" style={{ background: "rgb(254 245 228)" }}>
      <section className="mx-auto my-12">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-center text-2xl md:text-4xl font-bold">
            So, What are We Making <span style={{ color: "red" }}>today?</span>
          </h1>
          <p
            className="text-center text-sm md:text-base lg:text-lg"
            style={{ width: "65%" }}
          >
            our menu features a tantalizing array of dishes, each crafted with
            fresh, high-quality ingredients and a chef's touch from classic
            comfort foods to elegant entrees, there's something to satisfy every
            craving
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-19 p-10">
            {Data.map((item) => (
              <div
                key={item}
                className="flex flex-1 flex-col justify-around  items-center gap-3 bg-white rounded-xl shadow-xl p-4"
              >
                <Image
                  className="-mt-14"
                  src={Meal}
                  alt={`Meal-1`}
                  width="165"
                  height="165"
                />
                <h3 className="font-bold text-center">spaghetti napolitana</h3>
                <div className="flex justify-around items-center gap-4">
                  <div className="flex flex-1 items-center flex-col gap-1">
                    <AvTimerIcon />
                    <h5 className="text-center w-20">
                      total time
                      <br />
                      45 min
                    </h5>
                  </div>
                  <Divider orientation="vertical" className="text-black h-16" />
                  <div className="flex flex-1 items-center flex-col gap-1">
                    <RoomServiceTwoToneIcon />
                    <h5 className="text-center">
                      Servings
                      <br />4
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
