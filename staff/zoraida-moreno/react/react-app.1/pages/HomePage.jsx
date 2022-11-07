function HomePage() {
    return (
      <main className="h-full w-full">
        <header className="flex flex-col">
          <div className="flex justify-between">
            <a href="">
              <img src="https://fakeimg.pl/50x25/?text=hola%20mundo&amp;font=lobster" />
            </a>
            <span>Pepito Grillo</span>
            <button className="material-symbols-outlined">add</button>
            <button className="material-symbols-outlined">menu</button>
          </div>
        </header>
        <section className="flex flex-col items-center">
          <h2>Tasks</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <section className="flex flex-col gap-2 border-2 p-2">
              TODO
              <article className="border-2 p-1">
                <p contentEditable="true">buy milk</p>
                <button className="material-symbols-outlined">delete</button>
              </article>
            </section>
            <section className="border-2 p-2">
              DOING
              <article className="border-2 p-1">
                <p contentEditable="true">buy eggs</p>
                <button className="material-symbols-outlined">delete</button>
              </article>
            </section>
            <section className="border-2 p-2">
              DONE
              <article className="border-2 p-1">
                <p contentEditable="true">buy tomatoes</p>
                <button className="material-symbols-outlined">delete</button>
              </article>
            </section>
          </div>
        </section>
      </main>
    );
}