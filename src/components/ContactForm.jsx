import useContactFormLogic from "../hooks/ContactFormLogic"

function ContactForm() {
    const { formData, handleChange, handleSubmit } = useContactFormLogic()

    return (
        <div className="bg-white rounded shadow p-10 mt-7 mx-auto lg:w-2/4 md:w-3/4 w-full">
            <h2 className="font-medium dark:text-black text-xl text-center mb-7">Feel free to ask me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="block text-black text-md mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="block border border-slate-500 rounded indent-3 h-10 w-full" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="block text-black text-md mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="block border border-slate-500 rounded indent-3 h-10 w-full" />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="block text-black text-md mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="block border border-slate-500 rounded p-3 w-full" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className="block bg-slate-800 text-white rounded ml-auto px-8 py-2">Send</button>
            </form>
        </div>
    )
}

export default ContactForm