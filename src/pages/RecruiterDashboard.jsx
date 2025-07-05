

// import React, { useState } from 'react';
// import { useUser, SignOutButton } from '@clerk/clerk-react';

// function RecruiterDashboard() {
//   const { user } = useUser();
//   const [internships, setInternships] = useState([]);
//   const [title, setTitle] = useState('');
//   const [location, setLocation] = useState('');
//   const [duration, setDuration] = useState('');

//   const handlePostInternship = (e) => {
//     e.preventDefault();

//     if (!title || !location || !duration) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     const newInternship = {
//       id: Date.now(),
//       title,
//       location,
//       duration,
//     };

//     setInternships((prev) => [...prev, newInternship]);

//     // Clear form
//     setTitle('');
//     setLocation('');
//     setDuration('');
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Welcome, {user?.firstName} (Recruiter)</h1>

//       {/* Internship Form */}
//       <form onSubmit={handlePostInternship} className="space-y-3 mb-6">
//         <div>
//           <input
//             type="text"
//             placeholder="Internship Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="border p-2 w-full rounded"
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             placeholder="Location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="border p-2 w-full rounded"
//           />
//         </div>
//         <div>
//           <input
//             type="number"
//             placeholder="Duration (in months)"
//             value={duration}
//             onChange={(e) => setDuration(e.target.value)}
//             className="border p-2 w-full rounded"
//           />
//         </div>
//         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
//           Post Internship
//         </button>
//       </form>

//       {/* Posted Internships */}
//       <h2 className="text-xl font-semibold mb-2">Your Posted Internships:</h2>
//       <ul className="space-y-4">
//         {internships.length > 0 ? (
//           internships.map((internship) => (
//             <li key={internship.id} className="border p-3 rounded">
//               <h3 className="font-bold">{internship.title}</h3>
//               <p>Location: {internship.location}</p>
//               <p>Duration: {internship.duration} Months</p>
//             </li>
//           ))
//         ) : (
//           <p>No internships posted yet.</p>
//         )}
//       </ul>

//       <SignOutButton>
//         <button className="mt-6 px-4 py-2 bg-red-500 text-white rounded">Sign Out</button>
//       </SignOutButton>
//     </div>
//   );
// }

// export default RecruiterDashboard;

import React, { useState } from 'react';
import { useUser, SignOutButton } from '@clerk/clerk-react';

function RecruiterDashboard() {
  const { user } = useUser();
  const [internships, setInternships] = useState([]);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');

  const handlePostInternship = (e) => {
    e.preventDefault();

    if (!title || !location || !duration) {
      alert('Please fill in all fields.');
      return;
    }

    const newInternship = {
      id: Date.now(),
      title,
      location,
      duration,
    };

    setInternships((prev) => [...prev, newInternship]);

    // Clear form
    setTitle('');
    setLocation('');
    setDuration('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Hello, {user?.firstName} 👋 (Recruiter)</h1>
        <SignOutButton>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Sign Out
          </button>
        </SignOutButton>
      </div>

      {/* Internship Form */}
      <form
        onSubmit={handlePostInternship}
        className="bg-white rounded-xl shadow p-6 space-y-4 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-2">Post New Internship</h2>

        <input
          type="text"
          placeholder="Internship Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 w-full rounded-lg"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-3 w-full rounded-lg"
        />

        <input
          type="number"
          placeholder="Duration (in months)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border p-3 w-full rounded-lg"
        />

        <button
          type="submit"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full"
        >
          📢 Post Internship
        </button>
      </form>

      {/* Posted Internships */}
      <h2 className="text-2xl font-semibold mb-4">Your Posted Internships</h2>

      <div className="space-y-4">
        {internships.length > 0 ? (
          internships.map((internship) => (
            <div key={internship.id} className="border rounded-xl p-5 bg-white shadow-sm">
              <h3 className="text-xl font-bold">{internship.title}</h3>
              <p className="text-gray-600 mt-1">📍 {internship.location}</p>
              <p className="text-gray-600">📅 {internship.duration} Months</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">You haven’t posted any internships yet.</p>
        )}
      </div>
    </div>
  );
}

export default RecruiterDashboard;
