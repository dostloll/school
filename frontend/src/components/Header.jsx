import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import "./myStyle.css";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <link to="Home">
            <li>Home</li>
          </link>
          <link>
            <li>About</li>
          </link>
          <link>
            <li>Contacts</li>
          </link>
          <link>
            <li>Gallery</li>
          </link>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <nav>
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
          <div className="flex items-center flex-1">
            <span>Logo</span>
          </div>
          <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-8 mr-16 text-[18px]">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="about">
                  <li>About</li>
                </Link>
                <Link to="contacts">
                  <li>Contacts</li>
                </Link>
                <Link to="../Home">
                  <li>Gallery</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>{click && content}</div>
          <button className="block sm:hidden transition " onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
    </>
  );
}
