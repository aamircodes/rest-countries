import Header from './components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Country Explorer 🌎',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='garden'>
      <body className={`${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
