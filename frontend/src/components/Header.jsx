import { Link } from "react-router-dom";
import "./myStyle.css";

export default function Header() {
  const content = (
    <>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 ppy-4">
        <ul>
          <link to="../About">
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
          <div className="lg:flex md:flex lg: flex-1 items center justify-end">
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
        </div>
      </nav>
    </>
  );
}
