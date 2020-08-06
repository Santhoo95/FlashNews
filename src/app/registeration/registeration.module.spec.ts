import { RegisterationModule } from './registeration.module';

describe('RegisterationModule', () => {
  let registerationModule: RegisterationModule;

  beforeEach(() => {
    registerationModule = new RegisterationModule();
  });

  it('should create an instance', () => {
    expect(registerationModule).toBeTruthy();
  });
});
