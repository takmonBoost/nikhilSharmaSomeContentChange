import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ZodiacForm = () => {
    const [formData, setFormData] = useState({
        dateOfBirth: '',
        timeOfBirth: '',
        placeOfBirth: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const calculateZodiacSign = (date) => {
        const month = parseInt(date.split('-')[1], 10);
        const day = parseInt(date.split('-')[2], 10);

        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
        if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
        if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
        if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
        if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
        if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
        if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
        if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
        if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
        if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
        if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';

        return 'Invalid Date';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const zodiac = calculateZodiacSign(formData.dateOfBirth);
        if (zodiac === 'Invalid Date') {
            toast.error("Please enter a valid date.");
        } else {
            showToast(zodiac);
        }
    };

    const showToast = (zodiacSign) => {
        toast.info(`Your Zodiac Sign is: ${zodiacSign}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100">
            <div className="w-full bg-white rounded-xl shadow-lg p-8 transform transition-all ">
                <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-4">Find Your Zodiac Sign</h1>
                <p className="text-center text-gray-600 mb-8">
                    Enter your birth details below to discover your zodiac sign!
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
                    {/* Form Input Sections */}
                    <div className="flex flex-col md:flex-row gap-6 justify-between">
                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-gray-700 font-semibold mb-2">Date Of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                required
                            />
                        </div>

                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-gray-700 font-semibold mb-2">Time Of Birth</label>
                            <input
                                type="time"
                                name="timeOfBirth"
                                value={formData.timeOfBirth}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                required
                            />
                        </div>

                        <div className="flex flex-col w-full md:w-1/3">
                            <label className="text-gray-700 font-semibold mb-2">Place Of Birth</label>
                            <input
                                type="text"
                                name="placeOfBirth"
                                value={formData.placeOfBirth}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition transform hover:-translate-y-1"
                    >
                        FIND ZODIAC
                    </button>
                </form>
            </div>

            {/* React Toastify container for showing toast notifications */}
            <ToastContainer />
        </div>
    );
};

export default ZodiacForm;
