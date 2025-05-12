import React from 'react';

const PortfolioPage = () => (
  <div className="bg-[#181818] min-h-screen flex flex-col items-center justify-center text-white p-8">
    <h1 className="text-4xl font-extrabold mb-6">My Portfolio</h1>
    <p className="text-lg mb-4">Explore my creative projects and designs:</p>
    <a 
      href="https://www.canva.com/design/DAGfAy4Nsnw/ikX-oSolFAydsd7nVBK-LQ/edit" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-superred text-2xl underline hover:text-white"
    >
      View My Complete Portfolio 
    </a>
  </div>
);

export default PortfolioPage;
