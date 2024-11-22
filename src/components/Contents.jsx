import React, { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const Contents = () => {
    const [roles, setRoles] = useState(["Web Developer", "Backend Enggineer", "Network Administrator"]);
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            id: 1,
            title: 'Login Page',
            description: 'Create a Login Page with the PHP programming language using the Codeigniter 3 Framework and utilizing PHPMailer as email sender.',
            technologies: 'HTML, CSS, JavaScript, PHP',
            images: [
                '/public/project-1/1-1.png',
                '/public/project-1/1-2.png',
                '/public/project-1/1-3.png',
                '/public/project-1/1-4.png',
            ],
            type: 'Web App',
        },
        {
            id: 2,
            title: 'Development Web IFIK',
            description: 'Create an IFIK Landing Page display.',
            technologies: 'HTML, CSS, JavaScript, Bootstrap',
            images: [
                '/public/project-2/2-1.png',
                '/public/project-2/2-2.png',
                '/public/project-2/2-3.png',
                '/public/project-2/2-4.png',
                '/public/project-2/2-5.png',
                '/public/project-2/2-6.png',
                '/public/project-2/2-7.png',
                '/public/project-2/2-8.png',
            ],
            type: 'Web App',
        },
        {
            id: 3,
            title: 'Multi Step Form IFIK',
            description: 'Create a Multi Step Form with images and questions dynamically on each page created by Foreach using PHP, input is available on the admin dashboard to enter questions and images for each question. After that, the rating of each question will be calculated and how many stars there are.',
            technologies: 'Codeigniter 4, MySQL, Bootstrap',
            images: [
                '/public/project-3/3-1.png',
                '/public/project-3/3-2.png',
                '/public/project-3/3-3.png',
                '/public/project-3/3-4.png',
                '/public/project-3/3-5.png',
                '/public/project-3/3-6.png',
                '/public/project-3/3-7.png',
                '/public/project-3/3-8.png',
                '/public/project-3/3-6.png',
                '/public/project-3/3-9.png',
                '/public/project-3/3-10.png',
            ],
            type: 'Web App',
        },
        {
            id: 4,
            title: 'Project Dump My Brand',
            description: 'Create my own E-Commerce brand and aim to make it easier for customers to order products.',
            technologies: 'Codegniter 3, PostgreSQL, Bootstrap,',
            images: [
                '/public/project-4/4-1.png',
                '/public/project-4/4-4.png',
                '/public/project-4/4-3.png',
                '/public/project-4/4-4.png',
                '/public/project-4/4-5.png',
                '/public/project-4/4-6.png',
                '/public/project-4/4-7.png',
                '/public/project-4/4-8.png',
            ],
            type: 'Web App',
        },
        {
            id: 5,
            title: 'Project Dump Landing Page ONIC Esport',
            description: 'Create a Landing Page with the ONIC Esport theme using HTML and CSS, manually without using bootstrap layout code.',
            technologies: 'HTML, CSS',
            images: [
                '/public/project-5/5-1.png',
                '/public/project-5/5-2.png',
                '/public/project-5/5-3.png',
                '/public/project-5/5-4.png',
            ],
            type: 'Web App',
        },
        {
            id: 6,
            title: 'Project P3KD',
            description: 'Creating a CMS (Content Management System) and this is a project from the DKI Jakarta provincial health service, using the Codegniter 3 framework with the HMVC method.',
            technologies: 'Codegniter 3, PostgreSQL, Bootstrap, JSON',
            images: [
                '/public/project-6/6-1.png',
                '/public/project-6/6-2.png',
                '/public/project-6/6-3.png',
                '/public/project-6/6-4.png',
                '/public/project-6/6-5.png',
            ],
            type: 'Web App',
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles]);


    return (
        <>
            <section
                id="home"
                className="h-screen flex items-center justify-center bg-gray-900 text-white relative"
            >

                <div className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-purple-600 opacity-30 rounded-full blur-3xl top-8 md:top-16 left-8 md:left-20"></div>
                <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-indigo-500 opacity-30 rounded-full blur-2xl bottom-8 md:bottom-16 right-8 md:right-16"></div>
                <div className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-pink-500 opacity-30 rounded-full blur-2xl top-1/4 right-1/4"></div>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8">

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            className="max-w-xs sm:max-w-sm md:max-w-2xl h-auto rounded-lg shadow-lg"
                            src="/public/picture_hero1.png"
                            alt="Hero"
                        />
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
                            <span className="block mb-4 sm:mb-5">I’m a</span>
                            <span
                                className="block text-accent mb-4 sm:mb-5 animate__animated animate__fadeIn"
                                key={roles[currentRoleIndex]}
                            >
                                {roles[currentRoleIndex]}
                            </span>
                            <span className="block mb-4 sm:mb-5">Alif Alfarizi</span>
                        </h1>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300">
                            Stay enthusiastic, don't give up, and keep trying new things.
                        </p>
                        <div className="mt-6 sm:mt-8">
                            <a
                                href="mailto:alifalfariziwrk12@gmail.com"
                                className="inline-block px-5 sm:px-6 py-2 sm:py-3 bg-accent hover:bg-accent-dark text-white font-medium text-base sm:text-lg rounded-lg shadow-md transition-all duration-300 relative overflow-hidden group"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative z-10">Contact Me</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section
                id="skills"
                className="relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden"
            >
                <div className="absolute w-[220px] h-[220px] bg-purple-600 opacity-40 rounded-full blur-3xl top-10 left-10 animate-slow-pulse"></div>
                <div className="absolute w-[320px] h-[320px] bg-blue-500 opacity-30 rounded-full blur-3xl bottom-10 right-10 animate-slow-pulse"></div>
                <div className="absolute w-[160px] h-[160px] bg-pink-400 opacity-50 rounded-full blur-2xl top-1/3 right-1/4 animate-pulse"></div>

                <div className="container mx-auto px-8 sm:px-16 text-center z-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-400 mb-6">
                        <span className="text-white">My</span> Skills
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-5xl mx-auto">
                        I have expertise in modern web development technologies, backend frameworks, and server management.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-10 text-center">
                        {[
                            { name: "HTML", src: "/public/svg/html-1.svg" },
                            { name: "CSS3", src: "/public/svg/css-3.svg" },
                            { name: "JavaScript", src: "/public/svg/javascript-1.svg" },
                            { name: "Python", src: "/public/svg/python-5.svg" },
                            { name: "PHP", src: "/public/svg/php.svg" },
                            { name: "MySQL", src: "/public/svg/mysql-logo-pure.svg" },
                            { name: "Laravel", src: "/public/svg/laravel-2.svg" },
                            { name: "Codeigniter", src: "/public/svg/codeigniter.svg" },
                            { name: "Debian", src: "/public/svg/debian-2.svg" },
                            { name: "Ubuntu", src: "/public/svg/ubuntu-4.svg" },
                            { name: "Mikrotik", src: "/public/svg/mikrotik.svg" },
                            { name: "Cisco", src: "/public/svg/cisco-2.svg" },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center transform transition-all duration-300 hover:scale-110 cursor-pointer"
                            >
                                <div className="w-24 h-24 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full p-6 shadow-lg flex items-center justify-center group-hover:rotate-[20deg] group-hover:shadow-xl">
                                    <img
                                        src={skill.src}
                                        alt={skill.name}
                                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-125"
                                    />
                                </div>
                                <p className="text-lg font-semibold mt-4 text-gray-200 group-hover:text-indigo-400 transition-colors">
                                    {skill.name}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section
                id="experience"
                className=" flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden"
            >
                <div className="absolute w-[200px] h-[200px] bg-purple-500 opacity-40 rounded-full blur-3xl top-16 left-20"></div>
                <div className="absolute w-[300px] h-[300px] bg-blue-600 opacity-40 rounded-full blur-2xl bottom-16 right-16"></div>
                <div className="absolute w-[150px] h-[150px] bg-pink-400 opacity-40 rounded-full blur-2xl top-1/4 right-1/4"></div>

                <div className="container mx-auto px-4 py-12    ">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-400 mb-12">
                        <span className="text-light">My</span> Experience
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {[
                            { id: 1, company: "RC Glow7", year: "Apr 2024 - Aug 2024", position: "Graphic Design", image: "/public/logorc.png" },
                            { id: 2, company: "PT Nexa Media Pratama", year: "May 2024 - Jul 2024", position: "Programmer", image: "/public/logonexa.png" },
                            { id: 3, company: "FIK Telkom University", year: "Okt 2023 - Mar 2024", position: "Web Development", image: "/public/logofik.png" },
                        ].map((item) => (
                            <div key={item.id} className="flex flex-col items-center">
                                <img
                                    src={item.image}
                                    alt={`Photo of ${item.company}`}
                                    className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 transform transition-all duration-300 ease-in-out hover:scale-110"
                                />
                                <p className="mt-4 text-lg font-semibold transition-all duration-300 ease-in-out hover:text-indigo-400">{item.company}</p>
                                <p className="text-sm text-gray-400">{item.year}</p>
                                <p className="text-sm text-indigo-300 italic mt-1">{item.position}</p>
                                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mt-4 mx-auto"></div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { id: 4, company: "Forum Komunikasi Siswa Kota Bandung", year: "Apr 2022 - Nov 2023", position: "Interest and Talent Division", image: "/public/logofokus.png" },
                            { id: 5, company: "Organisasi Siswa Intra Sekolah", year: "Nov 2024 - Nov 2023", position: "Vice President of Student Council", image: "/public/logoosis13.png" },
                        ].map((item) => (
                            <div key={item.id} className="flex flex-col items-center">
                                <img
                                    src={item.image}
                                    alt={`Photo of ${item.company}`}
                                    className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 transform transition-all duration-300 ease-in-out hover:scale-110"
                                />
                                <p className="mt-4 text-lg font-semibold transition-all duration-300 ease-in-out hover:text-indigo-400">{item.company}</p>
                                <p className="text-sm text-gray-400">{item.year}</p>
                                <p className="text-sm text-indigo-300 italic mt-1">{item.position}</p>
                                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mt-4 mx-auto"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="projects"
                className="relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 overflow-hidden"
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-accent mb-12">
                        <span className="text-light">My</span> Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300 group cursor-pointer"
                                onClick={() => openModal(project)}
                            >
                                <div className="relative">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-opacity duration-300"
                                    />
                                    <div className="absolute top-0 right-0 bg-indigo-500 text-white py-1 px-3 rounded-l-lg text-sm transform -translate-x-1/4 translate-y-1/4">
                                        {project.type}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <p className="text-sm text-gray-500 mb-4">
                                    <span className="font-bold">Technologies:</span> {project.technologies}
                                </p>
                                <a className="text-indigo-500 font-medium hover:underline cursor-pointer">
                                    View Project &rarr;
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-3xl w-full mx-4">
                            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                                <h3 className="text-lg sm:text-xl font-bold">{selectedProject.title}</h3>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-200 text-xl"
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="p-4">
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    loop={true}
                                    navigation={true}
                                    modules={[Navigation]}
                                >
                                    {selectedProject.images.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={img}
                                                alt={`${selectedProject.title} - Slide ${index + 1}`}
                                                className="rounded-lg w-full max-h-[60vh] object-contain"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <p className="mt-4 text-gray-400 text-sm sm:text-base">
                                    {selectedProject.description}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    <span className="font-bold">Technologies:</span>{' '}
                                    {selectedProject.technologies}
                                </p>
                            </div>
                            <div className="flex justify-end p-4 border-t border-gray-700">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-400"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>



        </>
    );
};

export default Contents;