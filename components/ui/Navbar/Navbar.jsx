import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import NavHeader from '../NavHeader';
import NavLink from '../NavLink';

const Navbar = () => {
  const [state, setState] = useState(false);
  const menuBtnEl = useRef(null);

  const navigation = [
    // { name: "50% Off for a Limited Time", href: "/#features" },
    // { name: "Pricing", href: "/#pricing" },
    // { name: "Testimonials", href: "/#testimonials" },
    // { name: "FAQs", href: "/#faqs" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuBtnEl.current && !menuBtnEl.current.contains(e.target)) {
        setState(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="relative pb-0 mb-0"> {/* Removed padding-bottom and margin-bottom */}
      <div className="custom-screen md:hidden">
        <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
      </div>
      <nav className={`pb-0 md:text-sm md:static md:block ${state ? "bg-gray-900 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900" : "hidden"}`}> {/* Removed padding-bottom */}
        <div className="custom-screen items-center md:flex">
          <NavHeader state={state} onClick={() => setState(!state)} />
          <div className={`flex-1 items-center mt-8 text-gray-300 md:font-medium md:mt-0 md:flex ${state ? 'block' : 'hidden'}`}>
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {
                navigation.map((item, idx) => (
                  <li key={idx} className="hover:text-gray-50">
                    <Link href={item.href} className="block">
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              <Link href="/help" className="block hover:text-gray-50">
                100% Money Back Guarantee
              </Link>
              <NavLink href="https://apps.apple.com/us/app/meetingmenu/id6538714770" className="flex items-center justify-center gap-x-1 text-sm text-white font-medium custom-btn-bg border border-gray-500 active:bg-gray-900 md:inline-flex">
                Download Now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
