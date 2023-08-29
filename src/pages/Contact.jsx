import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import ContactForm from "../components/ContactForm"

function Contact() {
    return (
        <section>
            <div className="my-10 py-10">
                <h1 className="text-center text-2xl mb-3">Want to <span className="font-bold">collaborate</span> or <span className="font-bold">ask me something</span>?</h1>
                <p className="text-center text-xl mb-3">you can contact me via</p>
                <address className="flex flex-col gap-3 justify-center mb-5">
                    <div className="mx-auto">
                        <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:tahtaadidharma@gmail.com" className="hover:underline ml-2">tahtaadidharma@gmail.com</a>
                    </div>
                    <div className="mx-auto">
                        <FontAwesomeIcon icon={faPhone} /><a href="tel:+6281353980637" className="hover:underline ml-2">(+62) 81353980637</a>
                    </div>
                </address>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact