"use client";

import { motion } from "motion/react";

export function ScrollIndicator() {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
                <motion.div
                    className="w-1 h-3 bg-purple-500 rounded-full"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
}
