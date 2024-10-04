import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/antd.registry';
import Header from '@/components/header';
import Capyversity from'@/components/capyversity';
import Footer from '@/components/footer';

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
    <html lang="en"  style={{backgroundColor: '#383434'}}>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Capyversity/>
          <Header/>
          {children}
          <Footer/>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
