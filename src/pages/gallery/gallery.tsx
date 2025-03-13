import { useGetGamesQuery } from 'entities/games';

export const GalleryPage = () => {
  const { data, isLoading, error } = useGetGamesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {data?.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <img src={game.image} alt={game.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};
