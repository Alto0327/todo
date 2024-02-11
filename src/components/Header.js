function Header() {
    return (  
        <div>
            <ul className="ContainerNavbar">
                <li>
                    <h1 className="Title-NavBar">ToDo</h1> 
                </li>
                <li>
                    <button className="Button-NavBar">Create New Task</button>  
                </li>
                <li>
                    <button>Change theme</button>
                </li>

            </ul>
            
        </div>
    );

};

export default Header