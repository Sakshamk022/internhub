

// import React, { useEffect, useState } from 'react';
// import { useUser, SignOutButton } from '@clerk/clerk-react';

// function InternDashboard() {
//   const { user } = useUser();

//   // Mock internships data
//   const mockInternships = [
//     { id: 1, title: 'Frontend Developer at ABC', location: 'Remote', duration: 6 },
//     { id: 2, title: 'Backend Developer at XYZ', location: 'Delhi', duration: 2 },
//     { id: 3, title: 'Data Analyst at DEF', location: 'Mumbai', duration: 6 },
//   ];

//   const [internships, setInternships] = useState([]);
//   const [applied, setApplied] = useState([]);
//   const [starred, setStarred] = useState([]);
//   const [filterLocation, setFilterLocation] = useState('');
//   const [filterDuration, setFilterDuration] = useState('');

//   useEffect(() => {
//     setInternships(mockInternships);
//   }, []);

//   const handleApply = (id) => {
//     setApplied((prev) => [...prev, id]);
//   };

//   const handleStar = (id) => {
//     setStarred((prev) =>
//       prev.includes(id) ? prev.filter((starId) => starId !== id) : [...prev, id]
//     );
//   };

//   const filteredInternships = internships.filter((internship) => {
//     return (
//       (!filterLocation || internship.location === filterLocation) &&
//       (!filterDuration || internship.duration === parseInt(filterDuration))
//     );
//   });

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Welcome, {user?.firstName} (Intern)</h1>

//       {/* Filters */}
//       <div className="flex gap-4 mb-4">
//         <select
//           value={filterLocation}
//           onChange={(e) => setFilterLocation(e.target.value)}
//           className="border px-2 py-1"
//         >
//           <option value="">All Locations</option>
//           <option value="Remote">Remote</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Mumbai">Mumbai</option>
//         </select>

//         <select
//           value={filterDuration}
//           onChange={(e) => setFilterDuration(e.target.value)}
//           className="border px-2 py-1"
//         >
//           <option value="">All Durations</option>
//           <option value="2">2 Months</option>
//           <option value="6">6 Months</option>
//         </select>
//       </div>

//       {/* Internship listing */}
//       <h2 className="text-xl font-semibold mb-2">Available Internships:</h2>
//       <ul className="space-y-4">
//         {filteredInternships.map((internship) => (
//           <li key={internship.id} className="border p-3 rounded">
//             <h3 className="font-bold">{internship.title}</h3>
//             <p>Location: {internship.location}</p>
//             <p>Duration: {internship.duration} Months</p>

//             <div className="flex gap-3 mt-2">
//               <button
//                 onClick={() => handleApply(internship.id)}
//                 className={`px-3 py-1 rounded ${
//                   applied.includes(internship.id)
//                     ? 'bg-green-500 text-white'
//                     : 'bg-blue-500 text-white'
//                 }`}
//               >
//                 {applied.includes(internship.id) ? 'Applied' : 'Apply'}
//               </button>

//               <button
//                 onClick={() => handleStar(internship.id)}
//                 className={`px-3 py-1 rounded border ${
//                   starred.includes(internship.id) ? 'border-yellow-500 text-yellow-500' : 'border-gray-400'
//                 }`}
//               >
//                 {starred.includes(internship.id) ? '★ Starred' : '☆ Star'}
//               </button>
//             </div>
//           </li>
//         ))}

//         {filteredInternships.length === 0 && <p>No internships match your filters.</p>}
//       </ul>

//       <SignOutButton>
//         <button className="mt-6 px-4 py-2 bg-red-500 text-white rounded">Sign Out</button>
//       </SignOutButton>
//     </div>
//   );
// }

// export default InternDashboard;

import React, { useEffect, useState } from 'react';
import { useUser, SignOutButton } from '@clerk/clerk-react';

function InternDashboard() {
  const { user } = useUser();

  const mockInternships = [
    { id: 1, title: 'Frontend Developer at ABC', location: 'Remote', duration: 6 },
    { id: 2, title: 'Backend Developer at XYZ', location: 'Delhi', duration: 2 },
    { id: 3, title: 'Data Analyst at DEF', location: 'Mumbai', duration: 6 },
  ];

  const [internships, setInternships] = useState([]);
  const [applied, setApplied] = useState([]);
  const [starred, setStarred] = useState([]);
  const [filterLocation, setFilterLocation] = useState('');
  const [filterDuration, setFilterDuration] = useState('');

  useEffect(() => {
    setInternships(mockInternships);
  }, []);

  const handleApply = (id) => {
    setApplied((prev) => [...prev, id]);
  };

  const handleStar = (id) => {
    setStarred((prev) =>
      prev.includes(id) ? prev.filter((starId) => starId !== id) : [...prev, id]
    );
  };

  const filteredInternships = internships.filter((internship) => {
    return (
      (!filterLocation || internship.location === filterLocation) &&
      (!filterDuration || internship.duration === parseInt(filterDuration))
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Hello, {user?.firstName} 👋</h1>
        <SignOutButton>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Sign Out
          </button>
        </SignOutButton>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </select>

        <select
          value={filterDuration}
          onChange={(e) => setFilterDuration(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option value="">All Durations</option>
          <option value="2">2 Months</option>
          <option value="6">6 Months</option>
        </select>
      </div>

      {/* Internship listing */}
      <h2 className="text-2xl font-semibold mb-4">Available Internships</h2>

      <div className="space-y-4">
        {filteredInternships.map((internship) => (
          <div key={internship.id} className="border rounded-xl p-5 bg-white shadow-sm">
            <h3 className="text-xl font-semibold">{internship.title}</h3>
            <p className="text-gray-600 mt-1">
              📍 {internship.location} &nbsp; | &nbsp; 📅 {internship.duration} Months
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleApply(internship.id)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  applied.includes(internship.id)
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700 transition'
                }`}
              >
                {applied.includes(internship.id) ? '✔ Applied' : 'Apply'}
              </button>

              <button
                onClick={() => handleStar(internship.id)}
                className={`px-4 py-2 rounded-lg border font-medium ${
                  starred.includes(internship.id)
                    ? 'border-yellow-500 text-yellow-500'
                    : 'border-gray-400 text-gray-600'
                }`}
              >
                {starred.includes(internship.id) ? '★ Starred' : '☆ Star'}
              </button>
            </div>
          </div>
        ))}

        {filteredInternships.length === 0 && (
          <p className="text-gray-500">No internships match your filters.</p>
        )}
      </div>
    </div>
  );
}

export default InternDashboard;
