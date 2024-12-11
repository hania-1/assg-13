import { ClerkProvider, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default async function Header() {
    const authResult = await auth();
    const { userId } = authResult;
  return (
    <ClerkProvider>
    <div className='bg-gray-600 text-neutral-100'>
      <div className='container mx-auto flex items-center justify-between py-4'>
        <Link href='/'>Home</Link>
        <div>
          {userId ? (
            <div className='flex gap-4 items-center'>
              {/* <Link href='/dashboard'>Dashboard</Link> */}
              <UserButton afterSignOutUrl='/' />
            </div>
          ) : (
            <div className='flex gap-4 items-center '>
              <Link className='hover:underline hover:text-blue-300' href='/sign-up'>Sign up</Link>
              <Link className='hover:underline hover:text-blue-300' href='/sign-in'>Sign In</Link>
            </div>
          )}
        </div>
      </div>
    </div>
    </ClerkProvider>
  );
}
