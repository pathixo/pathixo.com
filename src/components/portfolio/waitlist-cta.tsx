"use client";

import React, { useState } from "react";
import Modal from "@/components/modal";

export function WaitlistCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
                Join the Waitlist
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-semibold mb-4 text-center">Join the Waitlist</h2>
                <p className="text-gray-400 text-center mb-6">
                    Be the first to know when Mallsurf launches.
                </p>
                <form
                    action="https://formspree.io/f/movykned"
                    method="POST"
                    onSubmit={(e) => {
                        alert("Thank you for joining the waitlist! 🚀")
                        setIsModalOpen(false)
                    }}
                    className="space-y-4"
                >
                    <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-purple-500 outline-none transition"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:border-purple-500 outline-none transition"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
                    >
                        Join Now
                    </button>
                </form>
            </Modal>
        </>
    );
}
