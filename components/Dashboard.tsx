import React from 'react';

interface AdminDashboardProps {
  username: string;
  onLogout: () => void;
  onViewStudents: () => void;
  onViewComplaints: () => void;
  onAllocate: () => void;
  onRoomOccupancy: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ username, onLogout, onViewStudents, onViewComplaints, onAllocate, onRoomOccupancy }) => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">Admin Dashboard</h1>
            <p className="text-gray-500 mt-2 mb-8">Welcome, {username}!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DashboardButton onClick={onViewStudents} text="View Students" icon={<UsersIcon />} />
                <DashboardButton onClick={onViewComplaints} text="Manage Complaints" icon={<ClipboardListIcon />} />
                <DashboardButton onClick={onRoomOccupancy} text="Room Occupancy" icon={<HomeIcon />} />
                <DashboardButton onClick={onAllocate} text="Allocate Rooms" icon={<KeyIcon />} />
            </div>
             <div className="mt-6">
                <button onClick={onLogout} className="w-full max-w-xs mx-auto flex items-center justify-center p-3 rounded-lg font-semibold transition-all duration-300 ease-in-out bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                    <LogoutIcon />
                    <span className="ml-3">Logout</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

interface DashboardButtonProps {
    onClick: () => void;
    text: string;
    icon: React.ReactNode;
}

const DashboardButton: React.FC<DashboardButtonProps> = ({ onClick, text, icon }) => {
    return (
        <button onClick={onClick} className="w-full flex items-center justify-center p-4 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-green-500 text-white hover:bg-green-600 focus:ring-green-500">
            {icon}
            <span className="ml-3">{text}</span>
        </button>
    );
};

const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 5.197" /></svg>;
const ClipboardListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const KeyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>;

export default AdminDashboard;
