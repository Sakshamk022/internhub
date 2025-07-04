import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InternDashboard from './pages/InternDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <SignedIn>
          <Routes>
            <Route path="/intern" element={<InternDashboard />} />
            <Route path="/recruiter" element={<RecruiterDashboard />} />
          </Routes>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;