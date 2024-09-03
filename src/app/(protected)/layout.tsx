import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // Add any other weights you need
});

export default async function ProtectedLayout({ 
  children 
}: { 
  children: React.ReactNode
}) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <div className={`h-full bg-white overflow-y-auto ${poppins.className}`}>
        <div className="flex flex-col py-4 gap-10 items-center justify-center">
          {children}
          <Toaster richColors closeButton />
        </div>
      </div>
    </SessionProvider>
  )
}