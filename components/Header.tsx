import React, { useState } from 'react';
import { SectionDefinition, SectionId } from '../types';
import { ICONS } from '../constants';

interface HeaderProps {
  sectionDefs: SectionDefinition[];
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ sectionDefs, activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileNavigate = (sectionId: SectionId) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">
              ƒ(x) Academia
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {sectionDefs.map((def) => {
                const isActive = def.id === activeSection;
                return (
                  <button
                    key={def.id}
                    onClick={() => onNavigate(def.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {def.name}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? ICONS.close : ICONS.menu}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sectionDefs.map((def) => {
              const isActive = def.id === activeSection;
              return (
                <button
                  key={def.id}
                  onClick={() => handleMobileNavigate(def.id)}
                  className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {def.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;