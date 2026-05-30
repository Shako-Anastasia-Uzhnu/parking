import { z } from "zod";

export const createSpotSchema = z.object({
  name: z
    .string({ required_error: "Номер паркомісця обов'язковий" })
    .min(1, "Номер паркомісця обов'язковий")
    .max(100, "Максимум 10 символів")
    .trim(),
  description: z
    .string()
    .max(500, "Максимум 500 символів")
    .trim()
    .optional()
    .default(""),
  price: z
    .number({
      required_error: "Ціна обов'язкова",
      invalid_type_error: "Ціна має бути числом",
    })
    .min(0, "Ціна за годину не може бути від'ємною"),
  category: z.enum(["A", "B", "C", "VIP"], {
    errorMap: () => ({
      message: "Категорія зони має бути виключно: A, B, C або VIP",
    }),
  }),
  type: z.enum(["standard", "electric", "disabled", "motorcycle"], {
    errorMap: () => ({
      message: "Тип місця має бути: standard, electric, disabled або motorcycle",
    }),
  }),
  available: z.boolean().optional().default(true),
});

export const updateSpotSchema = createSpotSchema.partial();