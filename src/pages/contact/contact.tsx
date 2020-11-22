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
import { FaPhoneVolume } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={`p-16 pb-60 w-full h-auto bg-accent-700 text-primary-700`}>
      <div>
        <Link href={"/"}>
          <a className={``}>
            <BsArrowLeftShort size={"2em"} className={`text-primary-600`} />
          </a>
        </Link>

        <Link href="tel:+251923637040">
          <a className={"float-right flex items-center text-xl"}>
            <FaPhoneVolume />
            +251 923637040
          </a>
        </Link>
      </div>

      <div
        className={`w-1/3 m-auto rounded-md mt-10 pb-16 bg-primary-700 text-accent-700`}
      >
        <h2 className={`text-xl font-medium text-center pt-11 pb-4`}>
          Contact Form
        </h2>

        <form>
          <div className={`w-2/3 mt-4 m-auto`}>
            <label className={"pb-3 text-accent-500"}>Email</label>
            <div>
              <input
                type={"text"}
                className={`w-full px-4 py-2 rounded`}
                placeholder={"johndoe@gmail.com"}
              />
            </div>
          </div>

          <div className={`w-2/3 mt-4 m-auto`}>
            <label className={"pb-3 text-accent-500"}>Subject</label>
            <div>
              <input
                type={"text"}
                className={`w-full px-4 py-2 rounded`}
                placeholder={"requesting for a price quotation"}
              />
            </div>
          </div>

          <div className={`w-2/3 mt-4 m-auto`}>
            <label className={"pb-3 text-accent-500"}>Message</label>
            <div>
              <textarea
                rows={4}
                className={`w-full px-4 py-2 rounded`}
                placeholder={"johndoe@gmail.com"}
              />
            </div>
          </div>

          <div className={`text-center pt-8`}>
            <button
              type={"submit"}
              className={`py-2 px-8 rounded-sm bg-accent-700 text-primary-700`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className={`pt-8 flex w-1/3  m-auto  items-center`}>
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
  );
}
