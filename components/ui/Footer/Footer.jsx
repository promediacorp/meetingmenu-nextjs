import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="custom-screen">
                <div className="mt-10 py-8 border-t border-gray-800 items-center justify-between sm:flex">
                    <p className="text-gray-400 text-center">© 2024 MeetingMenu. All rights reserved.</p>
                    <div className="flex items-center justify-center gap-x-6 text-gray-500 mt-6 sm:mt-0">
                        <Link href="/privacy" passHref>
                            <a className="hover:text-gray-200 duration-150">Privacy</a>
                        </Link>
                        <Link href="/support" passHref>
                            <a className="hover:text-gray-200 duration-150">Support</a>
                        </Link>
                        <Link href="/help" passHref>
                            <a className="hover:text-gray-200 duration-150">Help</a>
                        </Link>
                        <Link href="/terms" passHref>
                            <a className="hover:text-gray-200 duration-150">Terms</a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
