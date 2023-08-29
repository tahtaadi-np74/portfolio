import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer className="w-full">
            <div className="mx-auto w-2/3">
                <p className="text-center">Made by Tahta</p>
                <nav className="flex flex-row gap-5 justify-center mx-auto p-5">
                    <a href="https://www.linkedin.com/in/tahta-ap47" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" /><span className="ml-1">LinkedIn</span>
                    </a>
                    <a href="https://github.com/tahtaadi-np74" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <FontAwesomeIcon icon={faGithub} size="lg" /><span className="ml-1">Github</span>
                    </a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer