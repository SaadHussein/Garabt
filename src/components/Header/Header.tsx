import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import useStore from "../../store";
import Flag from "react-world-flags";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

const Header = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const languageModalRef = useRef<HTMLButtonElement>(null);
  const bussinessModalRef = useRef<HTMLLIElement>(null);
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(false);
  const [showBussinesModal, setShowBussinesModal] = useState<boolean>(false);
  const language = useStore((state) => state.language);
  const openMobileNavigation = useStore((state) => state.openMobileNavigation);
  const setOpenMobileNavigation = useStore(
    (state) => state.setOpenMobileNavigation
  );
  const setCountryCode = useStore((state) => state.setCountryCode);
  const setCountry = useStore((state) => state.setCountry);
  const setLanguage = useStore((state) => state.setLanguage);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      languageModalRef.current &&
      !languageModalRef.current.contains(event.target as Node)
    ) {
      setShowLanguageModal(false);
    }
    if (
      bussinessModalRef.current &&
      !bussinessModalRef.current.contains(event.target as Node)
    ) {
      setShowBussinesModal(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguageModal, showBussinesModal]);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setCountryCode(data.country_code_iso3);
        setCountry(data.country_name);
      })
      .catch((err) => {
        console.error("Failed to fetch country", err);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-[100%] px-8 h-[75px] bg-green-400 z-[10000] fixed top-0 left-0">
      <div className="flex justify-between items-center h-full">
        <img src="/garabt.png" alt="logo" className="w-14 h-14" />
        {width > 1165 ? (
          <ul className="flex items-center space-x-4 text-white font-semibold">
            <li className="cursor-pointer hover:text-green-600 duration-300">
              Home
            </li>
            <li className="cursor-pointer hover:text-green-600 duration-300">
              Browse Companies
            </li>
            <li className="cursor-pointer hover:text-green-600 duration-300">
              Suggest A Business
            </li>
            <li
              ref={bussinessModalRef}
              onClick={() => {
                if (showBussinesModal) {
                  setShowBussinesModal(false);
                } else {
                  setShowBussinesModal(true);
                }
              }}
              className="relative flex items-center gap-1 cursor-pointer hover:text-green-600 duration-300"
            >
              Manage Your Business
              <MdKeyboardArrowDown size={16} className="mt-[3px]" />
              <div
                className={`absolute top-[30px] right-0 bg-white text-black w-[190px] rounded-md shadow-lg duration-200 ${
                  showBussinesModal ? "" : "hidden"
                }`}
              >
                <ul>
                  <li className="text-[15px] flex items-center justify-center gap-2 cursor-pointer hover:text-white duration-300 py-1 hover:bg-green-400 px-2">
                    Register As A Business
                  </li>
                  <li className="text-[15px] flex items-center justify-center gap-2 cursor-pointer hover:text-white duration-300 py-1 hover:bg-green-400 px-2">
                    Plans & Pricing
                  </li>
                </ul>
              </div>
            </li>
            <li className="cursor-pointer hover:text-green-600 duration-300">
              Blog
            </li>

            <button className="cursor-pointer bg-white text-green-400 px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300">
              Sign Up
            </button>
            <button className="cursor-pointer bg-white text-green-400 px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300">
              Sign In
            </button>
            <button
              ref={languageModalRef}
              onClick={() => {
                if (showLanguageModal) {
                  setShowLanguageModal(false);
                } else {
                  setShowLanguageModal(true);
                }
              }}
              className="relative flex items-center gap-2 cursor-pointer bg-transparent border-[2px] border-white text-white px-4 py-2 rounded-md hover:text-green-400 hover:bg-white  duration-300"
            >
              <div className="flex items-center w-[22.5px] h-[22.5px]">
                <Flag
                  code={
                    language === "en" ? "USA" : language === "ar" ? "SA" : ""
                  }
                />
              </div>
              {language.toUpperCase()}
              <MdKeyboardArrowDown size={20} />
              <div
                className={`absolute top-[45px] right-0 bg-white text-black w-[110px] rounded-md shadow-lg duration-200 ${
                  showLanguageModal ? "" : "hidden"
                }`}
              >
                <ul>
                  <li
                    onClick={() => {
                      setLanguage("en");
                    }}
                    className="flex items-center justify-center gap-2 cursor-pointer hover:text-white duration-300 py-1 hover:bg-green-400 px-2"
                  >
                    <div className={`flex items-center w-[30px] h-[30px]`}>
                      <Flag code={"USA"} />
                    </div>{" "}
                    EN
                  </li>
                  <li
                    onClick={() => {
                      setLanguage("ar");
                    }}
                    className="flex items-center justify-center gap-2 cursor-pointer hover:text-white duration-300 py-1 hover:bg-green-400 px-2"
                  >
                    <div className={`flex items-center w-[30px] h-[30px]`}>
                      <Flag code={"SA"} />
                    </div>{" "}
                    AR
                  </li>
                </ul>
              </div>
            </button>
          </ul>
        ) : (
          <>
            <MdMenu
              size={36}
              className="cursor-pointer duration-300 text-white hover:text-green-600"
              onClick={() => {
                setOpenMobileNavigation(true);
              }}
            />
            <MobileNavigation
              openMobileNavigation={openMobileNavigation}
              setOpenMobileNavigation={setOpenMobileNavigation}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
