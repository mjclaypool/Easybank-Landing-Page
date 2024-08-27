import logo from "../../images/logo-footer.svg";
import facebook from "../../images/icon-facebook.svg";
import youtube from "../../images/icon-youtube.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8 font-pubSans text-n-light-grey bg-p-dark-blue py-10">
      <img src={logo} alt="Easybank company logo" className="object-contain" />
      <div className="flex gap-4">
        <img src={facebook} alt="Facebook logo" className="h-[24px] object-contain cursor-pointer" />
        <img src={youtube} alt="Youtube logo" className="h-[24px] object-contain cursor-pointer" />
        <img src={twitter} alt="Twitter logo" className="h-[24px] object-contain cursor-pointer" />
        <img src={pinterest} alt="Pinterest logo" className="h-[24px] object-contain cursor-pointer" />
        <img src={instagram} alt="Instagram logo" className="h-[24px] object-contain cursor-pointer" />
      </div>
      <div className="flex flex-col gap-3 text-[15px]">
        <button type="button">About Us</button>
        <button type="button">Contact</button>
        <button type="button">Blog</button>
        <button type="button">Careers</button>
        <button type="button">Support</button>
        <button type="button">Privacy Policy</button>
      </div>
      <button type="button" className="bg-gradient-to-r from-p-lime-green to-p-bright-cyan text-[14px] py-2.5 px-8 rounded-full">Request Invite</button>
      <p className="text-[15px] text-n-grey-blue">Easybank. All Rights Reserved</p>
    </footer>
  )
}