function Card({ name, description, url, owner, tech}) {
    return (
        <div className="bg-white rounded shadow p-3">
            <h1 className="font-bold text-black text-2xl mb-4">{name}</h1>
            <p className="font-normal italic text-black mb-4">{description}</p>
            <p className="text-black mb-4">URL : <a href={url} className="text-blue-500 hover:underline">{url}</a></p>
            <ul className="flex gap-3 mb-5">
                {tech.map((tech, index) => (
                    <li key={index} className="bg-slate-600 rounded px-2 py-1 text-white">{tech}</li>
                ))}
            </ul>
            <p className="bg-dark opacity-70 rounded text-white text-center p-2">{owner}</p>
        </div>
    )
}

export default Card