import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Common/Button';

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <>
      <section>
        <h1>Welcome to MyApp</h1>
        <p>A modern React application with authentication</p>
        {!isAuthenticated() ? (
          <>
            <Link to="/signup">
              <Button>
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button>
                Login
              </Button>
            </Link>
          </>
        ) : (
          <>
            <p>Hello, {user?.name}!</p>
            <Link to="/dashboard">
              <Button>
                Go to Dashboard
              </Button>
            </Link>
          </>
        )}
      </section>
      
      <section>
        <div>
          <h2>Features</h2>
          <div>
            {[
              { title: 'Authentication', desc: 'Secure login/logout system' },
              { title: 'Lazy Loading', desc: 'Optimized performance' },
              { title: 'React Hooks', desc: 'Modern React patterns' }
            ].map((feature, index) => (
              <React.Fragment key={index}>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;