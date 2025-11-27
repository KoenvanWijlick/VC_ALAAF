import { theme } from '../theme';

describe('Theme Configuration', () => {
  test('theme object is defined', () => {
    expect(theme).toBeDefined();
  });

  test('theme has correct font family', () => {
    expect(theme.fontFamily).toBe("'Inter', sans-serif");
  });

  test('theme has correct heading configuration', () => {
    expect(theme.headings?.fontFamily).toBe("'Inter', sans-serif");
    expect(theme.headings?.fontWeight).toBe("600");
  });

  test('theme has correct default radius', () => {
    expect(theme.defaultRadius).toBe("md");
  });

  test('theme has VC-alaaf brand colors', () => {
    expect(theme.colors).toHaveProperty('navy');
    expect(theme.colors).toHaveProperty('cyan');
  });

  test('navy color palette has correct primary color', () => {
    expect(theme.colors?.navy).toBeDefined();
    expect(theme.colors?.navy?.[6]).toBe('#002856');
  });

  test('cyan color palette has correct secondary color', () => {
    expect(theme.colors?.cyan).toBeDefined();
    expect(theme.colors?.cyan?.[6]).toBe('#0093d0');
  });

  test('Paper component has correct default props', () => {
    expect(theme.components?.Paper?.defaultProps).toEqual({
      shadow: 'sm',
      radius: 'md',
      p: 'md',
    });
  });
});
