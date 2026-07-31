const movies = [
    {
      id: 1,
      title: "Avengers Endgame",
      image: "https://picsum.photos/200/300?1",
      desc: "Marvel movie"
    },
    {
      id: 2,
      title: "Spider Man",
      image: "https://picsum.photos/200/300?2",
      desc: "Peter Parker"
    },
    {
      id: 3,
      title: "Batman",
      image: "https://picsum.photos/200/300?3",
      desc: "DC movie"
    }
  ];
  
  function HomePage() {
    return (
      <div>
        <h1>Movie List</h1>
  
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.image} width="250" alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.desc}</p>
          </div>
        ))}
      </div>
    );
  }
  aaaaaaaaaaaaaaaaaaaaaaaaaaaasdfasdfasdf
  
  export default HomePage;