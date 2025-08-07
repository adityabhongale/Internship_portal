
import React, { useState } from 'react';


const Card = ({ title, icon, children }) => (
    <div className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30 mb-8 ">
        <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-cyan-100 to-blue-100 text-blue-700 rounded-xl shadow">
                {icon}
            </div>
            {title && <h2 className="text-2xl font-bold text-gray-800 tracking-tight">{title}</h2>}
        </div>
        {children}
    </div>
);

const TaskItem = ({ title, description, status }) => {
    const statusColors = {
        'Completed': 'bg-green-200 text-green-800',
        'In Progress': 'bg-yellow-200 text-yellow-800',
        'To Do': 'bg-gray-200 text-gray-800',
    };
    return (
        <li className="flex items-start gap-4 pb-4 border-b border-white/20 last:border-b-0 last:pb-0">
            <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 accent-blue-500 focus:ring-blue-400" checked={status === 'Completed'} readOnly />
            <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${statusColors[status]}`}>{status}</span>
        </li>
    );
};

const AnnouncementItem = ({ title, date, description }) => (
    <li className="pb-4 border-b border-white/20 last:border-b-0 last:pb-0">
        <h4 className="text-lg font-semibold text-blue-700 mb-1">{title}</h4>
        <p className="text-sm text-gray-500 mb-1">{description}</p>
        <span className="text-xs text-gray-400 italic">{date}</span>
    </li>
);

const QuickLink = ({ icon, text }) => (
    <a href="#" className="flex items-center gap-3 p-4 bg-white/30 backdrop-blur-md rounded-xl hover:bg-white/50 transition-all duration-200 shadow-sm border border-white/20">
        {icon}
        <span className="text-base font-semibold text-gray-800">{text}</span>
    </a>
);

const Dashboard = () => {
    // State for navigation
    const [activeSection, setActiveSection] = useState('overview');
    // State for welcome section visibility and animation
    const [showWelcome, setShowWelcome] = useState(true);
    const [hideWelcome, setHideWelcome] = useState(false);

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
    const [tasks] = useState([
        {
            title: 'Research competitor checkout flows',
            description: 'Analyze how other e-commerce sites handle their checkout processes to identify best practices and potential improvements.',
            status: 'Completed',
        },
        {
            title: 'Wireframe new checkout page layout',
            description: 'Create low-fidelity wireframes for the redesigned checkout page in Figma.',
            status: 'In Progress',
        },
        {
            title: 'Present wireframes to the design team',
            description: 'Share your wireframes and initial ideas with your mentor and the broader design team for feedback.',
            status: 'To Do',
        },
    ]);

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

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-sans text-gray-800 antialiased">
            {/* Sidebar Navigation */}
            <aside className="w-72 bg-white/30 backdrop-blur-2xl shadow-2xl p-8 flex-col justify-between rounded-r-3xl border-r border-white/30 hidden md:flex transition-all duration-300">
                <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                        <div className="text-3xl font-extrabold text-blue-700 mb-10 tracking-tight drop-shadow-sm">Sarg Softech</div>
                        <nav className="space-y-2">
                            <a href="#" onClick={() => setActiveSection('overview')} className={`nav-link flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-100/60 hover:shadow ${activeSection === 'overview' ? 'bg-blue-100/80 text-blue-700 font-bold shadow' : 'text-gray-700'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                <span>Overview</span>
                            </a>
                            <a href="#" onClick={() => setActiveSection('tasks')} className={`nav-link flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-100/60 hover:shadow ${activeSection === 'tasks' ? 'bg-blue-100/80 text-blue-700 font-bold shadow' : 'text-gray-700'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16h.01" /></svg>
                                <span>Your Tasks</span>
                            </a>
                            <a href="#" onClick={() => setActiveSection('announcements')} className={`nav-link flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-100/60 hover:shadow ${activeSection === 'announcements' ? 'bg-blue-100/80 text-blue-700 font-bold shadow' : 'text-gray-700'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 003.4 0" /></svg>
                                <span>Announcements</span>
                            </a>
                            <a href="#" onClick={() => setActiveSection('progress')} className={`nav-link flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-100/60 hover:shadow ${activeSection === 'progress' ? 'bg-blue-100/80 text-blue-700 font-bold shadow' : 'text-gray-700'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                                <span>Your Progress</span>
                            </a>
                            <a href="#" onClick={() => setActiveSection('links')} className={`nav-link flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-100/60 hover:shadow ${activeSection === 'links' ? 'bg-blue-100/80 text-blue-700 font-bold shadow' : 'text-gray-700'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>
                                <span>Quick Links</span>
                            </a>
                            <a href="#" onClick={() => setActiveSection('profile')} className={`nav-link flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-100/60 hover:shadow ${activeSection === 'profile' ? 'bg-blue-100/80 text-blue-700 font-bold shadow' : 'text-gray-700'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Profile</span>
                            </a>
                        </nav>
                    </div>
                    {/* Profile Section (moved to Profile page) */}
                    <div className="text-sm text-gray-400 mt-10">&copy; 2025 Sarg Softech.</div>
                </div>

            </aside>
    
            <main className="flex-1 min-w-0 p-6 sm:p-10 md:p-14 overflow-auto">
                {/* Welcome Popup */}
                {showWelcome && (
                    <div
                        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${hideWelcome ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
                        style={{
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            background: 'rgba(207, 233, 255, 0.25)',
                        }}
                    >
                        <div className="w-full max-w-2xl mx-4 bg-white/60 backdrop-blur-lg p-12 sm:p-16 rounded-3xl shadow-2xl text-center animate-fade-in border border-white/30">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4 tracking-tight drop-shadow">Welcome, ADITYA BHONGALE!</h1>
                            <p className="text-lg sm:text-xl text-gray-700 font-medium">We're thrilled to have you on the team. Here is your personalized dashboard to help you get started on your internship journey.</p>
                        </div>
                    </div>
                )}
                {activeSection === 'profile' && (
                    <section id="profile-content" className="w-full max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-8 tracking-tight drop-shadow">Profile</h2>
                        <div className="flex flex-col items-center gap-6 bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/30">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-200 to-purple-200 flex items-center justify-center text-4xl font-bold text-blue-700 shadow mb-2">
                                {profile.name.charAt(0)}
                            </div>
                            <div className="text-center">
                                <div className="font-semibold text-gray-800 text-xl leading-tight mb-1">{profile.name}</div>
                                <div className="text-sm text-gray-500 mb-4">{profile.email}</div>
                            </div>
                            <form onSubmit={handleProfileSave} className="w-full max-w-md space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editProfile.name}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={editProfile.email}
                                        onChange={handleProfileChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-200 outline-none"
                                        required
                                    />
                                </div>
                                <div className="flex gap-3 mt-6">
                                    <button type="button" className="flex-1 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold" onClick={() => setEditProfile(profile)}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="flex-1 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                                        Save
                                    </button>
                                </div>
                            </form>
                            <button
                                className="w-full py-2 px-4 rounded-xl bg-red-100/80 hover:bg-red-200 text-red-700 font-semibold transition-all duration-150 mt-4"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </section>
                )}
                {activeSection === 'overview' && (
                    <section id="overview-content" className="w-full max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-8 tracking-tight drop-shadow">Project Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="col-span-1 md:col-span-3">
                                <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>}>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform Redesign</h3>
                                    <p className="text-gray-600 mb-2">You'll be contributing to the redesign of our main e-commerce platform. Your work will focus on improving the user experience for the checkout flow and product pages.</p>
                                    <p className="text-gray-600"><strong>Mentor:</strong> Jane Smith</p>
                                    <p className="text-gray-600"><strong>Start Date:</strong> August 4, 2025</p>
                                </Card>
                            </div>
                        </div>
                    </section>
                )}
                {activeSection === 'tasks' && (
                    <section id="tasks-content" className="w-full max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-8 tracking-tight drop-shadow">Your Tasks</h2>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}>
                            <ul className="space-y-4">
                                {tasks.map((task, idx) => (
                                    <TaskItem key={idx} title={task.title} description={task.description} status={task.status} />
                                ))}
                            </ul>
                        </Card>
                    </section>
                )}
                {activeSection === 'announcements' && (
                    <section id="announcements-content" className="w-full max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-8 tracking-tight drop-shadow">Announcements</h2>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 003.4 0"></path></svg>}>
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-8 tracking-tight drop-shadow">Your Progress</h2>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>}>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress.percent}%` }}></div>
                            </div>
                            <p className="text-center text-sm font-medium text-gray-700 mb-4">{progress.percent}% of internship completed</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li><strong>Tasks Completed:</strong> {progress.tasksCompleted}/{progress.totalTasks}</li>
                                <li><strong>Milestones Achieved:</strong> {progress.milestones}/{progress.totalMilestones}</li>
                            </ul>
                        </Card>
                    </section>
                )}
                {activeSection === 'links' && (
                    <section id="links-content" className="w-full max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-8 tracking-tight drop-shadow">Quick Links</h2>
                        <Card icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"></path></svg>}>
                            <div className="space-y-4">
                                <QuickLink icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>} text="Company Knowledge Base" />
                                <QuickLink icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>} text="Team Calendar" />
                                <QuickLink icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M20 8v6M23 11h-6"></path></svg>} text="Request 1:1 with Mentor" />
                            </div>
                        </Card>
                    </section>
                )}
            </main>
        </div>
    );
};

export default Dashboard;