import styles from "./landing.module.scss";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import GraphicsInfo from "./components/graphicsInfo/graphicsInfo";
import FullStackInfo from "./components/fullstackInfo/fullstackInfo";
export default function Landing() {
  const [isGraphics, setIsGraphics] = useState(false);
  const [isFull, setIsFull] = useState(false);

  return (
    <div className={`flex h-screen relative `}>
      <div className={` ${styles["circle-box"]}`}>
        <BsArrowRightShort
          size={"5em"}
          className={`${styles["arrow-right"]}`}
          onClick={() => setIsFull(true)}
        />
        <BsArrowLeftShort
          onClick={() => setIsGraphics(true)}
          size={"5em"}
          className={`${styles["arrow-left"]} `}
        />
      </div>

      <div
        className={`bg-accent-700 w-1/2 text-primary-700 relative ${
          styles["left-container"]
        } ${isGraphics ? styles["remove-full"] : ""} ${
          isFull ? styles["apply-full"] : ""
        }`}
      >
        <h1 className="text-7xl font-bold text-right pt-28 pr-14 ">
          FULL STACK DEVELOPER
        </h1>

        {isFull ? (
          <>
            <div className={`${styles["arrow-back-left-box"]}`}>
              <BsArrowLeftShort
                onClick={() => setIsFull(false)}
                size={"5em"}
                className={`${styles["arrow-back-left"]} `}
              />
            </div>
            <FullStackInfo />
            <div className={"text-center  pt-16  "}>
              <Link href={"/fullstack-works"}>
                <a
                  className={`${styles["a-button"]}  rounded-sm bg-primary-700 text-accent-700`}
                >
                  Previous Works
                </a>
              </Link>
            </div>
          </>
        ) : (
          <Link href="/about">
            <a className={`absolute bottom-7 right-0 font-bold pr-14`}>ABOUT</a>
          </Link>
        )}
      </div>

      <div
        className={`w-1/2 bg-primary-700 relative ${
          styles["right-container"]
        } ${isGraphics ? styles["apply-graphics"] : ""} ${
          isFull ? styles["remove-graphics"] : ""
        }`}
      >
        <h1 className="text-7xl font-bold pt-28  pl-14 w-4/5 ">
          GRAPHICS DESIGNER
        </h1>

        {isGraphics ? (
          <>
            <div className={`${styles["arrow-back-right-box"]}`}>
              <BsArrowRightShort
                size={"5em"}
                className={`${styles["arrow-back-right"]}`}
                onClick={() => setIsGraphics(false)}
              />
            </div>

            <GraphicsInfo />

            <div className={"text-center  pt-28  "}>
              <Link href={"/graphics-works"}>
                <a
                  className={`${styles["a-button"]}  rounded-sm bg-accent-700 text-primary-700`}
                >
                  Previous Works
                </a>
              </Link>
            </div>

            <div className={`${styles["image-container-icon"]}`}>
              <div className={`${styles["img-figma"]}`}></div>
              <div className={`${styles["img-xd"]}`}></div>
              <div className={`${styles["img-ai"]}`}></div>
            </div>
          </>
        ) : (
          <Link href="/contact">
            <a className={`absolute bottom-7 font-bold pl-14`}>CONTACT</a>
          </Link>
        )}
      </div>
    </div>
  );
}
