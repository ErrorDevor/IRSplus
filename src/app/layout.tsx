import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import "./globals.scss";

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter', 
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IRSplus - Tax | Incentives | Advisory',
  description: 'IRSplus - Tax | Incentives | Advisory.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>{children}</body>
    </html>
  );
}
