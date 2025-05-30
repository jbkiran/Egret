import { navMenuItems } from "@/types/constants";
import { NavMenuProps } from "@/types/interface";

const NavMenu = ({ active, onSelect, open, onClose }: NavMenuProps) => {

    return(
        // <aside id="navbar" className="lg:block w-[250px] fixed lg:relative right-0 top-0 h-full lg:h-auto bg-[#2B2B2B] rounded-2xl shadow-lg p-4 transform translate-x-full lg:translate-x-0 transition-transform duration-300 z-30">
        <aside
            id="navbar"
            className={`fixed top-0 right-0 h-full w-64 bg-[#2B2B2B] p-4 shadow-lg transform transition-transform duration-300 z-30
            ${open ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:translate-x-0 lg:w-64 lg:block`}
        >
            <button onClick={onClose} className="block lg:hidden text-right w-full mb-4 text-gray-400">
                &times; Close
            </button>
            <nav>
                <ul>
                    {navMenuItems.map(({id, label}) => (
                        <li key={id}>
                            <button
                                onClick={() => onSelect(id)}
                                className={`w-full text-left p-2 rounded-md nav-btn ${active === id ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'}`}
                            >
                                {label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default NavMenu;
