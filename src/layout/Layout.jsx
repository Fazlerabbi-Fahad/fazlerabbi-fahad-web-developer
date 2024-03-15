import Footer from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
      <div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
