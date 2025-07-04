import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';

function InternDashboard() {
  const { user } = useUser();
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    // Fetch internships from Firestore
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Welcome, {user?.firstName} (Intern)</h1>
      {/* Internship listing */}
    </div>
  );
}

export default InternDashboard;