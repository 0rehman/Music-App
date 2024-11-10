import imgOne from "@/assets/images/img1.jpg";
import imgTwo from "@/assets/images/img2.jpg";
import imgThree from "@/assets/images/img3.jpg";
import imgFour from "@/assets/images/img4.jpg";
import imgFive from "@/assets/images/img5.jpg";

export const slideListOne = [
  {
    id: 1,
    title: "Echoes of the Past",
    desc: "A haunting melody that takes you on a journey through memories and forgotten moments.",
    image: imgOne,
  },
  {
    id: 2,
    title: "Rhythm of the Night",
    desc: "A lively, upbeat track that captures the energy and excitement of a night out on the town.",
    image: imgTwo,
  },
  {
    id: 3,
    title: "Serenity's Lullaby",
    desc: "A peaceful, soothing song that transports listeners to a world of calm and relaxation.",
    image: imgThree,
  },
  {
    id: 4,
    title: "Whispers in the Wind",
    desc: "An ethereal track that blends soft vocals with the sounds of nature to create an immersive experience.",
    image: imgFour,
  },
  {
    id: 5,
    title: "Midnight Reverie",
    desc: "A dreamy, atmospheric song perfect for late-night contemplation and introspection.",
    image: imgFive,
  },
];

export const settings = {
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
