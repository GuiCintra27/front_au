import { z } from "zod";

export const productsSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve possuir pelo menos 3 caracteres." }),
  image_url: z.string().url({ message: "A imagem deve ter uma URL válida." }),
  description: z.string().min(10, {
    message: "A descrição deve possuir pelo menos 10 caracteres.",
  }),
  price: z
    .string({ message: "O valor deve ser maior que 1." })
    .transform((val) => {
      const number = parseFloat(val);
      if (number < 1) throw new Error("O valor deve ser maior que 1.");
      return number;
    }),
  category_id: z.string(),
  day_shift: z.enum(["DAY", "NIGHT", "ALL"]).default("ALL"),
});
