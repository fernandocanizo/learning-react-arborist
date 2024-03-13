import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-amber-500">
        Hello world!
      </h1>
      <p className="text-emerald-400 decoration-sky-500">En un lugar junto a la montaña</p>
      <button className="bg-red-600">The Button</button>
    </div>
  );
}
