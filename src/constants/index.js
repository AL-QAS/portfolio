import gpt3 from "../assets/gpt3-qas.png"
import bank from "../assets/bank-qas.png"
import restaurant from "../assets/restaurant-qas.png"
export const navLinks = [
    {
      id: "home",
      title: "home",
    },
    {
      id: "works",
      title: "works",
    },
    {
      id: "about-me",
      title: "about-me",
    },
    {
      id: "contacts",
      title: "contacts",
    },
  ];

  export const projects =[
    {
     img: gpt3,
      name: "GPT3",
      link: 'Live',
      live:'https://gpt3-qas.netlify.app/',
      id:1,
    },

    {
      img: bank,
      name: "HooBank",
      link: 'Live',
      live:'https://bank-qas.netlify.app/',
      id:2,
    },

    {
      img: restaurant,
      name: "Gerich-Restaurant",
      link: 'Live',
     live:"https://restaurant-qas.netlify.app/",
      id:3,
    },
  ]

  export const skills = [
    {
      name1: 'HTML',
      name2: 'CSS',
      id:1
    },
    {
      name1: 'JAVASCRIPT',
      name2: 'REACT',
      id:2
    },
    {
      name1: 'TYPESCRIPT',
      name2:'TAILWIND',
      id:3
    },
   
  ]
