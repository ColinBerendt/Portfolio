// pages/about.tsx
'use client';

import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-blue-100 text-black">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg">
        Hi, I'm Colin Berendt! I'm a developer passionate about building impactful projects.
      </p>
      <p className="mt-4">
        Here’s some information about my background, skills, and experiences.
      </p>
    </div>
  );
};

export default About;