import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useAntiCopy } from './useAntiCopy';

describe('useAntiCopy', () => {
  it('blocks selectstart and contextmenu while mounted', () => {
    const addSpy = vi.spyOn(document, 'addEventListener');
    const removeSpy = vi.spyOn(document, 'removeEventListener');

    const { unmount } = renderHook(() => useAntiCopy());

    expect(addSpy).toHaveBeenCalledWith('selectstart', expect.any(Function));
    expect(addSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function));

    unmount();

    expect(removeSpy).toHaveBeenCalledWith('selectstart', expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith('contextmenu', expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
