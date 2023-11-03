import Image from "next/image";

export default async function Pokecard(props) {
  const res = await fetch(props.pokemon);

  const data = await res.json();

  console.log("Pokemon data", data);

  return (
    <div>
      <p>{data.name}</p>
      <Image src={data.sprites.front_default} width={200} height={200} alt={data.name} />

      {data.types.map((type) => {
        return <p key={data.id}>{type.type.name}</p>;
      })}
    </div>
  );
}
