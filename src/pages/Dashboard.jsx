
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

const Card = ({ title, icon, children }) => (
    <div className="bg-slate-800/40 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-slate-700/50 mb-8 hover:bg-slate-800/60 hover:border-slate-600/60 hover:shadow-slate-900/20 hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 text-purple-300 rounded-xl shadow-lg border border-purple-500/20 group-hover:border-purple-400/40 group-hover:shadow-purple-500/20 transition-all duration-300">
                {icon}
            </div>
            {title && <h2 className="text-xl lg:text-2xl font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors duration-300">{title}</h2>}
        </div>
        {children}
    </div>
);

const TaskItem = ({ title, description, status, dueDate, priority }) => {
    const statusColors = {
        'Completed': 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
        'In Progress': 'bg-amber-500/20 text-amber-300 border-amber-400/30',
        'To Do': 'bg-slate-500/20 text-slate-300 border-slate-400/30',
    };
    
    const priorityColors = {
        'High': 'text-red-400',
        'Medium': 'text-yellow-400',
        'Low': 'text-green-400'
    };

    return (
        <li className="flex flex-col sm:flex-row sm:items-start gap-4 pb-4 border-b border-slate-600/30 last:border-b-0 last:pb-0 hover:bg-slate-700/20 transition-colors duration-300 rounded-lg px-2 py-2">
            <input type="checkbox" className="mt-1 h-5 w-5 rounded border-slate-500 bg-slate-700/50 accent-purple-500 focus:ring-purple-400 focus:ring-2" checked={status === 'Completed'} readOnly />
            <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                    <h4 className="text-lg font-semibold text-slate-100">{title}</h4>
                    {priority && <span className={`text-xs font-medium ${priorityColors[priority]}`}>({priority})</span>}
                </div>
                <p className="text-sm text-slate-400 mb-2">{description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm border ${statusColors[status]} backdrop-blur-sm`}>{status}</span>
                    {dueDate && <span className="text-xs text-slate-400">Due: {dueDate}</span>}
                </div>
            </div>
        </li>
    );
};

const AnnouncementItem = ({ title, date, description }) => (
    <li className="pb-4 border-b border-slate-600/30 last:border-b-0 last:pb-0 hover:bg-slate-700/20 transition-colors duration-300 rounded-lg px-2 py-2">
        <h4 className="text-lg font-semibold text-purple-300 mb-1 hover:text-purple-200 transition-colors duration-300">{title}</h4>
        <p className="text-sm text-slate-300 mb-1">{description}</p>
        <span className="text-xs text-slate-400 italic">{date}</span>
    </li>
);

const QuickLink = ({ icon, text }) => (
    <a href="#" className="flex items-center gap-3 p-4 bg-slate-700/40 backdrop-blur-md rounded-xl hover:bg-slate-600/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 shadow-sm border border-slate-600/30 hover:border-purple-400/40 group">
        <div className="group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <span className="text-sm lg:text-base font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">{text}</span>
    </a>
);

const Dashboard = () => {
    // State for navigation
    const [activeSection, setActiveSection] = useState('overview');
    // State for welcome section visibility and animation
    const [showWelcome, setShowWelcome] = useState(true);
    const [hideWelcome, setHideWelcome] = useState(false);
    // Mobile sidebar state
    const [sidebarOpen, setSidebarOpen] = useState(false);

    React.useEffect(() => {
        if (!showWelcome) return;
        const timer = setTimeout(() => setHideWelcome(true), 2000);
        return () => clearTimeout(timer);
    }, [showWelcome]);

    // When hideWelcome is true, fade out, then remove modal after animation
    React.useEffect(() => {
        if (!hideWelcome) return;
        const timer = setTimeout(() => setShowWelcome(false), 500); // match fade duration
        return () => clearTimeout(timer);
    }, [hideWelcome]);

    // State for tasks, announcements, progress, etc.
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Research competitor checkout flows',
            description: 'Analyze how other e-commerce sites handle their checkout processes to identify best practices and potential improvements.',
            status: 'Completed',
            dueDate: '2025-08-10',
            priority: 'High'
        },
        {
            id: 2,
            title: 'Wireframe new checkout page layout',
            description: 'Create low-fidelity wireframes for the redesigned checkout page in Figma.',
            status: 'In Progress',
            dueDate: '2025-08-15',
            priority: 'High'
        },
        {
            id: 3,
            title: 'Present wireframes to the design team',
            description: 'Share your wireframes and initial ideas with your mentor and the broader design team for feedback.',
            status: 'To Do',
            dueDate: '2025-08-20',
            priority: 'Medium'
        },
    ]);

    // Add task modal state
    const [showAddTaskModal, setShowAddTaskModal] = useState(false);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        status: 'To Do',
        dueDate: '',
        priority: 'Medium'
    });

    // Handle task form
    const handleTaskInputChange = (e) => {
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value
        });
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (newTask.title.trim() && newTask.description.trim()) {
            const task = {
                ...newTask,
                id: Date.now() // Simple ID generation
            };
            setTasks([...tasks, task]);
            setNewTask({
                title: '',
                description: '',
                status: 'To Do',
                dueDate: '',
                priority: 'Medium'
            });
            setShowAddTaskModal(false);
        }
    };

    const [announcements] = useState([
        {
            title: 'Company-wide Hackathon!',
            date: 'July 28, 2025',
            description: 'Join us for our annual innovation hackathon on Oct 20-21. Form your teams now!',
        },
        {
            title: 'Intern Mixer - RSVP Now!',
            date: 'July 25, 2025',
            description: 'A casual event to meet other interns and team members. August 15th, 5 PM.',
        },
        {
            title: 'New Learning Platform Available',
            date: 'July 20, 2025',
            description: 'Access updated courses and tutorials on our new internal learning portal.',
        },
    ]);

    // Progress data
    const [progress] = useState({
        percent: 40,
        tasksCompleted: 5,
        totalTasks: 12,
        milestones: 2,
        totalMilestones: 5,
    });

    // Profile modal state
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Aditya Bhongale',
        email: 'aditya@example.com',
    });
    const [editProfile, setEditProfile] = useState(profile);

    const handleProfileChange = (e) => {
        setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
    };
    const handleProfileSave = (e) => {
        e.preventDefault();
        setProfile(editProfile);
        setShowProfileModal(false);
    };
    const handleLogout = () => {
        // Add logout logic here (e.g., clear auth, redirect)
        alert('Logged out!');
    };

    // Close sidebar when clicking outside on mobile
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.hamburger-btn')) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [sidebarOpen]);

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
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <img src={whiteLogo} alt="Sarg Softech" className="h-6 w-auto object-contain" />
                    </div>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="hamburger-btn p-2 rounded-lg bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600/50 transition-colors"
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
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <img src={whiteLogo} alt="Sarg Softech" className="h-6 lg:h-8 w-auto object-contain" />
                    </div>
                    
                    <nav className="space-y-3">
                        {[
                            { id: 'overview', label: 'Overview', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
                            { id: 'tasks', label: 'Your Tasks', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg> },
                            { id: 'announcements', label: 'Announcements', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg> },
                            { id: 'progress', label: 'Your Progress', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg> },
                            { id: 'links', label: 'Quick Links', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg> },
                            { id: 'profile', label: 'Profile', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> }
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveSection(item.id);
                                    setSidebarOpen(false); // Close mobile sidebar when item is selected
                                }}
                                className={`w-full flex items-center gap-4 px-4 lg:px-6 py-3 lg:py-4 rounded-xl text-left transition-all duration-300 group ${
                                    activeSection === item.id
                                        ? 'bg-gradient-to-r from-purple-600/80 to-blue-600/80 text-white shadow-lg shadow-purple-500/20 border border-purple-400/40'
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
                <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 text-xs lg:text-sm text-slate-400">&copy; 2025 Sarg Softech.</div>
            </aside>
            {/* Main content area - responsive margins */}
            <main className="lg:ml-80 flex-1 min-w-0 p-4 sm:p-6 lg:p-10 xl:p-14 overflow-auto relative z-10 pt-20 lg:pt-6">
                {/* Welcome popup with dark theme */}
                {showWelcome && (
                    <div className={`fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-500 ${hideWelcome ? 'opacity-0' : 'opacity-100'} p-4`}>
                        <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-600/50 rounded-3xl p-8 lg:p-12 max-w-lg mx-4 text-center shadow-2xl animate-pulse">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 lg:h-10 lg:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                            </div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">Welcome Back, ADITYA!</h1>
                            <p className="text-slate-300 text-base lg:text-lg">Ready to continue your internship journey?</p>
                        </div>
                    </div>
                )}

                {/* Add Task Modal */}
                {showAddTaskModal && (
                    <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-600/50 rounded-2xl p-6 lg:p-8 max-w-md w-full mx-4 shadow-2xl">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">Add New Task</h3>
                            <form onSubmit={handleAddTask} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={newTask.title}
                                        onChange={handleTaskInputChange}
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter task title"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                                    <textarea
                                        name="description"
                                        value={newTask.description}
                                        onChange={handleTaskInputChange}
                                        rows="3"
                                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter task description"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Priority</label>
                                        <select
                                            name="priority"
                                            value={newTask.priority}
                                            onChange={handleTaskInputChange}
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        >
                                            <option value="Low">Low</option>
                                            <option value="Medium">Medium</option>
                                            <option value="High">High</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Due Date</label>
                                        <input
                                            type="date"
                                            name="dueDate"
                                            value={newTask.dueDate}
                                            onChange={handleTaskInputChange}
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddTaskModal(false)}
                                        className="flex-1 py-3 px-4 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300"
                                    >
                                        Add Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Content sections */}
                {activeSection === 'overview' && (
                    <section id="overview-content" className="w-full max-w-7xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-purple-300 mb-8 tracking-tight">Project Overview</h2>
                        <div className="grid grid-cols-1 gap-6 md:gap-8">
                            <div className="col-span-1">
                                <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>}>
                                    <h3 className="text-lg lg:text-xl font-semibold text-slate-100 mb-2">E-commerce Platform Redesign</h3>
                                    <p className="text-slate-300 mb-2 text-sm lg:text-base">You'll be contributing to the redesign of our main e-commerce platform. Your work will focus on improving the user experience for the checkout flow and product pages.</p>
                                    <p className="text-slate-300 text-sm lg:text-base"><strong className="text-purple-300">Mentor:</strong> Jane Smith</p>
                                    <p className="text-slate-300 text-sm lg:text-base"><strong className="text-purple-300">Start Date:</strong> August 4, 2025</p>
                                </Card>
                            </div>
                        </div>
                    </section>
                )}

                {activeSection === 'tasks' && (
                    <section id="tasks-content" className="w-full max-w-7xl mx-auto">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-purple-300 tracking-tight">Your Tasks</h2>
                        </div>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}>
                            <ul className="space-y-4">
                                {tasks.map((task) => (
                                    <TaskItem key={task.id} title={task.title} description={task.description} status={task.status} dueDate={task.dueDate} priority={task.priority} />
                                ))}
                            </ul>
                        </Card>
                    </section>
                )}

                {activeSection === 'announcements' && (
                    <section id="announcements-content" className="w-full max-w-7xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-purple-300 mb-8 tracking-tight">Announcements</h2>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>}>
                            <ul className="space-y-4">
                                {announcements.map((a, idx) => (
                                    <AnnouncementItem key={idx} title={a.title} date={a.date} description={a.description} />
                                ))}
                            </ul>
                        </Card>
                    </section>
                )}

                {activeSection === 'progress' && (
                    <section id="progress-content" className="w-full max-w-7xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-purple-300 mb-8 tracking-tight">Your Progress</h2>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>}>
                            <div className="w-full bg-slate-700/50 rounded-full h-3 mb-4">
                                <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progress.percent}%` }}></div>
                            </div>
                            <p className="text-center text-sm lg:text-base font-medium text-slate-300 mb-4">{progress.percent}% of internship completed</p>
                            <ul className="text-sm lg:text-base text-slate-400 space-y-2">
                                <li><strong className="text-purple-300">Tasks Completed:</strong> {progress.tasksCompleted}/{progress.totalTasks}</li>
                                <li><strong className="text-purple-300">Milestones Achieved:</strong> {progress.milestones}/{progress.totalMilestones}</li>
                            </ul>
                        </Card>
                    </section>
                )}

                {activeSection === 'links' && (
                    <section id="links-content" className="w-full max-w-7xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-purple-300 mb-8 tracking-tight">Quick Links</h2>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <QuickLink icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>} text="Company Knowledge Base" />
                                <QuickLink icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>} text="Team Calendar" />
                                <QuickLink icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:h-6 lg:w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>} text="Request 1:1 with Mentor" />
                            </div>
                        </Card>
                    </section>
                )}

                {activeSection === 'profile' && (
                    <section id="profile-content" className="w-full max-w-2xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-purple-300 mb-8 tracking-tight">Profile</h2>
                        <div className="bg-slate-800/40 backdrop-blur-xl p-6 lg:p-8 rounded-2xl shadow-2xl border border-slate-700/50">
                            <div className="flex flex-col items-center gap-6">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-2xl lg:text-4xl font-bold text-white shadow-lg">
                                    {profile.name.charAt(0)}
                                </div>
                                <div className="text-center">
                                    <div className="font-semibold text-slate-100 text-lg lg:text-xl leading-tight mb-1">{profile.name}</div>
                                    <div className="text-sm lg:text-base text-slate-400 mb-4">{profile.email}</div>
                                </div>
                                <form onSubmit={handleProfileSave} className="w-full max-w-md space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={editProfile.name}
                                            onChange={handleProfileChange}
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={editProfile.email}
                                            onChange={handleProfileChange}
                                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                        <button 
                                            type="button" 
                                            className="flex-1 py-3 rounded-lg bg-slate-600 hover:bg-slate-700 text-white font-semibold transition-colors"
                                            onClick={() => setEditProfile(profile)}
                                        >
                                            Cancel
                                        </button>
                                        <button 
                                            type="submit" 
                                            className="flex-1 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold transition-all duration-300"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                                <button
                                    className="w-full py-3 px-4 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/30 hover:border-red-400/50 font-semibold transition-all duration-300 mt-4"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Dashboard;