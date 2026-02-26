"use client";

import React, { useState } from "react";
import Link from "next/link";
import Modal from "@/components/modal";
import { ProjectContactForm } from "@/components/project-consultation-form";

export function ProjectStartCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105"
                >
                    <span className="relative z-10">Start Your Project</span>
                </button>
                <Link href="/portfolio" className="px-8 py-4 border-2 border-purple-500/50 rounded-full font-semibold text-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all">
                    View Our Work
                </Link>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ProjectContactForm />
            </Modal>
        </>
    );
}
