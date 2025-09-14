export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-black/70 to-gray-900 text-gray-400 py-8 border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Bottom Section: Copyright */}
        <div className="flex justify-center items-center">
          <p className="text-sm sm:text-base">
            © {currentYear} Prodip Sarker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
