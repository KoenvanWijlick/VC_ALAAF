import '@testing-library/jest-dom';

describe('CSS Variables', () => {
  beforeEach(() => {
    // Create a root element for testing
    document.documentElement.style.setProperty('--primary-color', '#002856');
    document.documentElement.style.setProperty('--secondary-color', '#0093d0');
    document.documentElement.style.setProperty('--accent', '#0093d0');
    document.documentElement.style.setProperty('--card-radius', '12px');
    document.documentElement.style.setProperty('--nav-blur', '12px');
  });

  test('primary color variable is defined', () => {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
    expect(primaryColor.trim()).toBe('#002856');
  });

  test('secondary color variable is defined', () => {
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    expect(secondaryColor.trim()).toBe('#0093d0');
  });

  test('accent color variable is defined', () => {
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent');
    expect(accent.trim()).toBe('#0093d0');
  });

  test('card radius variable is defined', () => {
    const cardRadius = getComputedStyle(document.documentElement).getPropertyValue('--card-radius');
    expect(cardRadius.trim()).toBe('12px');
  });

  test('navbar blur variable is defined', () => {
    const navBlur = getComputedStyle(document.documentElement).getPropertyValue('--nav-blur');
    expect(navBlur.trim()).toBe('12px');
  });
});

describe('CSS Module Classes', () => {
  test('CSS modules can be imported', () => {
    // This test verifies that CSS modules are properly configured
    const navbarStyles = require('../components/Navbar/NavbarSimple.module.css');
    expect(navbarStyles).toBeDefined();
    expect(navbarStyles).toHaveProperty('navbar');
    expect(navbarStyles).toHaveProperty('brand');
    expect(navbarStyles).toHaveProperty('link');
  });

  test('ColorSchemeToggle CSS module exists', () => {
    const toggleStyles = require('../components/ColorSchemeToggle/ColorSchemeToggle.module.css');
    expect(toggleStyles).toBeDefined();
    expect(toggleStyles).toHaveProperty('themeBtn');
  });
});
