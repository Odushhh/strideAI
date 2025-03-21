import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import TallyForm from './TallyForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleOpenForm = () => {
    setShowForm(true);
    if (isOpen) setIsOpen(false); // Close mobile menu if open
  };

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Why StrideAI', href: '#why-strideai' },
    { label: 'How It Works', href: '#how-it-works' },
    // { label: 'Benefits', href: '#benefits' },
    // { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed w-full top-0 z-50 border-b border-gray-200 transition-all duration-300',
      scrolled ? 'bg-[#F9F8F1] py-3' : 'bg-transparent py-5'
    )}>
      <TallyForm isOpen={showForm} onClose={() => setShowForm(false)} />
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="relative h-8 w-8 flex items-center justify-center">
            {/*
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 8L16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            */}
            <div className="font-bold text-3xl tracking-tight leading-none text-[#111827]">
              Stride<span className="text-[#3D7B52]">AI</span>
            </div>

          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#3D7B52] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button 
            onClick={handleOpenForm}
            className="bg-[#3D7B52] hover:bg-[#2E5E3E] text-white font-medium rounded-full flex items-center justify-center"
          >
            <span>Join Waitlist</span>
            <Send size={14} className="ml-1" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute w-full bg-[#F9F8F1] shadow-lg transition-all duration-300 ease-in-out transform',
          isOpen ? 'opacity-100 top-full' : 'opacity-0 -top-96'
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-base font-medium text-gray-700 hover:text-[#3D7B52] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              onClick={handleOpenForm}
              className="bg-[#3D7B52] hover:bg-[#6C3558] text-white font-medium rounded-full mt-2 w-full"
            >
              <span>Join Waitlist</span>
              <Send size={14} className="ml-1" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
