import "./globals.css";
import { Footer, Navbar } from "./components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='relative'>
        <ToastContainer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
