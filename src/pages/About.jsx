import { html5, css3, js, php, laravel, react, bootstrap, tailwind } from "../assets/icons/index"

function About() {
    return (
        <section className="w-3/4">
            <div className="my-10 py-10">
                <h1 className="border-b-2 border-gray-300 mb-8 pb-4 font-bold text-4xl">About me</h1>
                <p className="text-lg">Hi, I'm Tahta, a web developer based in Bali, Indonesia. I studied at one of the IT campuses in Bali, ITB STIKOM Bali. The education I took there opened my insight into the world of technology and from studying there I also got a Bachelor's degree in Information Systems. So far I have some experience in developing websites and web applications, both frontend and backend. Until now, I have some skills that I have learned. However, I realize that there is still much to learn, so I am committed to continuing to develop, because I believe there are still many horizons of skills and innovation that need to be explored. I'm looking forward to connecting and sharing more about my journey!</p>
            </div>

            <div className="my-10 py-10">
                <h1 className="border-b-2 border-gray-300 mb-8 pb-4 font-bold text-4xl">Education</h1>
                <h2 className="font-medium text-2xl mb-4">Bachelor of Information System</h2>
                <p className="font-normal text-lg mb-4"><a href="https://www.stikom-bali.ac.id/" className="hover:underline">ITB STIKOM BALI</a> — <span>2016 - 2020</span></p>
            </div>

            <div className="my-10 py-10">
                <h1 className="border-b-2 border-gray-300 mb-8 pb-4 font-bold text-4xl">Experience</h1>
                <div className="mb-16">
                    <h2 className="font-medium text-3xl mb-4">Programmer</h2>
                    <p className="mb-4"><a href="https://appkey.co.id/" className="font-semibold hover:underline" target="_blank">PT. APPKEY</a> — March 29, 2021 - June 29, 2023</p>
                    <ul className="pl-8 list-disc">
                        <li className="text-lg mb-3">Assist in the development of a system with the team for internal and external projects</li>
                        <li className="text-lg mb-3">Collaborate with the design team to create the user interface based on the system analysis that has been done</li>
                        <li className="text-lg mb-3">Responsible for conducting an analysis of the system required by the client.</li>
                    </ul>
                </div>
            </div>

            <div className="my-10 py-10">
                <h1 className="border-b-2 border-gray-300 mb-8 pb-4 font-bold text-4xl">Skills</h1>
                <ul className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 pl-4">
                    <li className="flex gap-2 items-center">
                        <img src={html5} width="24" alt="html-5" />    
                        <p>HTML5</p>                       
                    </li>
                    <li className="flex gap-2 items-center">
                        <img src={css3} width="24" alt="css-3" />
                        <p>CSS3</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img src={js} width="24" alt="css-3" />
                        <p>JavaScript</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img src={php} width="24" alt="css-3" />
                        <p>PHP</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img src={laravel} width="24" alt="css-3" />
                        <p>Laravel</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img src={react} width="24" alt="css-3" />
                        <p>React</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img src={bootstrap} width="24" alt="css-3" />
                        <p>Bootstrap</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img src={tailwind} width="24" alt="css-3" />
                        <p>Tailwind</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About