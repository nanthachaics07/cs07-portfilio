import { describe, expect, it, vi } from 'vitest';

describe('main', () => {
  it('throws when #root is missing', async () => {
    vi.resetModules();
    document.body.innerHTML = '';
    await expect(import('./main')).rejects.toThrow(/Root element #root not found/);
  });
});
