const { useState } = React;

function Search() {
  const [vehicles, setVehicles] = useState();

  const handleSearch = (event) => {
    event.preventDefault();

    // const { value: query } = event.target.query;
    const {
      target: {
        query: { value: query },
      },
    } = event;
    //const query = event.target.query.value;

    // const target = event.target;
    const { target } = event;

    // const form = event.target;
    const { target: form } = event;

    searchVehicles(query, (error, vehicles) => {
      if (error) {
        alert(error.message);

        return;
      }

      setVehicles(vehicles);
    });
  };

  return (
    <main className="">
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="criteria" />
        <button>🔍</button>
      </form>
      {vehicles && !vehicles.length && <p>no results</p>}
      {vehicles && !!vehicles.length && (
        <ul>
          {vehicles.map((vehicle) => {
            return (
              <li>
                <h2>{vehicle.name}</h2>
                <img src={vehicle.thumbnail} />
                <p>{vehicle.price}</p>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
