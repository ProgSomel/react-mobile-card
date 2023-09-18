import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {

    const routes = [{id: 1, name: 'Home', path: '/'}, {id: 2, name: 'About', path: '/about'}, {id: 3, name: 'Services', path: '/services'}, {id: 4, name: 'Contact', path: '/contact'}, {id: 5, name: 'NotFound', path: '*'}];

    const [menuBar, setMenuBar] = useState(false);

    

    return (
        <nav>
        <div className="lg:hidden p-5" onClick={() => setMenuBar(!menuBar) }>

           {
            menuBar === true ?
            <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
           }
        </div>
            <ul className={
                `lg:flex gap-8 justify-evenly p-5 absolute lg:static
                ${menuBar?'top-6':'-top-60'}
                bg-yellow-200 px-6 
                `
            }>
                {
                    routes.map((route) => <li className="list-none hover:bg-yellow-700 " key={route.id}>{route.name}</li>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;