import React, { useState } from 'react';
import TechStack from './components/TechStack/TechStack';
import Header from './components/Header/Header';
import TaskWiz from './components/TaskWiz/TaskWiz';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-50">
      {/* Fixed Header */}
      <Header />

      {/* Main content flex-grow to ensure it fills available space */}
      <TaskWiz/>

      {/* Fixed TechStack */}
      <TechStack />
    </div>
  );
}

export default App;
