import ProductCard from "./productCard";
import image_1 from "../assets/cake-1.jpg";
import image_2 from "../assets/cake-2.jpg";
import image_3 from "../assets/cake-3.jpg";
import image_4 from "../assets/cake-4.jpg";
import image_5 from "../assets/cake-5.jpg";
import image_6 from "../assets/cake-6.jpg";
import image_7 from "../assets/cake-7.jpg";
import image_8 from "../assets/cake-8.jpg";
import image_9 from "../assets/cake-9.jpg";
import person_1 from "../assets/person-1.jpg";
import person_2 from "../assets/person-2.jpg";
import map from "../assets/map.png";
const cakes = [
  {
    image: image_1,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: image_2,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: image_3,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: image_4,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: image_5,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: image_6,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: image_7,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: image_8,
    name: "Birthday Cake",
    price: 10,
  },
  {
    image: image_9,
    name: "Birthday Cake",
    price: 10,
  },
];
const Home = () => {
  return (
    <>
      <section className="home w-full min-h-screen py-24 flex flex-col justify-center items-center backdrop-blur-sm">
        <div>
          <h1 className="text-8xl font-bold font-satisfy text-black absolute right-4">
            Cake<span className="text-rose-500">ee</span>es
          </h1>
        </div>
      </section>
      <main className="w-full h-auto min-h-screen bg-white absolute px-16 py-20 my-10">
        <h1 className="text-black text-3xl font-extrabold">
          About Us
          <span className="w-16 h-2 bg-rose-500 relative p-1 bottom-[9.5px] block"></span>
        </h1>
        <p className="px-10 py-10">
          Welcome to Cakeeees, a company that specializes in making
          mouthwatering cakes that make people smile at your festivities. We
          work to make each cake a special treat by paying close attention to
          the details and being dedicated to quality. We offer a wide variety to
          meet all preferences and nutritional demands, from classic flavors to
          unusual choices. Let us sweeten your important occasions. Come and
          discover {"Cakeeees'"} magic.
        </p>

        <div className="my-10">
          <h1 className="text-black text-3xl font-extrabold py-20">
            Our Delicious Cakes
            <span className="w-16 h-2 bg-rose-500 relative p-1 bottom-[9.5px] block"></span>
          </h1>
          <div className="flex flex-row flex-wrap justify-center items-center">
            {cakes.map((cake) => (
              <ProductCard
                image={cake.image}
                name={cake.name}
                price={cake.price}
                key={cake.price}
              />
            ))}
          </div>
        </div>
        <section className="bg-white">
          <h1 className="text-black text-3xl bg-white font-extrabold py-20">
            Testimonials
            <span className="w-16 h-2 bg-rose-500 relative p-1 bottom-[9.5px] block"></span>
          </h1>
          <div className="bg-white">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <span className="text-[100px] opacity-20">{'"'}</span>
                <p className="text-xl">
                  I was blown away by the outstanding taste and quality of the
                  cakes the moment I took my first mouthful. Each piece was
                  baked to perfection and was juicy and tasty. The food was
                  prepared with great attention and fresh ingredients, which was
                  evident. Everything, from the sponge to the icing to the
                  fillings, was excellent.
                </p>
              </div>
              <img
                src={person_1}
                className="w-[400px] relative  left-20"
                alt="Alex Fems"
              />
            </div>
            <div className="flex flex-row justify-between">
              <img
                src={person_2}
                className="w-[400px] relative  right-20"
                alt="Alex Fems"
              />
              <div>
                <span className="text-[100px] opacity-20">{'"'}</span>
                <p className="text-xl">
                  Cakeees has a wide selection of cakes to suit all tastes and
                  preferences. Everyone could find something they liked, from
                  traditional flavors like chocolate and vanilla to more
                  inventive ones. The cakes were exquisitely created with
                  intricate motifs, displaying the {"bakers'"} talent and
                  originality.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="min-h-[30vh] bg-white">
        <h1 className="text-black text-3xl bg-white font-extrabold pt-20">
          Contact Us
          <span className="w-16 h-2 bg-rose-500 relative p-1 bottom-[9.5px] block"></span>
        </h1>
          <div className="flex flex-row bg-white flex-wrap justify-between items-center py-10 px-20 w-full h-full ">
            <div className="space-y-6">
              <h1>
                Email: <span>cakeeees@cake.shop</span>
              </h1>
              <h1>
                Contact Number: <span>011918911019</span>
              </h1>
              <h1>
                Adresss: <address>1122/21, Lotus Street, Colombo</address>
              </h1>
            </div>
            <img src={map} alt="Location in map" className="w-[400px]" />
          </div>
        </section>
        <p className="text-center bg-white">&copy;{new Date().getFullYear()} All rights reserved by Sithika Dangampala</p>
      </main>
    </>
  );
};

export default Home;
