import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <div className="h-screen flex flex-col justify-start p-6 bg-amber-50">
      <h1 className="text-stone-700 font-bold">React App Project Starter</h1>
      <section className="w-full p-5 text-stone-600 bg-red-100 flex">
        <ul className="list-inside list-disc flex-1">
          <span className="font-semibold">Tech Stack:</span>
          <li>Vite</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>Tailwind</li>
        </ul>
      </section>
      <AboutMe />
    </div>
  );
}
