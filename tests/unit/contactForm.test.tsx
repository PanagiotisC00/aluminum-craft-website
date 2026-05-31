import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ContactForm from '../../components/ContactForm';

vi.mock('next-i18next/pages', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'contact.title': 'Get In Touch',
        'contact.subtitle': 'Ready to Start Your Project?',
        'contact.description': 'Contact us for a free consultation and quote.',
        'contact.cardTitles.getInTouch': 'Get In Touch',
        'contact.cardTitles.sendMessage': 'Send Message',
        'contact.labels.phone': 'PHONE',
        'contact.labels.email': 'EMAIL',
        'contact.labels.location': 'LOCATION',
        'contact.labels.hours': 'HOURS',
        'contact.info.phone': '+357 99 123 456',
        'contact.info.email': 'info@example.com',
        'contact.info.address': 'Nicosia, Cyprus',
        'contact.info.hours': 'Mon-Fri: 8:00 - 17:00',
        'contact.info.facebook': 'https://www.facebook.com/example',
        'contact.info.instagram': 'https://www.instagram.com/example',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'Email Address',
        'contact.form.phone': 'Phone Number',
        'contact.form.message': 'Project Details',
        'contact.form.messagePlaceholder': 'Tell us about your aluminum fabrication needs...',
        'contact.form.submit': 'Send Message',
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Message sent successfully!',
        'contact.form.error': 'Failed to send message. Please try again.',
        'contact.form.validation.nameRequired': 'Name is required',
        'contact.form.validation.emailRequired': 'Email is required',
        'contact.form.validation.emailInvalid': 'Please enter a valid email address',
        'contact.form.validation.messageRequired': 'Message is required',
        'footer.followUs': 'Follow Us',
      };

      return translations[key] ?? key;
    },
  }),
}));

describe('ContactForm', () => {
  beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_FORMSPREE_ID', 'your_formspree_id');
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('shows validation errors and does not submit empty contact data', async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('blocks live submissions when the local placeholder Formspree ID is configured', async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/full name/i), 'Alex');
    await user.type(screen.getByLabelText(/email address/i), 'alex@example.com');
    await user.type(screen.getByLabelText(/project details/i), 'Please quote a railing project.');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText('Failed to send message. Please try again.')).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('posts validated contact data to Formspree when a form ID is explicitly configured', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });

    vi.stubEnv('NEXT_PUBLIC_FORMSPREE_ID', 'test-form-id');
    vi.stubGlobal('fetch', fetchMock);

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/full name/i), 'Alex');
    await user.type(screen.getByLabelText(/email address/i), 'alex@example.com');
    await user.type(screen.getByLabelText(/project details/i), 'Please quote a railing project.');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        'https://formspree.io/f/test-form-id',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'Alex',
            email: 'alex@example.com',
            phone: '',
            message: 'Please quote a railing project.',
          }),
        }),
      );
    });
    expect(await screen.findByText('Message sent successfully!')).toBeInTheDocument();
  });
});
