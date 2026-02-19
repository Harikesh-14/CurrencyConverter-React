function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-white font-bold text-2xl tracking-wide">CurrencyConverter</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-indigo-200 transition-colors font-medium">Home</a>
          <a href="#" className="text-white hover:text-indigo-200 transition-colors font-medium">Features</a>
          <a href="#" className="text-white hover:text-indigo-200 transition-colors font-medium">About</a>
          <a href="#" className="text-white hover:text-indigo-200 transition-colors font-medium">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;