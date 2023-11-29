'use client';
import React from 'react';
import { useSession } from 'next-auth/react';

function Page() {
  const session = useSession();

  return (
    <div className="h-screen w-screen flex items-center justify-center p-5">
      <h1>{JSON.stringify(session)}</h1>
    </div>
  );
}

export default Page;