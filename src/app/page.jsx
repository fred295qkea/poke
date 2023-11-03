import Pokecard from "@/components/Pokecard";

export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=500");
  const mons = await res.json();

  console.log(mons.results);

  return (
    <main>
      <h1>Pokemans</h1>

      {mons.results.map((man) => {
        return <Pokecard key={man.url} pokemon={man.url} />;

        // <p key={man.url}>{man.name}</p>;
      })}
    </main>
  );
}
