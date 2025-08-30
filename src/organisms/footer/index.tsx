const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 lg:left-64 bg-gray-800 text-white text-center py-3 z-50">
      © {new Date().getFullYear()} MyAdmin. All rights reserved.
    </footer>
  );
};

export default Footer;
