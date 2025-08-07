
import React, { useState } from 'react';

const Admin = () => {
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
    const [activeSection, setActiveSection] = useState('dashboard');
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
        <div className="min-h-screen flex bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-sans text-gray-800 antialiased">
            {/* Sidebar Navigation */}
            <aside className="w-72 bg-white/30 backdrop-blur-2xl shadow-2xl p-8 flex-col justify-between rounded-r-3xl border-r border-white/30 hidden md:flex transition-all duration-300">
                <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                        <div className="text-3xl font-extrabold text-blue-700 mb-10 tracking-tight drop-shadow-sm">Sarg Softech</div>
                        <nav className="space-y-2">
                            <a href="#" onClick={() => setActiveSection('dashboard')} className={`nav-link flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-100/60 hover:shadow ${activeSection === 'dashboard' ? 'bg-blue-100/80 text-blue-700 font-bold shadow' : 'text-gray-700'}`}> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                <span>Dashboard</span>
                            </a>
                            <a href="#" onClick={() => setActiveSection('tasks')} className={`nav-link flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-100/60 hover:shadow ${activeSection === 'tasks' ? 'bg-blue-100/80 text-blue-700 font-bold shadow' : 'text-gray-700'}`}> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16h.01" /></svg>
                                <span>Tasks</span>
                            </a>
                            <a href="#" onClick={() => setActiveSection('users')} className={`nav-link flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-100/60 hover:shadow ${activeSection === 'users' ? 'bg-blue-100/80 text-blue-700 font-bold shadow' : 'text-gray-700'}`}> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                                <span>Users</span>
                            </a>
                            <a href="#" onClick={() => setActiveSection('settings')} className={`nav-link flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-100/60 hover:shadow ${activeSection === 'settings' ? 'bg-blue-100/80 text-blue-700 font-bold shadow' : 'text-gray-700'}`}> 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.82 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.82 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.82-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.82-3.31 2.37-2.37.996.608 2.22 1.34 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>Settings</span>
                            </a>
                        </nav>
                    </div>
                    <div className="text-sm text-gray-400 mt-10">&copy; 2025 Sarg Softech.</div>
                </div>
            </aside>
            {/* Main Content */}
            <main className="flex-1 min-w-0 p-6 sm:p-10 md:p-14 overflow-auto">
                {activeSection === 'dashboard' && (
                    <div id="dashboard-content">
                        <header className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl font-extrabold text-blue-800 drop-shadow">Admin Dashboard</h1>
                        </header>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {/* Card 1 */}
                            <div className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-gray-500">Total Applications</div>
                                    <div className="text-3xl font-bold mt-1 text-gray-900">{applications.length}</div>
                                </div>
                                <div className="p-3 bg-blue-200 text-blue-700 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16h.01" />
                                    </svg>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-gray-500">New This Week</div>
                                    <div className="text-3xl font-bold mt-1 text-gray-900">
                                        {applications.filter(app => new Date(app.date) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
                                    </div>
                                </div>
                                <div className="p-3 bg-green-200 text-green-700 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-gray-500">Software Dev.</div>
                                    <div className="text-3xl font-bold mt-1 text-gray-900">
                                        {applications.filter(app => app.domain === 'Software Development').length}
                                    </div>
                                </div>
                                <div className="p-3 bg-yellow-200 text-yellow-700 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-medium text-gray-500">UX/UI Design</div>
                                    <div className="text-3xl font-bold mt-1 text-gray-900">
                                        {applications.filter(app => app.domain === 'UX/UI Design').length}
                                    </div>
                                </div>
                                <div className="p-3 bg-purple-200 text-purple-700 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 overflow-x-auto">
                            <h2 className="text-xl font-bold mb-6 text-blue-800">Recent Applications</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-white/60">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white/30 divide-y divide-gray-200">
                                        {applications.map(app => (
                                            <tr key={app.id} className="hover:bg-blue-50/40 transition-colors duration-200">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.domain}</td>
                                                <td className="px-6 py-4 whitespace-nowrap"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(app.status)}`}>{app.status}</span></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button onClick={() => showDetails(app.id)} className="text-blue-500 hover:text-blue-700 transition-colors duration-200">View Details</button>
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
                        <header className="flex items-center justify-between mb-8">
                            <h1 className="text-3xl font-extrabold text-blue-800 drop-shadow">Intern Tasks</h1>
                            <button onClick={() => setShowAddTaskModal(true)} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">Add New Task</button>
                        </header>
                        <div className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 overflow-x-auto">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-white/60">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Title</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white/30 divide-y divide-gray-200">
                                        {tasks.map(task => (
                                            <tr key={task.id} className="hover:bg-blue-50/40 transition-colors duration-200">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.title}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.assignee}</td>
                                                <td className="px-6 py-4 whitespace-nowrap"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getTaskStatusColor(task.status)}`}>{task.status}</span></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button onClick={() => showCustomAlert(`Viewing task: ${task.title}`)} className="text-blue-500 hover:text-blue-700 transition-colors duration-200">View</button>
                                                    <button onClick={() => showCustomAlert(`Deleting task: ${task.title}`)} className="text-red-500 hover:text-red-700 transition-colors duration-200 ml-2">Delete</button>
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
                <div className="modal fixed inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 bg-opacity-80 backdrop-blur-lg flex items-center justify-center z-50">
                    <div className="relative mx-auto p-8 border border-white/30 w-11/12 md:w-2/3 lg:w-1/2 shadow-2xl rounded-2xl bg-white/60 backdrop-blur-lg">
                        <h3 className="text-2xl font-bold mb-4 text-blue-800 drop-shadow">Add New Task</h3>
                        <form onSubmit={handleAddTask} className="space-y-4 text-left text-sm text-gray-700">
                            <div className="input-group">
                                <label htmlFor="task-title" className="block font-medium text-gray-700">Task Title</label>
                                <input type="text" id="task-title" name="title" className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 outline-none" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="task-assignee" className="block font-medium text-gray-700">Assign to Intern</label>
                                <select id="task-assignee" name="assignee" className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 outline-none" required>
                                    <option value="" disabled selected>Select an intern</option>
                                    {applications.map(app => (
                                        <option key={app.id} value={app.name}>{app.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="task-due-date" className="block font-medium text-gray-700">Due Date</label>
                                <input type="date" id="task-due-date" name="dueDate" className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-200 outline-none" required />
                            </div>
                            <div className="flex justify-end space-x-4 mt-6">
                                <button type="button" onClick={() => setShowAddTaskModal(false)} className="px-6 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold">Cancel</button>
                                <button type="submit" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">Save Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;