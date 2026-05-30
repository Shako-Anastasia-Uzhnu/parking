import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({ required_error: "Ім'я обов'язкове" })
    .min(2, "Мінімум 2 символи")
    .max(50, "Максимум 50 символів")
    .trim(),
  email: z
    .string({ required_error: "Email адреса обов'язкова" })
    .email("Введено некоректний формат email адреси")
    .toLowerCase()
    .trim(),
  password: z
    .string({ required_error: "Пароль є обов'язковим" })
    .min(6, "Мінімум 6 символів")
    .max(100, "Максимум 100 символів"),
});

export const updateRoleSchema = z.object({
  role: z.enum(["user", "admin"], {
    errorMap: () => ({
      message: "Роль має бути 'user' або 'admin'",
    }),
  }),
});