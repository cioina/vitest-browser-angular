import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';
import { MY_TOKEN } from './my-token';

setupTestBed({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  providers: [{ provide: MY_TOKEN, useValue: 'My Value' }] as any[],
});
