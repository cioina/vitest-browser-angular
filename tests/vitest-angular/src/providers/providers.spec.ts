import { TestBed } from '@angular/core/testing';
import { expect, test } from 'vitest';
import { MY_TOKEN } from './my-token';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';

test('configure providers with setupTestBed', () => {
  TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
  //setupTestBed does not work
  TestBed.configureTestingModule({
    providers: [{ provide: MY_TOKEN, useValue: 'My Value' }],
  });

  expect(TestBed.inject(MY_TOKEN)).toBe('My Value');
});
