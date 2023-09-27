import Image from "next/image";
import Logo from "../../../public/my-recipes-logo.png";
import { Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkdenIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <div style={{ background: "#f9f9f9" }}>
      <div
        className=" flex flex-1 flex-col md:gap-16 gap-8 justify-around items-center"
        style={{ padding: "22px 22px" }}
      >
        <div className="flex md:flex-row flex-col justify-around items-center">
          <div className=" md:block flex md:items-start justify-evenly items-center md:justify-around">
            <Image
              className="-ml-3"
              src={Logo}
              width="130"
              height="130"
              alt="Logo"
            />
            <p className="text-sm sm:text-md" style={{ width: "40%" }}>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment
            </p>
          </div>
          <div className="flex justify-around items-center gap-12 md:mt-0 mt-5 ">
            <div>
              <ul className="flex justify-around flex-col gap-3">
                <h3 className="font-bold">Tastebite</h3>
                <li>
                  <a className="cursor-pointer">Home</a>
                </li>
                <li>
                  <a className="cursor-pointer">Menu</a>
                </li>
                <li>
                  <a className="cursor-pointer">Reviews</a>
                </li>
                <li>
                  <a className="cursor-pointer">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex justify-around flex-col gap-3">
                <h3 className="font-bold">Follow</h3>
                <li>
                  <a className="cursor-pointer">Facebook</a>
                </li>
                <li>
                  <a className="cursor-pointer">Twitter</a>
                </li>
                <li>
                  <a className="cursor-pointer">Instagram</a>
                </li>
                <li>
                  <a className="cursor-pointer">Youtube</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex justify-around flex-col gap-3">
                <h3 className="font-bold">Legal</h3>
                <li>
                  <a className="cursor-pointer">Termes</a>
                </li>
                <li>
                  <a className="cursor-pointer">Conditions</a>
                </li>
                <li>
                  <a className="cursor-pointer">Cookies</a>
                </li>
                <li>
                  <a className="cursor-pointer">Copyright</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4" style={{ width: "100%" }}>
          <Divider />
          <div className="flex flex-row justify-between ">
            <div>
              <p>© 2023 Tastebite- All rights reserved</p>
            </div>
            <div>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkdenIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
