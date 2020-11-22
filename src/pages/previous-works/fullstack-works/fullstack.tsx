import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";

import {
  SiJavascript,
  SiTypescript,
  SiSass,
  SiReact,
  SiGatsby,
  SiPostgresql,
} from "react-icons/si";
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

export default function Fullstack() {
  return (
    <div>
      <div
        className={`p-16 pb-60 w-full h-auto bg-accent-700 text-primary-700`}
      >
        <Link href={"/"}>
          <a>
            <BsArrowLeftShort size={"2em"} className={`text-primary-600`} />
          </a>
        </Link>

        <h1 className={`pt-16 w-full text-7xl font-bold text-center`}>
          FULLSTACK DEVELOPMENT
        </h1>
        <h2 className={`w-full text-3xl text-center pt-6`}>Previous work</h2>

        <div className={`pt-40`}>
          <div className={`grid grid-cols-2 gap-3`}>
            <Image
              src={"/works/fullstack/nyala-website.png"}
              alt="Landing page screenshot taken from the NYALA MOTORS S.C website"
              width={500}
              height={425}
            />

            <div>
              <h2 className={`font-bold text-2xl pb-3`}>Language Used</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Javasript</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiJavascript />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8  mx-3 flex  items-center`}
                >
                  <span>Typescript</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiTypescript />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>CSS/Saas</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiSass />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Frontend</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>React</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiReact />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8 mx-3  flex  items-center`}
                >
                  <span>Gatsby</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiGatsby />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>CSS/Saas</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiSass />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Backend/CMS</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Strapi</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiJavascript />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Database</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Postgressql</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiPostgresql />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Hosting</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Vercel</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiPostgresql />
                  </span>
                </div>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8 mx-3  flex  items-center`}
                >
                  <span>Netlify</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiPostgresql />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Heroku</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiPostgresql />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-60`}>
          <div className={`grid grid-cols-2 gap-3`}>
            <Image
              src={"/works/fullstack/3f.png"}
              alt="Landing page screenshot taken from the NYALA MOTORS S.C website"
              width={500}
              height={425}
            />

            <div>
              <h2 className={`font-bold text-2xl pb-3`}>Language Used</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Javasript</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiJavascript />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8  mx-3 flex  items-center`}
                >
                  <span>Typescript</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiTypescript />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>CSS/Saas</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiSass />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Frontend</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>React</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiReact />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8 mx-3  flex  items-center`}
                >
                  <span>Nextjs</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiGatsby />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>CSS/Saas</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiSass />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Backend/CMS</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Strapi</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiJavascript />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Database</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Postgressql</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiPostgresql />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Hosting</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Vercel</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiPostgresql />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8  mx-3 flex  items-center`}
                >
                  <span>Heroku</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiPostgresql />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-60`}>
          <div className={`grid grid-cols-2 gap-3`}>
            <Image
              src={"/works/fullstack/zetseat.png"}
              alt="Landing page screenshot taken from the NYALA MOTORS S.C website"
              width={500}
              height={425}
            />

            <div>
              <h2 className={`font-bold text-2xl pb-3`}>Language Used</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Javasript</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiJavascript />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8  mx-3 flex  items-center`}
                >
                  <span>Typescript</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiTypescript />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>CSS/Saas</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiSass />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Frontend</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>React</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiReact />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8 mx-3  flex  items-center`}
                >
                  <span>Nextjs</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiGatsby />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>CSS/Saas</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiSass />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Backend/CMS</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Strapi</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiJavascript />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Database</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Postgressql</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiPostgresql />
                  </span>
                </div>
              </div>

              <h2 className={`font-bold text-2xl pb-3 mt-4`}>Hosting</h2>
              <div className={`flex`}>
                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8   flex  items-center`}
                >
                  <span>Vercel</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiPostgresql />
                  </span>
                </div>

                <div
                  className={`text-accent-700 bg-primary-700 h-8 px-8  mx-3 flex  items-center`}
                >
                  <span>Heroku</span>
                  <span className={"text-accent-700 ml-2"}>
                    <SiPostgresql />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-center pb-6 pt-28 bg-primary-700 text-accent-700 text-center`}
      >
        <div className={`m-au `}>
          <div className={``}>
            <Link href={"#"}>
              <a
                className={`py-3 px-8 rounded-sm bg-accent-700 text-primary-700`}
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
