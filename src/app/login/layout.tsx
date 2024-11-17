import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/antd.registry';
import Header from '@/components/header';
import Capyversity from'@/components/capyversity';
import Footer from '@/components/footer';
import Login from './page';
import LoginPage from './page';
import "@/app/css/App.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Capyversity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <LoginPage/>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
