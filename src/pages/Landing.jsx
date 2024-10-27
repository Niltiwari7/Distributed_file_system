import React from 'react';
import { FaLock, FaShieldAlt, FaCloudUploadAlt, FaCloudDownloadAlt } from 'react-icons/fa';
import Footer from '../Component/Footer';
import Header from '../Component/Header';

const LandingPage = () => {
    const features = [
        {
            title: 'End-to-End Encryption',
            description: 'Upload your files with secure encryption to keep them safe.',
            icon: <FaLock className="h-16 w-16 mx-auto text-blue-600" />
        },
        {
            title: 'Data Protection',
            description: 'Our platform prioritizes data privacy and security.',
            icon: <FaShieldAlt className="h-16 w-16 mx-auto text-blue-600" />
        },
        {
            title: 'Easy File Uploads',
            description: 'Upload your files from any device, anytime.',
            icon: <FaCloudUploadAlt className="h-16 w-16 mx-auto text-blue-600" />
        },
        {
            title: 'Instant Downloads',
            description: 'Access and download files instantly, wherever you are.',
            icon: <FaCloudDownloadAlt className="h-16 w-16 mx-auto text-blue-600" />
        }
    ];

    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen bg-gray-50">

                <section className="bg-blue-600 text-white py-20">
                    <div className="container mx-auto text-center">
                        <h1 className="text-4xl font-bold">
                            Securely Store, Manage, and Access Your Files Anytime, Anywhere
                        </h1>
                        <p className="mt-4 text-lg">
                            An all-in-one platform to keep your files safe, accessible, and organized.
                        </p>
                        <div className="mt-6">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4">
                                Get Started
                            </button>
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                Login
                            </button>
                        </div>
                    </div>
                </section>


                <section className="py-20">
                    <div id='features'>
                        <div className="features container mx-auto text-center">
                            <h2 className="text-3xl font-bold">Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                                {features.map((feature, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                                        {feature.icon}
                                        <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                                        <p className="mt-2 text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold">How It Works</h2>
                        <div className="mt-10">
                            <ol className="list-decimal list-inside">
                                <li className="mt-2">Sign Up or Log In to the platform</li>
                                <li className="mt-2">Upload Files securely</li>
                                <li className="mt-2">Organize and Manage Files with ease</li>
                                <li className="mt-2">Download Files Anywhere, Anytime</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
