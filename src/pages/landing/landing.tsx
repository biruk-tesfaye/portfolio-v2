import styles from "./landing.module.scss";
export default function Landing() {
  return (
    <div className="flex h-screen relative">
      <div className={` ${styles["circle-box"]}`}></div>

      <div className={"bg-accent-700 w-1/2 text-primary-700"}>
        <h1 className="text-7xl font-bold text-right pt-28 pr-14 ">
          FULL STACK DEVELOPER
        </h1>
      </div>
      <div className={"w-1/2 bg-primary-700"}>
        <h1 className="text-7xl font-bold pt-28  pl-14 ">
          GRAPHICS <br /> DESIGNER
        </h1>
      </div>
    </div>
  );
}
