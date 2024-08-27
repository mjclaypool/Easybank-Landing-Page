import logo from "../../images/logo.svg";
import hamburgerIcon from "../../images/icon-hamburger.svg";

export default function Header() {
  return (
    <header className="relative flex justify-between bg-n-white p-6 z-10">
      <img src={logo} alt="Easybank company logo" className="object-contain" />
      <img src={hamburgerIcon} alt="Hamburger menu icon" className="object-contain cursor-pointer" />
    </header>
  )
}