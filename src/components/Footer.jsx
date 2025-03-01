
const Footer = () => {
  return (
    <div className="bg-footer px-16 py-8 w-full text-gray-400 z-50">
        <p className="mb-6">Questions? Call 000-800-919-1743 (Toll Free)</p>
        <div className="underline grid grid-cols-2 md:grid-cols-4 gap-4 text-sm my-4">
            <ul className="list-none">
                <li className="mb-2"><a href="#" className="hover:text-white">FAQ</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Cookie Preferences</a></li>
            </ul>
            <ul className="list-none">
                <li className="mb-2"><a href="#" className="hover:text-white">Help Centre</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Corporate Information</a></li>
            </ul>
            <ul className="list-none">
                <li className="mb-2"><a href="#" className="hover:text-white">Terms of Use</a></li>
            </ul>
            <ul className="list-none">
                <li className="mb-2"><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
        </div>
        <div className="mt-8 text-sm">
            <p>Netflix India</p>
        </div>
    </div>
  )
}

export default Footer