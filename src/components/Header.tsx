import logo from "../../images/logo.svg";
import hamburgerIcon from "../../images/icon-hamburger.svg";

export default function Header() {
  return (
    <header className="relative flex justify-between bg-n-white p-6 z-20 font-pubSans lg:px-40">
      <img src={logo} alt="Easybank company logo" className="object-contain" />
      <img src={hamburgerIcon} alt="Hamburger menu icon" className="lg:hidden object-contain cursor-pointer" />
      <div className="hidden lg:flex gap-7 text-n-grey-blue">
        <button type="button" className="text-[14px] hover:text-p-dark-blue" >Home</button>
        <button type="button" className="text-[14px] hover:text-p-dark-blue" >About</button>
        <button type="button" className="text-[14px] hover:text-p-dark-blue" >Contact</button>
        <button type="button" className="text-[14px] hover:text-p-dark-blue" >Blog</button>
        <button type="button" className="text-[14px] hover:text-p-dark-blue" >Careers</button>
      </div>
      <button type="button" className="hidden lg:block bg-gradient-to-r from-p-lime-green to-p-bright-cyan text-[14px] text-n-light-grey py-2.5 px-8 rounded-full hover:opacity-70">Request Invite</button>
    </header>
  )
}