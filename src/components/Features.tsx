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
    <div className="flex flex-col items-center text-center font-pubSans bg-n-light-grey-blue px-4 pb-8">
      <h2 className="text-p-dark-blue text-3xl p-4 pt-16">Why choose Easybank?</h2>
      <p className="text-n-grey-blue text-[15px] pb-12">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      {features.map(card => (
        <div key={card.id} className="my-5">
          <img src={card.image} alt={card.altText} className="mx-auto" />
          <h3 className="text-p-dark-blue text-xl my-5">{card.title}</h3>
          <p className="text-n-grey-blue text-[15px]">{card.description}</p>
        </div>
      ))}
    </div>
  )
}