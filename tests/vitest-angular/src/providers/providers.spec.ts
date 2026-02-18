import { TestBed } from '@angular/core/testing';
import { expect, test } from 'vitest';
import { MY_TOKEN } from './my-token';

test('configure providers with setupTestBed does not work at this time', () => {
  expect(TestBed.inject(MY_TOKEN)).toBe('My Value');
});
