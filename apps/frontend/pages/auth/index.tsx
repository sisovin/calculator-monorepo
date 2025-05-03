import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AuthPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Authentication</h1>
        <p>Please log in to access your account.</p>
        {/* Add your authentication form here */}
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
