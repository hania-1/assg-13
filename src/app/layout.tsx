import {
  ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton
} from '@clerk/nextjs'
import './globals.css'
import Header from '@/components/Header'
import Dashboardpage from './About/Dashboard/page'
// import About from './About/page'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
           {/* <SignedOut>
            <SignInButton />
          </SignedOut> 
           <SignedIn> */}
            {/* <UserButton /> */}
          {/* </SignedIn>  */}
          <Header />
<Dashboardpage />
          {/* <About /> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}