import currencyImg from "../../images/image-currency.jpg";
import restaurantImg from "../../images/image-restaurant.jpg";
import planeImg from "../../images/image-plane.jpg";
import confettiImg from "../../images/image-confetti.jpg";

export default function Articles() {
  let stories: {id: string, image: string, altText: string, attr: string, title: string, description: string}[] = [
    {
      "id": "A",
      "image": currencyImg,
      "altText": "Image of global currencies",
      "attr": "By Claire Robinson",
      "title": "Receive mondy in any currency with no fees",
      "description": "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
    },
    {
      "id": "B",
      "image": restaurantImg,
      "altText": "Image of a restaurant table setting",
      "attr": "By Wilson Hutton",
      "title": "Treat yourself without worrying about money",
      "description": "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
    },
    {
      "id": "C",
      "image": planeImg,
      "altText": "Image of an airplane wing",
      "attr": "By Wilson Hutton",
      "title": "Take your Easybank card wherever you go",
      "description": "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
    },
    {
      "id": "D",
      "image": confettiImg,
      "altText": "Image of confetti",
      "attr": "By Claire Robinson",
      "title": "Our invite-only Beta accounts are now live!",
      "description": "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
    },
  ]

  return (
    <div className="flex flex-col items-center bg-n-light-grey font-pubSans px-4 py-[86px]">
      <h2 className="text-p-dark-blue text-3xl px-4 pb-6">Latest Articles</h2>
      {stories.map(story => (
        <article key={story.id} className="bg-n-white rounded-md my-3">
          <img src={story.image} alt={story.altText} className="h-[200px] w-full object-cover rounded-t-md" />
          <div className="px-8 pt-7 pb-9">
            <p className="text-[10px] text-n-grey-blue">{story.attr}</p>
            <h3 className="text-p-dark-blue leading-tight my-2">{story.title}</h3>
            <p className="text-[13px] text-n-grey-blue">{story.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}