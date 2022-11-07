const { useState, useEffect } = React

function Header(props) {
        log('INFO', 'Header -> render')

        const [toggleButtonText, setToggleButtonText] = useState('menu')

    useEffect(() => {
        log('INFO', 'Header -> effect "componentDidMount"')

        return () => log('INFO', 'Header -> effect "componentWillUnmount"')
    }, [])

    useEffect(() => log('INFO', 'Header -> effect "componentWillReceiveProps"'), [props])


    const handleNavigateToTasks = event => {
        log('INFO', 'Header -> handleNavigateToTasks')

        event.preventDefault()

        setToggleButtonText('menu')

        props.onNavigateToTasks()
    }


    const handleToggleMenu = () => {
        log('INFO', 'Header -> handleToggleMenu')


        setToggleButtonText(toggleButtonText === 'menu' ? 'close' : 'menu') 
    }


    const handleNavigateToSettings = event => {
        log('INFO', 'Header -> handleNavigateToSettings')

        event.preventDefault()

        setToggleButtonText( 'menu' )

        props.onNavigateToSettings()

    }


    const handleLogout = () => {
        log('INFO', 'Header -> handleLogout')
        
        props.onLogout()  
    }
        
    
        return  <header className="flex flex-col shadow-2xl fixed w-full bg-[#635666]">
                    <div className="flex justify-between p-4 ">
                        <a href="" onClick={handleNavigateToTasks}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/100px-Trello-logo-blue.svg.png" className=""/></a>
                        
                        <span className="">{user && user.name}</span>
                        <div className="flex">
                            <button className="material-symbols-outlined" onClick={handleToggleMenu}>{toggleButtonText}</button>
                        </div>
                    </div>
                    {toggleButtonText === 'close'  &&
                    <div className="flex flex-col items-end">
                        <button className="material-symbols-outlined" onClick={handleNavigateToSettings}>settings</button>
                        <button className="material-symbols-outlined" onClick={handleLogout}>logout</button>
                    </div>
                    }
                </header>
    }
