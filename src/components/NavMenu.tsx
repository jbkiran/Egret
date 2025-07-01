import { navMenuItems } from "@/types/constants";
import { NavMenuProps } from "@/types/interface";

const NavMenu = ({ active, onSelect, open, onClose }: NavMenuProps) => {
// className={`w-[250px] fixed right-0 top-0 h-full lg:h-auto bg-[var(--color-foreground)] rounded-2xl shadow-xl p-4 transform transition-transform duration-300 z-30 ease-in-out  
    return(
        <aside
            id="navbar"
            className={`lg:block w-[250px] fixed lg:relative right-0 top-0 h-full lg:h-auto bg-[var(--color-foreground)] rounded-2xl shadow-lg p-4 transform transition-transform duration-300 z-30 ease-in-out 
            ${open ? 'translate-x-0' : 'translate-x-full'}` }
        >
            <button onClick={onClose} className="block lg:hidden text-right w-full mb-4 text-[var(--color-secondary)]">
                &times; Close
            </button>
            <nav>
                <ul>
                    {navMenuItems.map(({id, label}) => (
                        <li key={id}>
                            <button
                                onClick={() => onSelect(id)}
                                className={`w-full text-left px-4 py-2 rounded-md transition ${active === id ? 'bg-[var(--color-accent-primary)] text-[var(--color-accent-text)]' : 'text-[var(--color-secondary)] hover:bg-[var(--color-accent-secondary)] hover:text-[var(--color-accent-text)]'}`}  
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
