import logo from "../../images/logo-footer.svg";
import facebook from "../../images/icon-facebook.svg";
import youtube from "../../images/icon-youtube.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

export default function Footer() {
  let iconStyle: string = "h-[24px] object-contain cursor-pointer";
  let navStyle: string = "xl:text-left cursor-pointer hover:text-p-lime-green hover:opacity-60";

  return (
    <footer className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-8 font-pubSans text-n-light-grey bg-p-dark-blue py-10 xl:px-40">
      <div className="flex flex-col items-center xl:items-start gap-8">
        <img src={logo} alt="Easybank company logo" className="object-contain" />
        <div className="flex gap-4">
          <img src={facebook} alt="Facebook logo" className={iconStyle} />
          <img src={youtube} alt="Youtube logo" className={iconStyle} />
          <img src={twitter} alt="Twitter logo" className={iconStyle} />
          <img src={pinterest} alt="Pinterest logo" className={iconStyle} />
          <img src={instagram} alt="Instagram logo" className={iconStyle} />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-3 xl:gap-32">
        <div className="flex flex-col gap-3 xl:items-start text-[15px] xl:pl-12">
          <button type="button" className={navStyle}>About Us</button>
          <button type="button" className={navStyle}>Contact</button>
          <button type="button" className={navStyle}>Blog</button>
        </div>
        <div className="flex flex-col gap-3 xl:items-start text-[15px] xl:pr-72">
          <button type="button" className={navStyle}>Careers</button>
          <button type="button" className={navStyle}>Support</button>
          <button type="button" className={navStyle}>Privacy Policy</button>
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-end gap-8">
        <button type="button" className="bg-gradient-to-r from-p-lime-green to-p-bright-cyan text-[14px] py-2.5 px-8 rounded-full hover:opacity-80">Request Invite</button>
        <p className="text-[15px] text-n-grey-blue xl:text-right">Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}