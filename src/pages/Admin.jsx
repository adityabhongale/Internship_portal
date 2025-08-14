
import React, { useState } from 'react';
import whiteLogo from '../assets/white-logo.png';

// Animated floating elements for background
const FloatingElement = ({ delay = 0, size = "w-64 h-64", position = "top-1/4 left-1/4" }) => (
    <div 
        className={`absolute ${position} ${size} rounded-full opacity-10 animate-pulse`}
        style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            animationDelay: `${delay}s`,
            animationDuration: '4s'
        }}
    />
);

const Admin = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const [applications, setApplications] = useState([
        {
            id: 'APP-001',
            name: 'Priya Sharma',
            email: 'priya.sharma@email.com',
            phone: '9876543210',
            university: 'IIT Bombay',
            domain: 'Software Development',
            status: 'Accepted',
            date: '2025-08-01',
            resume: 'priya_resume.pdf',
            message: 'Looking forward to contributing!'
        },
        {
            id: 'APP-002',
            name: 'Rahul Verma',
            email: 'rahul.verma@email.com',
            phone: '9123456780',
            university: 'BITS Pilani',
            domain: 'UX/UI Design',
            status: 'In Review',
            date: '2025-08-03',
            resume: 'rahul_resume.pdf',
            message: 'Excited to join the design team.'
        },
        {
            id: 'APP-003',
            name: 'Aisha Khan',
            email: 'aisha.khan@email.com',
            phone: '9988776655',
            university: 'NIT Trichy',
            domain: 'Software Development',
            status: 'Rejected',
            date: '2025-07-29',
            resume: 'aisha_resume.pdf',
            message: 'Hope to get another chance!'
        }
    ]);
    const [tasks, setTasks] = useState([
        {
            id: 'task-1',
            title: 'Setup project repo',
            assignee: 'Priya Sharma',
            dueDate: '2025-08-10',
            status: 'Completed',
        },
        {
            id: 'task-2',
            title: 'Create wireframes',
            assignee: 'Rahul Verma',
            dueDate: '2025-08-12',
            status: 'In Progress',
        },
        {
            id: 'task-3',
            title: 'API integration',
            assignee: 'Aisha Khan',
            dueDate: '2025-08-15',
            status: 'To Do',
        }
    ]);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);

    // (rest of the functions and JSX for the Admin component)
    const getStatusColor = (status) => {
        switch (status) {
            case 'Accepted': return 'text-green-800 bg-green-200';
            case 'Rejected': return 'text-red-800 bg-red-200';
            default: return 'text-yellow-800 bg-yellow-200';
        }
    };

    const getTaskStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'text-green-800 bg-green-200';
            case 'In Progress': return 'text-blue-800 bg-blue-200';
            case 'To Do': return 'text-gray-800 bg-gray-200';
            default: return 'text-yellow-800 bg-yellow-200';
        }
    };

    const showDetails = (appId) => {
        const app = applications.find(a => a.id === appId);
        setSelectedApplication(app);
        setShowDetailsModal(true);
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const newTask = {
            id: `task-${tasks.length + 1}`,
            title: form.title.value,
            assignee: form.assignee.value,
            dueDate: form.dueDate.value,
            status: 'To Do',
        };
        setTasks([...tasks, newTask]);
        setShowAddTaskModal(false);
        form.reset();
    };

    const copyToClipboard = (text) => {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        showCustomAlert('Copied to clipboard!');
    };

    const showCustomAlert = (message) => {
        const alertBox = document.createElement('div');
        alertBox.className = 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-[1000] opacity-0 transition-opacity duration-300';
        alertBox.textContent = message;
        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.style.opacity = '1';
        }, 10); 

        setTimeout(() => {
            alertBox.style.opacity = '0';
            alertBox.addEventListener('transitionend', () => alertBox.remove());
        }, 2000); 
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated floating background elements - responsive sizes */}
            <div className="hidden lg:block">
                <FloatingElement delay={0} size="w-96 h-96" position="top-10 -left-48" />
                <FloatingElement delay={1} size="w-80 h-80" position="top-1/3 -right-40" />
                <FloatingElement delay={2} size="w-64 h-64" position="bottom-1/4 left-1/4" />
                <FloatingElement delay={3} size="w-72 h-72" position="bottom-10 -right-36" />
            </div>
            
            {/* Mobile floating elements */}
            <div className="lg:hidden">
                <FloatingElement delay={0} size="w-32 h-32" position="top-10 -left-16" />
                <FloatingElement delay={1} size="w-24 h-24" position="top-1/3 -right-12" />
                <FloatingElement delay={2} size="w-28 h-28" position="bottom-1/4 left-1/4" />
            </div>
            
            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
            
            {/* Mobile header with hamburger menu */}
            <header className="lg:hidden fixed top-0 left-0 right-0 bg-slate-800/90 backdrop-blur-xl border-b border-slate-700/50 z-50 px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <img src={whiteLogo} alt="Sarg Softech" className="h-6 w-auto object-contain" />
                    </div>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 rounded-lg bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/50 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            
            {/* Modern sidebar with dark theme and glass morphism */}
            <aside className={`fixed left-0 top-0 h-full w-52 sm:w-64 lg:w-80 bg-slate-800/30 backdrop-blur-xl border-r border-slate-700/50 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0`}>
                <div className="p-6 lg:p-8">
                    {/* Close button for mobile */}
                    <div className="lg:hidden flex justify-end mb-4">
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-2 rounded-lg bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/50 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <img src={whiteLogo} alt="Sarg Softech" className="h-6 lg:h-8 w-auto object-contain" />
                    </div>
                    
                    <nav className="space-y-3">
                        {[
                            { id: 'dashboard', label: 'Dashboard', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
                            { id: 'tasks', label: 'Tasks', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg> },
                            { id: 'users', label: 'Users', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path></svg> },
                            { id: 'settings', label: 'Settings', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.82 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.82 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.82-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.82-3.31 2.37-2.37.996.608 2.22 1.34 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveSection(item.id);
                                    setSidebarOpen(false); // Close mobile sidebar when item is selected
                                }}
                                className={`w-full flex items-center gap-4 px-4 lg:px-6 py-3 lg:py-4 rounded-xl text-left transition-all duration-300 group ${
                                    activeSection === item.id
                                        ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-purple-400/40 shadow-lg shadow-purple-500/20'
                                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50 hover:shadow-lg hover:shadow-slate-800/20 border border-transparent hover:border-slate-600/50'
                                }`}
                            >
                                <div className={`transition-all duration-300 ${activeSection === item.id ? 'text-purple-300 scale-110' : 'group-hover:scale-110 group-hover:text-purple-300'}`}>
                                    {item.icon}
                                </div>
                                <span className="font-medium text-sm lg:text-base">{item.label}</span>
                                {activeSection === item.id && (
                                    <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                )}
                            </button>
                        ))}
                    </nav>
                </div>
                
                {/* Footer */}
                <button
                    className="absolute bottom-16 lg:bottom-20 left-6 lg:left-8 w-[calc(100%-3rem)] py-3 px-4 rounded-xl bg-slate-800/40 backdrop-blur-xl text-purple-300 border border-purple-400/40 hover:border-purple-400 font-semibold shadow-lg transition-all duration-300"
                    onClick={() => {
                        // logic here
                        alert('Logged out!');
                    }}
                >
                    Logout
                </button>
                <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 text-xs lg:text-sm text-slate-400">&copy; 2025 Sarg Softech.</div>
            </aside>
            
            {/* Main Content - responsive margins */}
            <main className="lg:ml-80 flex-1 min-w-0 p-4 sm:p-6 lg:p-10 xl:p-14 overflow-auto relative z-10 pt-20 lg:pt-6">
                {activeSection === 'dashboard' && (
                    <div id="dashboard-content">
                        <header className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl font-extrabold text-purple-300">Admin Dashboard</h1>
                        </header>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {/* Card 1 */}
                            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600/60 transition-all duration-300 flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-slate-400">Total Applications</div>
                                    <div className="text-3xl font-bold mt-1 text-white">{applications.length}</div>
                                </div>
                                <div className="p-3 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 text-blue-300 rounded-xl border border-blue-400/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16h.01" />
                                    </svg>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600/60 transition-all duration-300 flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-slate-400">New This Week</div>
                                    <div className="text-3xl font-bold mt-1 text-white">
                                        {applications.filter(app => new Date(app.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
                                    </div>
                                </div>
                                <div className="p-3 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 text-emerald-300 rounded-xl border border-emerald-400/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600/60 transition-all duration-300 flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-slate-400">Software Dev.</div>
                                    <div className="text-3xl font-bold mt-1 text-white">
                                        {applications.filter(app => app.domain === 'Software Development').length}
                                    </div>
                                </div>
                                <div className="p-3 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 text-amber-300 rounded-xl border border-amber-400/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600/60 transition-all duration-300 flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-slate-400">UX/UI Design</div>
                                    <div className="text-3xl font-bold mt-1 text-white">
                                        {applications.filter(app => app.domain === 'UX/UI Design').length}
                                    </div>
                                </div>
                                <div className="p-3 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 text-purple-300 rounded-xl border border-purple-400/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-800/40 backdrop-blur-xl p-4 lg:p-6 rounded-2xl shadow-2xl border border-slate-700/50 overflow-x-auto">
                            <h2 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-purple-300">Recent Applications</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-600/50">
                                    <thead className="bg-slate-700/30">
                                        <tr>
                                            <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">ID</th>
                                            <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Name</th>
                                            <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Domain</th>
                                            <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Status</th>
                                            <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Date</th>
                                            <th className="px-3 lg:px-6 py-3 text-right text-xs font-medium text-slate-300 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-slate-800/20 divide-y divide-slate-600/30">
                                        {applications.map(app => (
                                            <tr key={app.id} className="hover:bg-slate-700/30 transition-colors duration-200">
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-100">{app.id}</td>
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-slate-300">{app.name}</td>
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-slate-300">{app.domain}</td>
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(app.status)}`}>{app.status}</span></td>
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-slate-300">{app.date}</td>
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button onClick={() => showDetails(app.id)} className="text-purple-400 hover:text-purple-300 transition-colors duration-200 hover:underline">View Details</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === 'tasks' && (
                    <div id="tasks-content">
                        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8 space-y-4 sm:space-y-0">
                            <h1 className="text-2xl lg:text-3xl font-extrabold text-blue-800 drop-shadow">Intern Tasks</h1>
                            <button onClick={() => setShowAddTaskModal(true)} className="px-4 lg:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm lg:text-base">Add New Task</button>
                        </header>
                        <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600/60 transition-all duration-300 flex flex-col gap-6">
                            <h2 className="text-lg lg:text-xl font-bold text-purple-300">Tasks List</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-600/50">
                                    <thead className="bg-slate-700/30">
                                        <tr>
                                            <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Task Title</th>
                                            <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Assigned To</th>
                                            <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Status</th>
                                            <th className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Due Date</th>
                                            <th className="px-3 lg:px-6 py-3 text-right text-xs font-medium text-slate-300 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-slate-800/20 divide-y divide-slate-600/30">
                                        {tasks.map(task => (
                                            <tr key={task.id} className="hover:bg-slate-700/30 transition-colors duration-200">
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-100">{task.title}</td>
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-slate-300">{task.assignee}</td>
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTaskStatusColor(task.status)}`}>{task.status}</span></td>
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-slate-300">{task.dueDate}</td>
                                                <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button onClick={() => showCustomAlert(`Viewing task: ${task.title}`)} className="text-purple-400 hover:text-purple-300 transition-colors duration-200 hover:underline">View</button>
                                                    <button onClick={() => showCustomAlert(`Deleting task: ${task.title}`)} className="text-red-400 hover:text-red-500 transition-colors duration-200 ml-2">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
                {activeSection === 'users' && (
                    <div id="users-content">
                        <h1 className="text-3xl font-extrabold text-blue-800 drop-shadow">Users</h1>
                        <p className="mt-4 text-lg text-gray-500">User management features will be available here.</p>
                    </div>
                )}
                {activeSection === 'settings' && (
                    <div id="settings-content">
                        <h1 className="text-3xl font-extrabold text-blue-800 drop-shadow">Settings</h1>
                        <p className="mt-4 text-lg text-gray-500">Admin settings and configurations will be available here.</p>
                    </div>
                )}
            </main>
            {showDetailsModal && selectedApplication && (
                <div className="modal fixed inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 bg-opacity-80 backdrop-blur-lg flex items-center justify-center z-50">
                    <div className="relative mx-auto p-8 border border-white/30 w-11/12 md:w-2/3 lg:w-1/2 shadow-2xl rounded-2xl bg-white/60 backdrop-blur-lg">
                        <h3 className="text-2xl font-bold mb-4 text-blue-800 drop-shadow">Application by {selectedApplication.name}</h3>
                        <div className="space-y-4 text-left text-sm text-gray-700">
                            <div><span className="font-bold">Email:</span> {selectedApplication.email}</div>
                            <div><span className="font-bold">Phone:</span> {selectedApplication.phone}</div>
                            <div><span className="font-bold">University:</span> {selectedApplication.university}</div>
                            <div><span className="font-bold">Domain:</span> {selectedApplication.domain}</div>
                            <div>
                                <span className="font-bold">Resume:</span>
                                <a href="#" onClick={() => showCustomAlert('In a real app, this would download the resume.')} className="text-blue-500 hover:underline"> {selectedApplication.resume}</a>
                            </div>
                            <div className="mt-4"><span className="font-bold">Message:</span> <p className="mt-1">{selectedApplication.message}</p></div>
                            <div className="mt-4"><span className="font-bold">Application ID:</span>
                                <span id="copy-id">{selectedApplication.id}</span>
                                <button onClick={() => copyToClipboard(selectedApplication.id)} className="ml-2 text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 3v2m-2 4h4m-3 7h.01M15 10V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2m10 0v2m0 0v2m0 2h.01m-2-2h.01m-2-2h.01M17 17h.01M15 17h.01" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button onClick={() => setShowDetailsModal(false)} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">Close</button>
                        </div>
                    </div>
                </div>
            )}
            {showAddTaskModal && (
                <div className="modal fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 bg-opacity-95 backdrop-blur-xl flex items-center justify-center z-50">
                    <div className="relative mx-auto p-8 border border-purple-700/60 w-11/12 md:w-2/3 lg:w-1/2 shadow-2xl shadow-purple-900/40 rounded-2xl bg-slate-900/90 backdrop-blur-xl">
                        <h3 className="text-2xl font-bold mb-4 text-purple-300 drop-shadow">Add New Task</h3>
                        <form onSubmit={handleAddTask} className="space-y-4 text-left text-sm text-slate-200">
                            <div className="input-group">
                                <label htmlFor="task-title" className="block font-medium text-purple-300">Task Title</label>
                                <input type="text" id="task-title" name="title" className="mt-1 block w-full rounded-lg border border-purple-700 bg-slate-800/80 px-4 py-2 text-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none placeholder:text-purple-400" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="task-assignee" className="block font-medium text-purple-300">Assign to Intern</label>
                                <select id="task-assignee" name="assignee" className="mt-1 block w-full rounded-lg border border-purple-700 bg-slate-800/80 px-4 py-2 text-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none" required>
                                    <option value="" disabled selected className="text-slate-400">Select an intern</option>
                                    {applications.map(app => (
                                        <option key={app.id} value={app.name} className="text-slate-900">{app.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="task-due-date" className="block font-medium text-purple-300">Due Date</label>
                                <input type="date" id="task-due-date" name="dueDate" className="mt-1 block w-full rounded-lg border border-purple-700 bg-slate-800/80 px-4 py-2 text-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 outline-none placeholder:text-purple-400" required />
                            </div>
                            <div className="flex justify-end space-x-4 mt-6">
                                <button type="button" onClick={() => setShowAddTaskModal(false)} className="px-6 py-2 rounded-lg bg-slate-800 hover:bg-purple-700 text-purple-200 font-semibold">Cancel</button>
                                <button type="submit" className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold shadow-lg">Save Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;