import { createRequire } from 'node:module';
import { afterEach, describe, expect, it, vi } from 'vitest';

const require = createRequire(import.meta.url);
const nextConfig = require('../../next.config.js');

describe('security headers', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('does not allow eval in production script CSP', async () => {
    vi.stubEnv('NODE_ENV', 'production');

    const headerGroups = await nextConfig.headers();
    const globalHeaders = headerGroups.find((group: { source: string }) => group.source === '/:path*');
    const csp = globalHeaders.headers.find(
      (header: { key: string }) => header.key === 'Content-Security-Policy',
    ).value;

    expect(csp).not.toContain("'unsafe-eval'");
  });
});
