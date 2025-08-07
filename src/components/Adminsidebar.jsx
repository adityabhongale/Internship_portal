import React from 'react';

const AdminSidebar = ({ activeSection, setActiveSection }) => {
    return (
        <aside className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between hidden md:flex">
            <div>
                <div className="text-2xl font-extrabold text-primary mb-8">SargSoftech</div>
                <nav className="space-y-2">
                    <a
                        href="#"
                        onClick={() => setActiveSection('dashboard')}
                        className={`nav-link flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-indigo-100 ${activeSection === 'dashboard' ? 'bg-indigo-50 text-primary font-semibold' : 'text-gray-700'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span>Dashboard</span>
                    </a>

                    <a
                        href="#"
                        onClick={() => setActiveSection('tasks')}
                        className={`nav-link flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-indigo-100 ${activeSection === 'tasks' ? 'bg-indigo-50 text-primary font-semibold' : 'text-gray-700'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16h.01" />
                        </svg>
                        <span>Tasks</span>
                    </a>

                    <a
                        href="#"
                        onClick={() => setActiveSection('users')}
                        className={`nav-link flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-indigo-100 ${activeSection === 'users' ? 'bg-indigo-50 text-primary font-semibold' : 'text-gray-700'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>Users</span>
                    </a>

                    <a
                        href="#"
                        onClick={() => setActiveSection('settings')}
                        className={`nav-link flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 hover:bg-indigo-100 ${activeSection === 'settings' ? 'bg-indigo-50 text-primary font-semibold' : 'text-gray-700'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.82 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.82 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.82-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.82-3.31 2.37-2.37.996.608 2.22 1.34 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Settings</span>
                    </a>
                </nav>
            </div>

            <div className="text-sm text-gray-500">&copy; 2024 SargSoftech.</div>
        </aside>
    );
};

export default AdminSidebar;
