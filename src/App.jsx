import NavBar from "./components/NavBar";
import Avatar from "./img/avatar.png";
import Card from "./components/Card";
import codeImg from "./img/code.png";
import designImg from "./img/design.png";
import mobileImg from "./img/consulting.png";

const services = [
  {
    image: codeImg,
    title: "Brand Design",
    icon: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    tools: ["Figma", "Adobe XD", "Adobe Illustrator ", "Adobe Photoshop"],
  },
  {
    image: designImg,
    title: "Web Development",
    icon: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    tools: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    image: mobileImg,
    title: "Mobile App Development",
    icon: "",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    tools: ["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop"],
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <section className="flex flex-col items-center p-8 pt-20">
          <h1 className="text-green-600 text-5xl mb-2">Dimitri Marco</h1>
          <p className="text-black font-medium text-2xl mb-2">
            Developer and designer.
          </p>
          <p className="text-black font-custom text-lg mb-4 max-w-lg text-center">
            Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!
          </p>

          <div className="flex items-center gap-12">
            <a href="/">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
              </svg>
            </a>
            <a href="/">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="45"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
              </svg>
            </a>
            <a href="/">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="45"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
              </svg>
            </a>
          </div>

          <div className="rounded-full w-full mt-10 aspect-square bg-gradient-to-b from-pink-400 to-white overflow-hidden max-w-sm ">
            <img src={Avatar} alt="" className="object-cover w-full h-full" />
          </div>
        </section>

        <section className="max-w-7xl px-8 mx-auto">
          <h2 className="text-3xl mb-2 ">Services I offer</h2>
          <p className="text-base leading-8 mb-2">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for{" "}
            <span className="text-pink-500">agencies</span> consulted for{" "}
            <span className="text-pink-500">startups</span> and collaborated
            with talanted people to create digital products for both business
            and consumer use.
          </p>
          <p className="text-base leading-8 mb-2">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>

          <div className="flex flex-col md:flex-row gap-16 ">
            {services.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
