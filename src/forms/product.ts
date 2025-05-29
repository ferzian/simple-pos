import { Product } from './../data/mock/products';
import { z } from 'zod';

export const categoryFormSchema = z.object({
  name: z.string().min(3).max(100),
  price: z.number().min(0, "Price must be a positive number"),
  categoryId: z.string().uuid("Invalid category ID"),
});

export type ProductFormSchema = z.infer<typeof categoryFormSchema>;