import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <div className="h-screen flex justify-center bg-stone-950 text-white">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
        <h1 className="w-full p-6 bg-zinc-700 font-bold rounded-xl">
          React App Starter
        </h1>
        <section className="w-full p-5 bg-zinc-500 flex rounded-xl">
          <ul className="list-inside list-disc flex-1">
            <span className="font-semibold">Tech Stack:</span>
            <li>Vite</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
          </ul>
        </section>
      <AboutMe name="Aliz 🐝" />
      </div>
    </div>
  );
}
