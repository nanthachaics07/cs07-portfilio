import { describe, expect, it } from 'vitest';
import { asset } from './asset';

describe('asset', () => {
  it('prefixes public paths with the Vite base URL', () => {
    expect(asset('images/safe001.jpg')).toBe('/cs07-portfilio/images/safe001.jpg');
    expect(asset('pages/cv.html')).toBe('/cs07-portfilio/pages/cv.html');
  });
});
