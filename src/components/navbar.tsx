import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarLayoutProps {
    children: React.ReactNode;
}

export const Navbar: React.FC<NavbarLayoutProps> = ({ children }) => {
    const location = useLocation();

    const links = [
        { to: '/', label: 'Task' },
        { to: '/tag', label: 'Tag' },
        { to: '/category', label: 'Category' },
        { to: '/user', label: 'User' },
    ];

    return (
        <div className="min-h-screen flex flex-col">
        <nav className="bg-indigo-600 text-white px-6 py-4 shadow-md">
        <ul className="flex space-x-6 max-w-5xl mx-auto">
            {links.map(({ to, label }) => {
                    const isActive = location.pathname === to;
                    return (
                        <li key={to}>
                        <Link
                            to={to}
                    className={`px-3 py-2 rounded-md font-medium transition-colors
                    ${isActive ? 'bg-indigo-800' : 'hover:bg-indigo-500/70'}`}
                >
                    {label}
                    </Link>
                    </li>
                );
                })}
            </ul>
            </nav>

            <main className="flex-grow max-w-5xl mx-auto px-6 py-8">
        {children}
        </main>
        </div>
);
};
