import Ava from "../assets/Ava.png";
import Slider from "react-slick";
import Blaze from "../assets/Blaze.png";
import Otis from "../assets/Otis.png";

const personas = [
    {
      name: "Ava",
      title: "The Visionary",
      desc: "Your AI Co-Founder. Always on. Always brilliant.",
      img: Ava,
    },
    {
      name: "Blaze",
      title: "The Executioner",
      desc: "Turns deadlines into dust. No fluff, just results.",
      img: Blaze,
    },
    {
      name: "Otis",
      title: "The Strategist",
      desc: "Brains, numbers, and a plan for every pivot.",
      img: Otis,
    },
  ];

export default function LandingPage() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="bg-white-50 min-h-screen w-full text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-40 py-20">
        <div className="max-w-1xl">
          <h1 className="text-5xl md:text-9xl font-medium leading-tight mb-4">
            Meet Ava: <br/> The Visionary
          </h1>
          <p className="text-lg mb-8">
            Your AI Co-Founder. Always on. Always brilliant.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold">
              Get Started
            </button>
            <button className="border border-purple-500 text-purple-600 px-6 py-3 rounded-full text-lg font-semibold">
              Try Demo
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src={Ava} // replace with your avatar
            alt="3D Avatar"
            className="w-150 h-150 object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-40">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          The Tools You Wish You Had in Your Last Startup.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "CEO Persona Selector",
              description:
                "Pick your dream co-founder: Visionary, Operator, Analyst.",
              icon: "👥",
            },
            {
              title: "Workspace",
              description:
                "Auto prioritized — todo lists, meeting notes, investor drafts.",
              icon: "📝",
            },
            {
              title: "Analytics",
              description:
                "Real-time insights on your growth, product, and team.",
              icon: "📈",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 md:px-24 text-center">
        <p className="italic text-lg max-w-3xl mx-auto mb-10">
          "Running a startup without Pocket CEO is like pitching to VCs without
          slides. You can, but like...{" "}
          <span className="font-semibold">why??</span>"
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div>
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt="Blaze"
              className="w-12 h-12 rounded-full mx-auto mb-2"
            />
            <p className="text-sm">
              <span className="font-semibold">Blaze</span> literally bullied me
              into shipping: 10/10.
            </p>
          </div>
          <div>
            <img
              src="https://randomuser.me/api/portraits/men/12.jpg"
              alt="Otis"
              className="w-12 h-12 rounded-full mx-auto mb-2"
            />
            <p className="text-sm">
              <span className="font-semibold">Otis</span> saw I was burning out
              and suggested a day off.
            </p>
          </div>
        </div>
      </section>

      {/* Persona Teaser */}
      <section className="bg-gray-50 py-16 px-6 md:px-40">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Meet Your Dream Team (in AI form)
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Ava",
              role: "Visionary",
              tagline: "Market insight goddess. Always 2 quarters ahead.",
              icon: "🔮",
            },
            {
              name: "Blaze",
              role: "Hustler",
              tagline: "Deadlines fear him. Motivation booster.",
              icon: "🔥",
            },
            {
              name: "Otis",
              role: "Therapist",
              tagline: "Gentle giant of productivity. Loves balance & coffee.",
              icon: "☕",
            },
          ].map((persona, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-3xl mb-4">{persona.icon}</div>
              <h3 className="text-lg font-semibold mb-1">
                {persona.name}{" "}
                <span className="text-sm font-light">{persona.role}</span>
              </h3>
              <p className="text-sm text-gray-600 mb-4">{persona.tagline}</p>
              <button className="text-sm text-purple-600 hover:underline">
                Select Persona
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-400">
        © 2025 Pocket CEO. All rights reserved.
      </footer>
    </div>
  );
}
