import Footer from "../organisms/footer";
import Header from "../organisms/header";
import Sidebar from "../organisms/sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col ml-0 lg:ml-64">
        <Header />

        <main className="flex-1 bg-gray-100 p-6 mt-16 mb-12 overflow-auto">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
