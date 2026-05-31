import { describe, expect, it } from 'vitest';
import { createContactFormSchema } from '../../lib/contactFormSchema';

const t = (key: string) => key;
const schema = createContactFormSchema(t);

describe('contact form schema', () => {
  it('accepts valid contact data and trims text fields', () => {
    const result = schema.safeParse({
      name: '  Alex  ',
      email: '  alex@example.com  ',
      phone: ' +357 99 123 456 ',
      message: '  I need a quote.  ',
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({
        name: 'Alex',
        email: 'alex@example.com',
        phone: '+357 99 123 456',
        message: 'I need a quote.',
      });
    }
  });

  it('rejects missing required fields and invalid email addresses', () => {
    const result = schema.safeParse({
      name: '',
      email: 'not-an-email',
      phone: '',
      message: '',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const messages = result.error.issues.map((issue) => issue.message);
      expect(messages).toContain('contact.form.validation.nameRequired');
      expect(messages).toContain('contact.form.validation.emailInvalid');
      expect(messages).toContain('contact.form.validation.messageRequired');
    }
  });
});
