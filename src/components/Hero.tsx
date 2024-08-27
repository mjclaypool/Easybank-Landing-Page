import heroImgD from "../../images/bg-intro-desktop.svg";
import heroImgM from "../../images/bg-intro-mobile.svg";
import mockups from "../../images/image-mockups.png"

export default function Hero() {
  return (
    <div className="relative flex flex-col xl:flex-row-reverse xl:justify-between xl:max-h-[646px]">
      <div>
        <img src={mockups} alt="Hero image of Easybank mock-ups" className="xl:hidden h-[420px] absolute left-[50%] translate-x-[-50%] -top-[122px] object-cover z-0" />
        <img src={heroImgM} alt="Background geometric shapes" className="xl:hidden h-[290px] w-full object-cover" />
        <img src={mockups} alt="Hero image of Easybank mock-ups" className="hidden xl:block h-[960px] absolute -right-[130px] -top-[126px] object-cover z-10" />
        <img src={heroImgD} alt="Background geometric shapes" className="hidden xl:block absolute -top-[240px] -right-[360px] h-[960px] object-cover z-0" />
      </div>
      <div className="flex flex-col items-center xl:items-start font-pubSans text-center xl:text-start px-6 pt-8 pb-[92px] xl:pl-40 xl:pt-40 xl:pb-[172px]">
        <h1 className="text-p-dark-blue text-[40px] xl:text-[52px] leading-tight max-w-[450px]">Next generation digital banking</h1>
        <p className="text-n-grey-blue text-[15px] lg:text-[18px] leading-relaxed pt-4 pb-8 max-w-[450px] xl:pt-5 xl:pb-9">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button type="button" className="bg-gradient-to-r from-p-lime-green to-p-bright-cyan text-[14px] text-n-light-grey py-2.5 px-8 rounded-full hover:opacity-70">Request Invite</button>
      </div>
    </div>
  )
}