import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { StoreProvider } from "./redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-commerce",
  description: "Ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}