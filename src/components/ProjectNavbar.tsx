import DarkModeButton from "../hooks/DarkModeButton"
import { Link } from 'react-router-dom';
import { Navbar } from "flowbite-react"

export const ProjectNavbar = () => {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className="sticky top-0 shadow-sm bg-white dark:bg-gray-800 z-50">
            <Navbar fluid={true} rounded={true} className="container bg-white dark:bg-gray-800 mx-auto">
                <Link
                    className="text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white"
                    to={"/"}
                    onClick={topFunction}
                >
                    <Navbar.Brand>
                        <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/my/Tasks.png" className="mr-3 h-6 sm:h-9 rounded-lg" alt="Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold">
                            toDos
                        </span>
                    </Navbar.Brand>
                </Link>
                <div className="self-center">
                    <DarkModeButton />
                </div>
            </Navbar>
        </div>
    )
}