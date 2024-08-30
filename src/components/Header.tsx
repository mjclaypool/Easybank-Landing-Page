import { useState } from "react";
import Modal from "./Modal.tsx";

import logo from "../../images/logo.svg";
import hamburgerIcon from "../../images/icon-hamburger.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleShowModal() {
    setIsOpen(true);
  }

  function handleDone() {
    setIsOpen(false);
  }

  const navStyle: string = "text-[14px] hover:text-p-dark-blue";
  const navUnderline: string = "absolute -bottom-[24px] group-hover:bg-gradient-to-r from-p-lime-green to-p-bright-cyan h-[4px] w-full";
  const navLinks: string[] = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <>
      <header className="relative flex justify-center bg-n-white w-full z-20">
        <div className="relative flex justify-between p-6 z-20 font-pubSans lg:px-40 w-[1920px]">
          <img src={logo} alt="Easybank company logo" className="w-[139px] object-contain" />
          <img src={hamburgerIcon} alt="Hamburger menu icon" className="lg:hidden h-[11px] self-center object-contain cursor-pointer" onClick={handleShowModal} />
          <nav className="hidden lg:flex gap-7 text-n-grey-blue">
            {navLinks.map(link => (
              <div key={link} className="relative flex group">
                <button type="button" className={navStyle} >{link}</button>
                <div className={navUnderline} />
              </div>
            ))}
          </nav>
          <button type="button" className="hidden lg:block bg-gradient-to-r from-p-lime-green to-p-bright-cyan text-[14px] text-n-light-grey py-2.5 px-8 rounded-full hover:opacity-70">Request Invite</button>
        </div>
        {isOpen && <Modal onDone={handleDone}/>}
      </header>
    </>
  )
}