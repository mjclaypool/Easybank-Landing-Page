import logo from "../../images/logo.svg";
import hamburgerIcon from "../../images/icon-hamburger.svg";

export default function Header() {
  return (
    <header className="flex justify-between p-6">
      <img src={logo} alt="Easybank company logo" className="object-contain" />
      <img src={hamburgerIcon} alt="Hamburger menu icon" className="object-contain cursor-pointer" />
    </header>
  )
}