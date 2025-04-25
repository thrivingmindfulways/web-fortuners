import RootLayout from '@/components/layout/RootLayout'

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootLayout>{children}</RootLayout>
}