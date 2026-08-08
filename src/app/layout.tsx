import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ilham Taufiq Ghifari | Data Science Student & BI Analyst Portfolio',
  description: 'Portfolio of Ilham Taufiq Ghifari, Data Science Student at ULBI. Specializing in Machine Learning, Business Intelligence, Power BI, and Web Analytics.',
  keywords: [
    'Ilham Taufiq Ghifari',
    'Data Science Portfolio',
    'BI Analyst Bandung',
    'ULBI Data Science',
    'Machine Learning Engineer',
    'Power BI Dashboard',
    'Streamlit ML App',
    'Bandung Data Scientist'
  ],
  authors: [{ name: 'Ilham Taufiq Ghifari' }],
  openGraph: {
    title: 'Ilham Taufiq Ghifari | Data Science Student & BI Analyst',
    description: 'Transforming Complex Data into Actionable Business Insights & ML Solutions at ULBI.',
    type: 'website',
    locale: 'id_ID',
    url: 'https://ilhamtaufiqghifari.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <body className="bg-navy-950 text-text-primary antialiased selection:bg-electric-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
