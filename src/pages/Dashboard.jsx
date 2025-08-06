import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// (The rest of the Dashboard component code and its sub-components go here)
const Card = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
        <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-primary rounded-full">
                {icon}
            </div>
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
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
        <li className="flex items-start gap-4 pb-4 border-b last:border-b-0 last:pb-0">
            <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary" checked={status === 'Completed'} readOnly />
            <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusColors[status]}`}>{status}</span>
        </li>
    );
};

const AnnouncementItem = ({ title, date, description }) => (
    <li className="pb-4 border-b last:border-b-0 last:pb-0">
        <h4 className="text-lg font-semibold text-primary mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-1">{description}</p>
        <span className="text-xs text-gray-400">{date}</span>
    </li>
);

const QuickLink = ({ icon, text }) => (
    <a href="#" className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
        {icon}
        <span className="text-base font-medium">{text}</span>
    </a>
);

const Dashboard = () => (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800 antialiased">
        <Header />
        <main className="flex-grow py-8 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="bg-gradient-to-r from-purple-300 to-blue-300 p-8 rounded-xl text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-primary mb-2 fade-in-text">Welcome, ADITYA BHONGALE!</h1>
                    <p className="text-lg text-gray-600 fade-in-text" style={{ animationDelay: '0.5s' }}>We're thrilled to have you on the team. Here is your personalized dashboard to help you get started on your internship journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <Card title="Project Overview" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform Redesign</h3>
                            <p className="text-gray-600 mb-2">You'll be contributing to the redesign of our main e-commerce platform. Your work will focus on improving the user experience for the checkout flow and product pages.</p>
                            <p className="text-gray-600"><strong>Mentor:</strong> Jane Smith</p>
                            <p className="text-gray-600"><strong>Start Date:</strong> August 4, 2025</p>
                        </Card>

                        <Card title="Your Tasks" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}>
                            <ul className="space-y-4">
                                <TaskItem title="Research competitor checkout flows" description="Analyze how other e-commerce sites handle their checkout processes to identify best practices and potential improvements." status="Completed" />
                                <TaskItem title="Wireframe new checkout page layout" description="Create low-fidelity wireframes for the redesigned checkout page in Figma." status="In Progress" />
                                <TaskItem title="Present wireframes to the design team" description="Share your wireframes and initial ideas with your mentor and the broader design team for feedback." status="To Do" />
                            </ul>
                        </Card>
                    </div>

                    <div className="md:col-span-1">
                        <Card title="Your Progress" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><path d="M22 4L12 14.01l-3-3"></path></svg>}>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                            <p className="text-center text-sm font-medium text-gray-700 mb-4">40% of internship completed</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li><strong>Tasks Completed:</strong> 5/12</li>
                                <li><strong>Milestones Achieved:</strong> 2/5</li>
                            </ul>
                        </Card>

                        <Card title="Announcements" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 003.4 0"></path></svg>}>
                            <ul className="space-y-4">
                                <AnnouncementItem title="Company-wide Hackathon!" date="July 28, 2025" description="Join us for our annual innovation hackathon on Oct 20-21. Form your teams now!" />
                                <AnnouncementItem title="Intern Mixer - RSVP Now!" date="July 25, 2025" description="A casual event to meet other interns and team members. August 15th, 5 PM." />
                                <AnnouncementItem title="New Learning Platform Available" date="July 20, 2025" description="Access updated courses and tutorials on our new internal learning portal." />
                            </ul>
                        </Card>

                        <Card title="Quick Links" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"></path></svg>}>
                            <div className="space-y-4">
                                <QuickLink icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>} text="Company Knowledge Base" />
                                <QuickLink icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>} text="Team Calendar" />
                                <QuickLink icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M20 8v6M23 11h-6"></path></svg>} text="Request 1:1 with Mentor" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
);

export default Dashboard;