import "./App.css"
// App.js
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate,
  Link,
  useNavigate,
  useLocation,
  Outlet, 
  useParams
} from 'react-router-dom';

// Main App Component
function App() {
  return (
    <Router>
      <div className="app">
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/users" style={{ marginRight: '10px' }}>Users</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        
        <Routes>
          {/* 1. REDIRECTING THE USER - Redirect from root to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          
          {/* Home Route */}
          <Route path="/home" element={<Home />} />
          
          {/* 2. WORKING WITH NESTED ROUTES - Users section with nested routes */}
          <Route path="/users" element={<UsersLayout />}>
            <Route index element={<UsersList />} /> {/* Default nested route */}
            <Route path=":userId" element={<UserProfile />}>
              {/* Deeper nesting for user details */}
              <Route path="profile" element={<UserDetails />} />
              <Route path="settings" element={<UserSettings />} />
            </Route>
          </Route>
          
          {/* Dashboard with programmatic navigation */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* 3. ADDING A "NOT FOUND" PAGE - Catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// Home Component
function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <p>Welcome to the application!</p>
    </div>
  );
}

// 2. WORKING WITH NESTED ROUTES - Layout component for users section
function UsersLayout() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Users Management</h1>
      {/* Navigation for nested routes */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/users" style={{ marginRight: '10px' }}>All Users</Link>
        <Link to="/users/1/profile" style={{ marginRight: '10px' }}>User 1</Link>
        <Link to="/users/2/profile">User 2</Link>
      </nav>
      
      {/* Outlet renders the nested child routes */}
      <div style={{ border: '1px solid #ddd', padding: '15px' }}>
        <Outlet />
      </div>
    </div>
  );
}

// Users List Component
function UsersList() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
  ];

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}/profile`}>
              {user.name} - {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// User Profile Component (nested route)
function UserProfile() {
  // 5. WORKING WITH QUERY PARAMETERS - Accessing query parameters
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const editMode = searchParams.get('edit') === 'true';
  
  return (
    <div>
      <h2>User Profile</h2>
      
      {/* Nested navigation within user profile */}
      <nav style={{ marginBottom: '15px' }}>
        <Link to="profile" style={{ marginRight: '10px' }}>Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      
      {/* Display query parameter */}
      {editMode && <p style={{ color: 'green' }}>Edit mode is enabled!</p>}
      
      {/* Outlet for deeper nested routes */}
      <Outlet />
    </div>
  );
}

// User Details Component (deeply nested)
function UserDetails() {
  // Access route parameters
  const { userId } = useParams();
  
  return (
    <div>
      <h3>User Details for ID: {userId}</h3>
      <p>This is the profile page for user {userId}</p>
      
      {/* 5. WORKING WITH QUERY PARAMETERS - Adding query parameters to links */}
      <Link to="?edit=true" style={{ marginRight: '10px' }}>
        Enable Edit Mode
      </Link>
      <Link to="?edit=false">
        Disable Edit Mode
      </Link>
    </div>
  );
}

// User Settings Component
function UserSettings() {
  const { userId } = useParams();
  
  return (
    <div>
      <h3>Settings for User {userId}</h3>
      <p>User settings content goes here...</p>
    </div>
  );
}

// 4. IMPLEMENTING PROGRAMMATIC NAVIGATION - Dashboard Component
function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleUserNavigation = (userId) => {
    // Programmatic navigation with state
    navigate(`/users/${userId}/profile`, { 
      state: { fromDashboard: true, timestamp: new Date().toISOString() }
    });
  };
  
  const handleGoBack = () => {
    // Go back in history
    navigate(-1);
  };
  
  // Access navigation state
  const navigationState = location.state;
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      
      {navigationState?.fromDashboard && (
        <p>You came from dashboard at {navigationState.timestamp}</p>
      )}
      
      <div style={{ margin: '20px 0' }}>
        <button onClick={() => handleUserNavigation(1)} style={{ marginRight: '10px' }}>
          Go to User 1 (Programmatic)
        </button>
        <button onClick={() => handleUserNavigation(2)} style={{ marginRight: '10px' }}>
          Go to User 2 (Programmatic)
        </button>
        <button onClick={handleGoBack}>
          Go Back
        </button>
      </div>
      
      <div>
        <button onClick={() => navigate('/nonexistent-page')}>
          Test Not Found Page
        </button>
      </div>
    </div>
  );
}

// 3. ADDING A "NOT FOUND" PAGE
function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate('/home')}>
        Go Back to Home
      </button>
    </div>
  );
}

export default App;