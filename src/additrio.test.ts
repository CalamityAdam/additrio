/* eslint-disable @typescript-eslint/ban-ts-comment */
import { additrio } from './additrio';

describe('additrio function', () => {
  test('should add three positive integers correctly', () => {
    expect(additrio(1, 2, 3)).toBe(6);
    expect(additrio(10, 20, 30)).toBe(60);
    expect(additrio(100, 200, 300)).toBe(600);
  });

  test('should add two positive integers correctly and default the third number to zero', () => {
    expect(additrio(1, 2)).toBe(3);
    expect(additrio(10, 20)).toBe(30);
    expect(additrio(100, 200)).toBe(300);
  });

  test('should handle negative integers correctly', () => {
    expect(additrio(-1, -2, -3)).toBe(-6);
    expect(additrio(-10, -20, -30)).toBe(-60);
    expect(additrio(-1, -2)).toBe(-3);
  });

  test('should handle positive and negative integers mixed correctly', () => {
    expect(additrio(1, -2, 3)).toBe(2);
    expect(additrio(-10, 20, -30)).toBe(-20);
    expect(additrio(-100, 200)).toBe(100);
  });

  test('should handle float numbers correctly', () => {
    expect(additrio(1.2, 2.3, 3.4)).toBeCloseTo(6.9);
    expect(additrio(10.5, 20.5)).toBeCloseTo(31.0);
    expect(additrio(-1.1, -2.2, 3.3)).toBeCloseTo(0);
  });

  test('should throw error for non-numeric input', () => {
    expect(() => {
      // @ts-ignore
      additrio('1', '2', '3');
    }).toThrow(TypeError);
    expect(() => {
      // @ts-ignore
      additrio('10', '20');
    }).toThrow(TypeError);
    expect(() => {
      // @ts-ignore
      additrio('abc', 'def');
    }).toThrow(TypeError);
  });

  test('should handle large numbers correctly', () => {
    expect(additrio(1e6, 2e6, 3e6)).toBe(6e6);
    expect(additrio(1e16, 2e16)).toBe(3e16);
  });

  test('should handle very small numbers correctly', () => {
    expect(additrio(1e-6, 2e-6, 3e-6)).toBeCloseTo(6e-6);
    expect(additrio(1e-16, 2e-16)).toBeCloseTo(3e-16);
  });
});
