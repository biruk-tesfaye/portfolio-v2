import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";

import { VscGithub } from "react-icons/vsc";
import { GrCodepen } from "react-icons/gr";
import {
  AiFillBehanceCircle,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { RiTelegramLine } from "react-icons/ri";

export default function About() {
  return (
    <div
      className={`p-16 relative  pb-60 w-full h-screen bg-primary-700 text-accent-700`}
    >
      <Link href={"/"}>
        <a className={``}>
          <BsArrowLeftShort size={"2em"} className={`text-accent-600`} />
        </a>
      </Link>

      <div className={`absolute top-1/4  `}>
        <div className={`w-1/2   m-auto self-center`}>
          <h2 className={`text-5xl font-bold text-center pt-11 pb-4`}>
            A little bit about me
          </h2>
          <p className={`pb-16`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
            gravida volutpat bibendum sodales. Massa cras mauris enim, ipsum
            nunc. Massa vitae proin a quam massa eleifend. Mi sem et a hac.
            Tellus tristique dolor risus a est. Ut aenean nunc, adipiscing
            vitae. Tellus sollicitudin ut mollis mauris consectetur cursus
            semper arcu. Fusce felis congue elementum vulputate urna enim nibh
            a, neque. Blandit lectus scelerisque gravida justo vitae. Libero,
            arcu, diam velit aliquam eleifend venenatis lorem tellus ac. Nunc,
            fermentum id eros, faucibus massa odio tincidunt facilisis ut. Dui
            egestas id.
          </p>

          <div className={`text-center`}>
            <Link href={"/contact"}>
              <a
                className={`py-3 px-8 font-bold rounded-sm  text-accent-700 hover:underline`}
              >
                Contact Me
              </a>
            </Link>
          </div>
        </div>
        <div
          className={`pt-4 flex w-1/2 text-center  m-auto justify-center  items-center`}
        >
          <Link href={"#"}>
            <a>
              <VscGithub size={"1.5em"} className={`mr-1`} />
            </a>
          </Link>

          <Link href={"#"}>
            <a>
              <GrCodepen size={"1.5em"} className={`m-1`} />
            </a>
          </Link>
          <Link href={"#"}>
            <a>
              <AiFillBehanceCircle size={"1.5em"} className={`m-1`} />
            </a>
          </Link>
          <Link href={"#"}>
            <a>
              <TiSocialInstagramCircular size={"1.5em"} className={`m-1`} />
            </a>
          </Link>
          <Link href={"#"}>
            <a>
              <RiTelegramLine size={"1.5em"} className={`m-1`} />
            </a>
          </Link>
          <Link href={"#"}>
            <a>
              <AiOutlineTwitter size={"1.5em"} className={`m-1`} />
            </a>
          </Link>
          <Link href={"#"}>
            <a>
              <AiOutlineMail size={"1.5em"} className={`m-1`} />
            </a>
          </Link>
          <Link href={"#"}>
            <a>
              <AiOutlineLinkedin size={"1.5em"} className={`ml-1`} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
