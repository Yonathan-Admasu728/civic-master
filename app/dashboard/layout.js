"use client";
import React from 'react';

export default function LayoutPrivate({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4">
                {children}
            </div>
        </div>
    );
}
