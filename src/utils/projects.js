import snescapadesImg from "../assets/test-drops.jpg";
import test1 from "../assets/test-keyboard.jpg";
import test2 from "../assets/test-ocean.jpg";
import test3 from "../assets/test-trees.jpg";

const projects = [
  {
    title: "SNEScapades",
    description:
      "A Wordpress site I build from scratch for my podcast and perhaps other projects down the line. Theme and plugins are all custom made by me. I prefer to code my custom posts myself rather than rely on pre-built plug-ins.",
    img: snescapadesImg,
    alt: "Screenshot of main page of SNEScapades.com",
    buttons: [
      {
        type: "button",
        text: "Check Out the Website!",
        link: "https://snescapades.show/",
      },
    ],
  },
  {
    title: "Goals Calendar",
    description:
      "A bunch of small projects to play around with. All hosted right here on this site.",
    img: test1,
    alt: "",
    buttons: [
      {
        type: "Link",
        text: "View the demo index.",
        link: "/demo",
      },
    ],
  },
  {
    title: "Retro Shop",
    description:
      "This is just a placeholder for now. There will actually be something here later. Promise!",
    img: test2,
    alt: "Placeholder image of a pretty summer painting.",
    buttons: [
      {
        type: "button",
        text: "See on Github",
        link: "/",
      },
      {
        type: "button",
        text: "View Demo on YouTube",
        link: "/",
      },
    ],
  },
  {
    title: "Community Cork",
    description:
      "This is just a placeholder for now. There will actually be something here later. Promise!",
    img: test3,
    alt: "Placeholder image of a pretty summer painting.",
    buttons: [
      {
        type: "button",
        text: "See on Github",
        link: "/",
      },
      {
        type: "button",
        text: "View Demo on YouTube",
        link: "/",
      },
    ],
  },
];

export default projects;
