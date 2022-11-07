const { useState } = React;

function App() {
  const [view, setView] = useState("search");

  return (
    <>
      {/* <MapDemo /> */}
      {view === "search" && <Search />}
      {view === "detail" && <Detail />}
    </>
  );
}
