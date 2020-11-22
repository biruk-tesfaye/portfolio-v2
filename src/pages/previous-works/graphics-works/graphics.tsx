import { BsArrowLeftShort } from "react-icons/bs";
// import styles from "./graphics.module.scss";
import Image from "next/image";
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

export default function Graphics() {
  return (
    <div>
      <div
        className={`p-16 pb-60 w-full h-auto bg-primary-700 text-accent-700`}
      >
        <Link href={"/"}>
          <a>
            <BsArrowLeftShort size={"2em"} className={`text-accent-600`} />
          </a>
        </Link>

        <h1 className={`pt-16 w-full text-7xl font-bold text-center`}>
          GRAPHICS DSIGNING
        </h1>
        <h2 className={`w-full text-3xl text-center pt-6`}>Previous work</h2>

        <div className={"pt-16"}>
          <div className={`grid grid-cols-2 gap-3`}>
            <Image
              src={"/works/graphics/nyala.png"}
              alt="Picture of postcard designed for NYALA MOTORS S.C"
              width={500}
              height={425}
            />
            <div className={"relative "}>
              <h1 className={`text-3xl`}>Nyala Motors: New Year Postcard</h1>
              <p className={`text-lg pt-3 font-light`}>
                Nyala motors s.c is a company in Ethiopia that imports Nissan
                cars, and for this project they wanted a Postcard for the 2013
                Ethiopian New year's for their local customers. On the design;
                As their requirement, I have included their new imported car and
                used Ethiopian art style to give it a home feel for their local
                customers.
              </p>

              <div className={`absolute right-0 bottom-0`}>
                <Link href={"#"}>
                  <a
                    className={`py-3 px-8 rounded-sm bg-accent-700 text-primary-700`}
                  >
                    View Full size
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={"pt-60"}>
          <div className={`grid grid-cols-2 gap-3`}>
            <Image
              src={"/works/graphics/bookme.png"}
              alt="Picture of postcard designed for NYALA MOTORS S.C"
              width={500}
              height={425}
            />
            <div className={"relative "}>
              <h1 className={`text-3xl`}>Ashewena: Website Prototype</h1>
              <p className={`text-lg pt-3 font-light`}>
                Ashewena is a website where people browse and book talents likes
                musician, models, actors and comedians. I took a minimal
                approach with a simple vector based design to make it appealing
                and stand out from the traditional talent/artist booking
                websites. it was a one time project.
              </p>

              <div className={`absolute right-0 bottom-0`}>
                <Link href={"#"}>
                  <a
                    className={`py-3 px-8 rounded-sm bg-accent-700 text-primary-700`}
                  >
                    View Prototype
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-60 text-center`}>
          <Image
            src={"/works/graphics/logo-collection.png"}
            alt="Picture of postcard designed for NYALA MOTORS S.C"
            width={1260}
            height={700}
          />

          <div className={`pt-20`}>
            <Link href={"#"}>
              <a
                className={`py-3 px-8 rounded-sm bg-accent-700 text-primary-700`}
              >
                Browse Logo Collection
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-center pb-6 pt-28 bg-accent-700 text-primary-700 text-center`}
      >
        <div className={`m-au `}>
          <div className={``}>
            <Link href={"#"}>
              <a
                className={`py-3 px-8 rounded-sm bg-primary-700 text-accent-700`}
              >
                Contact
              </a>
            </Link>
          </div>

          <div className={`pt-8 flex justify-between items-center`}>
            <Link href={"#"}>
              <a>
                <VscGithub size={"2em"} className={`m-3`} />
              </a>
            </Link>

            <Link href={"#"}>
              <a>
                <GrCodepen size={"2em"} className={`m-3`} />
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <AiFillBehanceCircle size={"2em"} className={`m-3`} />
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <TiSocialInstagramCircular size={"2em"} className={`m-3`} />
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <RiTelegramLine size={"2em"} className={`m-3`} />
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <AiOutlineTwitter size={"2em"} className={`m-3`} />
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <AiOutlineMail size={"2em"} className={`m-3`} />
              </a>
            </Link>
            <Link href={"#"}>
              <a>
                <AiOutlineLinkedin size={"2em"} className={`m-3`} />
              </a>
            </Link>
          </div>

          <div className={`pt-12`}>
            <h6>Biruk Tesfaye © 2020 </h6>
          </div>
        </div>
      </div>
   
   
    </div>
  );
}
