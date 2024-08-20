import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="custom-screen">
                <div className="mt-10 py-8 border-t border-gray-800 items-center justify-between sm:flex">
                    <p className="text-gray-400 text-center">© 2024 MeetingMenu. All rights reserved.</p>
                    <div className="flex items-center justify-center gap-x-6 text-gray-500 mt-6 sm:mt-0">
                        <Link href="/privacy" className="hover:text-gray-200 duration-150">
                            Privacy
                        </Link>
                        <Link href="/support" className="hover:text-gray-200 duration-150">
                            Support
                        </Link>
                        <Link href="/help" className="hover:text-gray-200 duration-150">
                            Help
                        </Link>
                        <Link href="/terms" className="hover:text-gray-200 duration-150">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
