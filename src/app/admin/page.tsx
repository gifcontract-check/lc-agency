
'use client';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && (!user || user.email !== 'louloucvrr@gmail.com')) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user || user.email !== 'louloucvrr@gmail.com') {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Bienvenue dans votre Pannel admin</h1>
        <p className="text-lg text-muted-foreground mb-8">
          C'est ici que vous pourrez gérer le contenu de votre site.
        </p>
        <div className="grid gap-4">
          <Link href="/admin/testimonials">
            <Button variant="outline" className="w-full justify-start">Gérer les témoignages</Button>
          </Link>
        </div>
    </div>
  );
}
