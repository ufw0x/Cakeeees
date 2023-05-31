import Title from "./Title";
import { persons } from "../constants/constants";

const Testimonials = () => {
  return (
    <section id="testi" className="bg-white z-50 py-20 px-[40px] lg:px-[80px]">
      <Title title="Testimonials" />
      <div className=" text-center lg:text-left">
        {persons.map((person) => (
         <>
          <div className={"flex py-20 justify-between "+ person.pos}>
            <div className="flex flex-col">
              <span className="text-[100px] opacity-20">{'"'}</span>
              <p className=" text-base lg:text-xl px-8 md:px-14">
                {person.quote}
                <br />
                <span className="float-right text-sm">- {person.name}</span>
              </p>
            </div>
            <img
              src={person.image}
              className={"w-[220px] lg:w-[400px] relative mx-auto lg:mx-1 mt-10 lg:mt-0 "+ person.img_pos}
              alt={person.name}
            />
          </div>
         </>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
