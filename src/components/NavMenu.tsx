import { navMenuItems } from "@/types/constants";
import { NavMenuProps } from "@/types/interface";

const NavMenu = ({ active, onSelect, open, onClose }: NavMenuProps) => {

    return(
        <aside
            id="navbar"
            className={`w-[250px] fixed right-0 top-0 h-full lg:h-auto bg-[#2B2B2B] rounded-2xl shadow-xl p-4 transform transition-transform duration-300 z-30 ease-in-out  
            ${open ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:translate-x-0 lg:w-64 lg:block` }
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
                                className={`w-full text-left px-4 py-2 rounded-md transition ${active === id ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'}`}  
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
