import { SiAdobeillustrator, SiAdobexd } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import styles from "./graphicsInfo.module.scss";
export default function GraphicsInfo() {
  return (
    <div className={`px-16 w-4/6 m-auto`}>
      <p className={`pt-8`}>
        I have always wanted to design and help people express their business
        and feeling through my design. I am skilled in logo design,poster
        design, postcard design, brochures, business cards and illustrations
      </p>

      <h2 className={`font-bold text-2xl pt-10`}> Skills</h2>

      <div className={`grid gap-3 grid-cols-4  pt-6  `}>
        <div className={`text-primary-700 bg-accent-700 h-8 px-8 leading-8 `}>
          poster design
        </div>
        <div className={`text-primary-700 bg-accent-700 h-8 px-8 leading-8 `}>
          Brochure Design
        </div>
        <div className={`text-primary-700 bg-accent-700 h-8 px-8 leading-8 `}>
          Vector Illustration
        </div>
        <div className={`text-primary-700 bg-accent-700 h-8 px-8 leading-8 `}>
          Logo Design
        </div>
        <div className={`text-primary-700 bg-accent-700 h-8 px-8 leading-8 `}>
          Prototyping
        </div>
        <div className={`text-primary-700 bg-accent-700 h-8 px-8 leading-8 `}>
          Web Design
        </div>
        <div className={`text-primary-700 bg-accent-700 h-8 px-8 leading-8 `}>
          UI/UX
        </div>
        <div className={`text-primary-700 bg-accent-700 h-8 px-8 leading-8 `}>
          Branding
        </div>
      </div>

      <h2 className={`font-bold text-2xl pt-10`}> Tools</h2>

      <div className={` pt-6 ${styles["grid-container"]}`}>
        <div
          className={`text-primary-700 bg-accent-700 h-8 px-8   flex  items-center`}
        >
          <span>Adobe Illustration</span>
          <span className={"text-primary-700 ml-2"}>
            <SiAdobeillustrator />
          </span>
        </div>
        <div
          className={`text-primary-700 bg-accent-700 h-8 px-8  flex  items-center`}
        >
          <span>Adobe XD</span>
          <span className={"text-primary-700 ml-2"}>
            <SiAdobexd />
          </span>
        </div>
        <div
          className={`text-primary-700 bg-accent-700 h-8 px-8  flex  items-center `}
        >
          <span>Figma</span>
          <span className={"text-primary-700 ml-2"}>
            <FiFigma />
          </span>
        </div>
      </div>
   
   

   <div className={`${styles['image-container-bg']}`}>

   </div>
    </div>
  );
}
