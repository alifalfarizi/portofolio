const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://www.instagram.com/alfrzialif/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                        <i className="fab fa-instagram text-xl"></i>
                    </a>

                    <a
                        href="https://github.com/alifalfarizi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                        <i className="fab fa-github text-xl"></i>
                    </a>


                    <a
                        href="https://www.linkedin.com/in/alif-alfarizi-8b7420293/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                        <i className="fab fa-linkedin text-xl"></i>
                    </a>
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    My Portfolio. Alif Alfarizi Informatics 2024 International Women University
                </div>
            </div>
        </footer>
    );
};

export default Footer;
