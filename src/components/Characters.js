export default function Characters(props) {
  const { characters , setCharacters } = props;

  const resetCharacters = () => {
    setCharacters(null);
  }


  return (
    <div className="characters">
      <h1>Personajes</h1>

      <span className="back-home" onClick={resetCharacters}> Volver a la home </span>
      <div className="container-character">
        {characters.map((character, index) => (
          <div className="character-ccontainer" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>

            <div>
              <h3>{character.name}</h3>

              <h6>
                {character.status === "Alive" ? (
                  <>
                  <spam className="Alive"/>
                  Alive
                  </>
                ):(
                  <>
                  <spam className="Dead"/>
                  Dead
                  </>
                )}
              </h6>
              <p>

                <span className='text-gray'>Episodios:</span>
                <span>{character.episode.length}</span>


              </p>
              <p>

                <span className='text-gray'>Especies:</span>
                <span>{character.species}</span>


              </p>
            </div>
          </div>
        ))}
      </div>
      <span className='back-home' onClick={resetCharacters}>volver a la home</span>
    </div>
  );
}
