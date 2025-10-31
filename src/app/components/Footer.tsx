export default function Footer() {
    return (
        <footer className="bg-[#18151f] border-t border-[#2a2731] p-6 text-center text-xs text-gray-500">
            <p>Built by hand. Powered by intent. Protected by trust.</p>
            <p className="mt-2">© {new Date().getFullYear()} Bryan Blankenburg</p>
        </footer>
    );
}