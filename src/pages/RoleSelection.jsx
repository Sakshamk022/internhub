// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '@clerk/clerk-react';

// function RoleSelection() {
//   const navigate = useNavigate();
//   const { user } = useUser();

//   if (!user) {
//     return <div className="p-4">Loading user info...</div>;
//   }

//   const handleSelect = (role) => {
//     if (role === 'intern') {
//       navigate('/intern');
//     } else if (role === 'recruiter') {
//       navigate('/recruiter');
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Welcome, {user?.firstName}!</h1>
//       <p className="mb-6">Please select your role:</p>
//       <button 
//         onClick={() => handleSelect('intern')} 
//         className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
//       >
//         I'm an Intern
//       </button>
//       <button 
//         onClick={() => handleSelect('recruiter')} 
//         className="px-4 py-2 bg-green-500 text-white rounded"
//       >
//         I'm a Recruiter
//       </button>
//     </div>
//   );
// }

// export default RoleSelection;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, SignOutButton } from '@clerk/clerk-react';

function RoleSelection() {
  const navigate = useNavigate();
  const { user } = useUser();

  if (!user) {
    return <div className="p-6 text-gray-600 text-lg">Loading user info...</div>;
  }

  const handleSelect = (role) => {
    if (role === 'intern') {
      navigate('/intern');
    } else if (role === 'recruiter') {
      navigate('/recruiter');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, {user?.firstName} 👋</h1>
        <p className="text-gray-600 text-lg">Please select your role to continue:</p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleSelect('intern')}
            className="w-full px-5 py-3 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            🎓 I'm an Intern
          </button>

          <button
            onClick={() => handleSelect('recruiter')}
            className="w-full px-5 py-3 text-lg bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            📝 I'm a Recruiter
          </button>
        </div>

        <SignOutButton>
          <button className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Sign Out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}

export default RoleSelection;
