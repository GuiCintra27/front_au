import { z } from "zod";

export const categoriesSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve possuir pelo menos 3 caracteres." }),
  image_url: z.string().url({ message: "A imagem deve ter uma URL válida." }),
  day_shift: z.enum(["DAY", "NIGHT", "ALL"]).default("ALL"),
});
