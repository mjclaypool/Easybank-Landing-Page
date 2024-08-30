import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "../../images/logo-footer.svg";

export default function Footer() {
  const iconStyle: string = "h-[24px] w-[24px] fill-white object-contain cursor-pointer hover:text-p-lime-green";
  const navStyle: string = "xl:text-left cursor-pointer hover:text-p-lime-green";

  return (
    <footer className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-8 font-pubSans text-n-light-grey bg-p-dark-blue py-10 xl:px-40">
      <div className="flex flex-col items-center xl:items-start gap-8">
        <img src={logo} alt="Easybank company logo" className="object-contain" />
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faFacebook} className={iconStyle} />
          <FontAwesomeIcon icon={faYoutube} className={iconStyle} />
          <FontAwesomeIcon icon={faTwitter} className={iconStyle} />
          <FontAwesomeIcon icon={faPinterest} className={iconStyle} />
          <FontAwesomeIcon icon={faInstagram} className={iconStyle} />
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
        <div className="bg-n-white rounded-full">
          <button type="button" className="bg-gradient-to-r from-p-lime-green to-p-bright-cyan text-[14px] py-2.5 px-8 rounded-full hover:opacity-70">Request Invite</button>
        </div>
        <p className="text-[15px] text-n-grey-blue xl:text-right">Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}