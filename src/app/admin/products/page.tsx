
'use client';

import { useEffect, useState } from 'react';
import { useUser, useFirestore } from '@/firebase';
import { useRouter } from 'next/navigation';
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useCollection } from '@/firebase/firestore/use-collection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { useForm, useFieldArray } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useMemoFirebase } from '@/firebase/provider';

const productSchema = z.object({
  name: z.string().min(1, { message: 'Le nom est requis.' }),
  price: z.coerce.number().min(0, { message: 'Le prix doit être positif.' }),
  description: z.string().min(10, { message: 'La description doit contenir au moins 10 caractères.' }),
  forWhom: z.string().min(1, { message: 'Ce champ est requis.' }),
  options: z.array(z.object({ value: z.string().min(1, { message: 'L\'option ne peut être vide.' }) })),
  extra: z.string().optional(),
});

type ProductFormValues = z.infer<typeof productSchema>;

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  forWhom: string;
  options: string[];
  extra?: string;
}

export default function ProductsAdminPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();
  const { toast } = useToast();
  
  const productsCollectionRef = useMemoFirebase(() => firestore ? collection(firestore, 'products') : null, [firestore]);
  const { data: products, isLoading } = useCollection<Product>(productsCollectionRef);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: '',
      price: 0,
      description: '',
      forWhom: '',
      options: [{value: ''}],
      extra: '',
    },
  });
  
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "options"
  });

  useEffect(() => {
    if (!isUserLoading && (!user || user.email !== 'louloucvrr@gmail.com')) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  useEffect(() => {
    if (editingProduct) {
      form.reset({
        name: editingProduct.name,
        price: editingProduct.price,
        description: editingProduct.description,
        forWhom: editingProduct.forWhom,
        options: editingProduct.options.map(o => ({ value: o })),
        extra: editingProduct.extra,
      });
    } else {
      form.reset({
        name: '',
        price: 0,
        description: '',
        forWhom: '',
        options: [{value: ''}],
        extra: '',
      });
    }
  }, [editingProduct, form]);


  const handleAddNew = () => {
    setEditingProduct(null);
    form.reset();
    setIsDialogOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsDialogOpen(true);
  };
  
  const handleDelete = async (id: string) => {
    if (!firestore) return;
    try {
      await deleteDoc(doc(firestore, 'products', id));
      toast({
        title: 'Formule supprimée',
        description: 'La formule a été supprimée avec succès.',
      });
    } catch (error) {
      console.error('Error deleting product:', error);
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'Une erreur est survenue lors de la suppression.',
      });
    }
  };

  const onSubmit = async (values: ProductFormValues) => {
    if (!firestore) return;
    const productData = {
        ...values,
        options: values.options.map(o => o.value)
    };
    try {
      if (editingProduct) {
        const docRef = doc(firestore, 'products', editingProduct.id);
        await updateDoc(docRef, productData);
        toast({
          title: 'Formule modifiée',
          description: 'La formule a été mise à jour avec succès.',
        });
      } else {
        await addDoc(collection(firestore, 'products'), productData);
        toast({
          title: 'Formule ajoutée',
          description: 'La nouvelle formule a été ajoutée avec succès.',
        });
      }
      setIsDialogOpen(false);
      setEditingProduct(null);
      form.reset();
    } catch (error) {
      console.error('Error saving product:', error);
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: 'Une erreur est survenue lors de l\'enregistrement.',
      });
    }
  };


  if (isUserLoading || !user || user.email !== 'louloucvrr@gmail.com') {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Gérer les formules</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddNew}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Ajouter une formule
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProduct ? 'Modifier la formule' : 'Ajouter une formule'}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Nom</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="price" render={({ field }) => (
                    <FormItem><FormLabel>Prix (€)</FormLabel><FormControl><Input type="number" {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <FormField control={form.control} name="description" render={({ field }) => (
                    <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                 <FormField control={form.control} name="forWhom" render={({ field }) => (
                    <FormItem><FormLabel>Pour qui ?</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )}/>
                <div>
                  <FormLabel>Options incluses</FormLabel>
                  {fields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={form.control}
                      name={`options.${index}.value`}
                      render={({ field }) => (
                        <FormItem className="flex items-center gap-2 mt-2">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <Button type="button" variant="destructive" size="icon" onClick={() => remove(index)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ value: "" })}>
                    Ajouter une option
                  </Button>
                </div>
                 <FormField control={form.control} name="extra" render={({ field }) => (
                    <FormItem><FormLabel>Options supplémentaires (ex: 30€/page)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )}/>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">Annuler</Button>
                  </DialogClose>
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Enregistrement...' : 'Enregistrer'}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="mt-6">
          {isLoading ? (
            <p>Chargement...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Prix</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products && products.length > 0 ? products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.price}€</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                           <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                            <AlertDialogDescription>
                              Cette action est irréversible. La formule sera définitivement supprimée.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(product.id)}>Supprimer</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                )) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center">Aucune formule trouvée.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
