

// import React from 'react';
// import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import InternDashboard from './pages/InternDashboard';
// import RecruiterDashboard from './pages/RecruiterDashboard';
// import RoleSelection from './pages/RoleSelection';  // 🔥 added this

// const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// function App() {
//   return (
//     <ClerkProvider publishableKey={clerkPubKey}>
//       <BrowserRouter>
//         <SignedIn>
//           <Routes>
//             <Route path="/" element={<RoleSelection />} />
//             <Route path="/intern" element={<InternDashboard />} />
//             <Route path="/recruiter" element={<RecruiterDashboard />} />
//           </Routes>
//         </SignedIn>

//         <SignedOut>
//           <RedirectToSignIn />
//         </SignedOut>
//       </BrowserRouter>
//     </ClerkProvider>
//   );
// }

// export default App;

import React from 'react';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InternDashboard from './pages/InternDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import RoleSelection from './pages/RoleSelection';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <BrowserRouter>
          <SignedIn>
            <Routes>
              <Route path="/" element={<RoleSelection />} />
              <Route path="/intern" element={<InternDashboard />} />
              <Route path="/recruiter" element={<RecruiterDashboard />} />
            </Routes>
          </SignedIn>

          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </BrowserRouter>
      </div>
    </ClerkProvider>
  );
}

export default App;
