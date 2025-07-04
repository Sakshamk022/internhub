import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ role, children }) => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.role;

  if (!user || userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
};