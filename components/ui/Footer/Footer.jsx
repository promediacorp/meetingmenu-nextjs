const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="custom-screen">
                <div className="mt-10 py-8 border-t border-gray-800 items-center justify-between sm:flex">
                    <p className="text-gray-400 text-center">© 2024 MeetingMenu. All rights reserved.</p>
                    <div className="flex items-center justify-center gap-x-6 text-gray-500 mt-6 sm:mt-0">
                        <a href="/privacy" className="hover:text-gray-200 duration-150">Privacy Policy</a>
                        <a href="/support" className="hover:text-gray-200 duration-150">Support</a>
                        <a href="/help" className="hover:text-gray-200 duration-150">Help</a>
                        <a href="/terms" className="hover:text-gray-200 duration-150">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
