export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">Space Tourism</div>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/destinations" className="hover:underline">Destinations</a></li>
        <li><a href="/crew" className="hover:underline">Crew</a></li>
        <li><a href="/technology" className="hover:underline">Technology</a></li>
      </ul>
    </nav>
  );
}

