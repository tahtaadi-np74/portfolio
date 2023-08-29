import { NavLink } from "react-router-dom"
import image from "../assets/images/avatar.jpg"

function Home() {
    return (
        <section>
            <div className="my-10 py-10">
                <img src={image} className="mx-auto mt-5 rounded-full md:w-1/5 w-2/5" alt="hero" />
                <div className="mx-auto p-5 text-center w-3/4">
                    <h1 className="font-bold text-4xl mb-3">Hi, I'm Tahta</h1>
                    <p className="font-semibold text-xl mb-6">Nice to meet you!</p>
                    <p className="text-lg mb-5">I'm a web developer based on Bali, Indonesia. Able to work both on frontend or backend. Currently looking for job opportunities. Want to collaborate or ask me something? Click <NavLink to="/contact" className="text-cyan-800 dark:text-cyan-400 hover:underline">here</NavLink></p>
                </div>
            </div>
        </section>
    )
}

export default Home