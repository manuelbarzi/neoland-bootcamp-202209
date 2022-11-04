function MapDemo() {
  const liItems = [1, 2, 3, 4, 5];

  return (
    <>
      <ul>
        {liItems.map((liItem) => (
          <p className="red">{liItem}</p>
        ))}
      </ul>
    </>
  );
}
