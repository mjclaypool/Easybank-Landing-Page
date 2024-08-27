import heroImgD from "../../images/bg-intro-desktop.svg";
import heroImgM from "../../images/bg-intro-mobile.svg";
import mockups from "../../images/image-mockups.png"

export default function Hero() {
  return (
    <div className="relative">
      <img src={mockups} alt="Hero image of Easybank mock-ups" className="h-[420px] absolute left-[50%] translate-x-[-50%] -top-[122px] object-cover z-0" />
      <img src={heroImgM} alt="Background geometric shapes" className="lg:hidden h-[290px] w-full object-cover" />
      <img src={heroImgD} alt="Background geometric shapes" className="hidden lg:block h-[290px] w-full object-cover" />
      <div className="font-pubSans text-center px-6 pt-8 pb-[92px]">
        <h1 className="text-p-dark-blue text-[40px] leading-tight">Next generation digital banking</h1>
        <p className="text-n-grey-blue text-[15px] leading-relaxed pt-4 pb-8">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button type="button" className="bg-gradient-to-r from-p-lime-green to-p-bright-cyan text-[14px] text-n-light-grey py-2.5 px-8 rounded-full">Request Invite</button>
      </div>
    </div>
  )
}