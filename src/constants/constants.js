import cake_1 from "../assets/cakes/1.jpg";
import cake_2 from "../assets/cakes/2.jpg";
import cake_3 from "../assets/cakes/3.jpg";
import cake_4 from "../assets/cakes/4.jpg";
import cake_5 from "../assets/cakes/5.jpg";
import cake_6 from "../assets/cakes/6.jpg";
import cake_7 from "../assets/cakes/7.jpg";
import cake_8 from "../assets/cakes/8.jpg";
import cake_9 from "../assets/cakes/9.jpg";
import alex from "../assets/people/alex.jpg";
import ricky from "../assets/people/ricky.jpg";

const cakes = [
  {
    image: cake_1,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: cake_2,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: cake_3,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: cake_4,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: cake_5,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: cake_6,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: cake_7,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: cake_8,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: cake_9,
    name: "Birthday Cake",
    price: 10,
  },
];

const persons = [
  {
    name: "Alex Femin",
    image: alex,
    pos:"lg:flex-row flex-col" ,
    img_pos:'lg:left-28',
    quote: `I was blown away by the outstanding taste and quality of the cakes the moment I took my first mouthful. Each piece was baked to perfection and was juicy and tasty. The food was prepared with great attention and fresh ingredients, which was evident.Everything, from the sponge to the icing to the fillings, was excellent.`,
  },
  {
    name: "Ricky Dovfff",
    image: ricky,
    pos: "lg:flex-row-reverse flex-col-reverse",
    img_pos:'lg:right-28',
    quote: `Cakeees has a wide selection of cakes to suit all tastes and preferences. Everyone could find something they liked, from traditional flavors like chocolate and vanilla to more inventive ones. The cakes were exquisitely created with intricate motifs, displaying the bakers' talent and originality.`,
  },
];

export {cakes, persons}
