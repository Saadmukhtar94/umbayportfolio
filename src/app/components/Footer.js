export default function Footer() {
    return (
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Unity Developer Portfolio. All rights reserved.</p>
        </div>
      </footer>
    );
  }