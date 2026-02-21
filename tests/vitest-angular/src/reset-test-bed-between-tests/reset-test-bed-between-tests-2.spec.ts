import { InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { expect, test } from 'vitest';
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';

const MY_TOKEN = new InjectionToken<string>('MY_TOKEN');
TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
TestBed.configureTestingModule({
  providers: [{ provide: MY_TOKEN, useValue: 'My Value' }],
});

test.each([1, 2])('provide and inject dependency #%s', () => {
  expect(TestBed.inject(MY_TOKEN)).toBe('My Value');
});
