import React from 'react';
import { useUser } from '@clerk/clerk-react';

function RecruiterDashboard() {
  const { user } = useUser();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Welcome, {user?.firstName} (Recruiter)</h1>
      {/* Form to post internship */}
    </div>
  );
}

export default RecruiterDashboard;