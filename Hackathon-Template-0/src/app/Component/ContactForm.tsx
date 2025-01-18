import React from 'react';

const ContactForm = () => {
    return (
        <div className="bg-white p-8 mx-8">
            <h2 className="text-center text-2xl font-bold mb-4">Get In Touch With Us</h2>
            <p className="pb-8 text-center text-gray-500 mb-8">
            For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
            <div className="flex flex-col md:flex-row">
                
                <div className="md:w-1/2 md:ml-8">
                    <h3 className="text-lg font-bold mb-2">Address</h3>
                    <p>236 5th SE Avenue, New York, NY 10000, United States</p>
                    <h3 className="text-lg font-bold mt-4 mb-2">Phone</h3>
                    <p>Mobile: +(84) 546-6789</p>
                    <p>Hotline: +(84) 456-6789</p>
                    <h3 className="text-lg font-bold mt-4 mb-2">Working Time</h3>
                    <p>Monday-Friday: 9:00 - 22:00</p>
                    <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
                <div className="md:w-1/2">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Abc"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Abc@def.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="This is an optional field"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Hi! I'd like to ask about..."
                            ></textarea>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;