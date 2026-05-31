import { z } from 'zod';

type Translate = (key: string) => string;

export const createContactFormSchema = (t: Translate) =>
  z.object({
    name: z.string().trim().min(1, t('contact.form.validation.nameRequired')),
    email: z
      .string()
      .trim()
      .min(1, t('contact.form.validation.emailRequired'))
      .email(t('contact.form.validation.emailInvalid')),
    phone: z.string().trim().optional(),
    message: z.string().trim().min(1, t('contact.form.validation.messageRequired')),
  });

export type ContactFormData = z.infer<ReturnType<typeof createContactFormSchema>>;
