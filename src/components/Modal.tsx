import { createPortal } from 'react-dom';

import logo from "../../images/logo.svg";
import closeIcon from "../../images/icon-close.svg";

export default function Modal({onDone}: {onDone:any}) {

  function handleCloseModal() {
    onDone();
  }

  return createPortal(
    <>
      <dialog
        className="fixed top-0 left-0 w-full h-full font-pubSans bg-p-dark-blue bg-opacity-50 z-30"
        onClose={onDone}
        open
      >
        <div className="relative flex justify-center bg-n-white w-full z-20">
          <div className="relative flex justify-between p-6 z-20 font-pubSans lg:px-40 w-[1920px]">
            <img src={logo} alt="Easybank company logo" className="w-[139px] object-contain" />
            <img src={closeIcon} alt="Close menu icon" className="h-[18px] self-center object-contain cursor-pointer" onClick={handleCloseModal} />
          </div>
        </div>
        <div className="flex bg-n-white m-6 p-6 rounded-md">
          <div className="flex flex-col w-full gap-5 text-center">
            <p className="text-lg text-p-dark-blue cursor-pointer">Home</p>
            <p className="text-lg text-p-dark-blue cursor-pointer">About</p>
            <p className="text-lg text-p-dark-blue cursor-pointer">Contact</p>
            <p className="text-lg text-p-dark-blue cursor-pointer">Blog</p>
            <p className="text-lg text-p-dark-blue cursor-pointer">Careers</p>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')!
  );
}