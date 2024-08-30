import onlineIcon from "../../images/icon-online.svg";
import budgetIcon from "../../images/icon-budgeting.svg";
import onboardIcon from "../../images/icon-onboarding.svg";
import apiIcon from "../../images/icon-api.svg";

export default function Features() {
  let features: {id: string, image: string, altText: string, title: string, description: string}[] = [
    {
      "id": "1",
      "image": onlineIcon,
      "altText": "Online icon",
      "title": "Online Banking",
      "description": "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
      "id": "2",
      "image": budgetIcon,
      "altText": "Budgeting icon",
      "title": "Simple Budgeting",
      "description": "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
    },
    {
      "id": "3",
      "image": onboardIcon,
      "altText": "Onboarding icon",
      "title": "Fast Onboarding",
      "description": "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
      "id": "4",
      "image": apiIcon,
      "altText": "API icon",
      "title": "Open API",
      "description": "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    },
  ]

  return (
    <div className="flex justify-center bg-n-light-grey-blue w-full">
      <div className="flex flex-col items-center text-center xl:items-start xl:text-start font-pubSans px-4 pb-8 xl:px-40 xl:pt-[44px] xl:pb-[86px] max-w-[1920px]">
        <h2 className="text-p-dark-blue text-3xl xl:text-[40px] px-4 pt-16 pb-4 xl:px-0 xl:pb-8 max-w-[400px] xl:max-w-none">Why choose Easybank?</h2>
        <p className="text-n-grey-blue text-[15px] xl:text-[18px] pb-12 xl:pb-14 max-w-[400px] xl:max-w-[700px]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        <div className="flex flex-col xl:flex-row xl:gap-4 max-w-[400px] xl:max-w-none">
          {features.map(card => (
            <div key={card.id} className="my-5">
              <img src={card.image} alt={card.altText} className="mx-auto xl:mx-0" />
              <h3 className="text-p-dark-blue text-xl xl:text-2xl my-5 xl:my-8">{card.title}</h3>
              <p className="text-n-grey-blue text-[15px] xl:text-[16px]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}