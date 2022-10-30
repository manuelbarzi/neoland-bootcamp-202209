function HomePage(props) {
    log('INFO', 'Home', 'pages/HomePage.jsx')

    const handleClick = event => {
        debugger
        event.preventDefault()

        const onBattleClick = props.onBattleClick

        onBattleClick()
    }

    return <main>
            <nav>
                <section>
                    <h4>img</h4>
                    <h4>{nickName}</h4>
                </section>
                <section>
                    <button onClick={handleClick}>Battle</button>
                </section>
                <section>
                    <h4>SKINS</h4>
                    <h4>Burger</h4>
                </section>
            </nav>
        </main>
}