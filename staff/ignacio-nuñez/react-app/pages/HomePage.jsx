function HomePage(props) {
 
        return <main className="min-h-screen bg-rose-600">
            <NavBar 
            onLogOut={props.onLogOut} 
            onSettings={props.onSettings} o
            nHomeLink={props.onHomeLink}/>
            <TasksPanel />
        </main>
}