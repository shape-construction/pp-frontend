import { transitions } from './transitions';

describe('dialog transitions', () => {
  it.each(Object.entries(transitions))('matches %s configuration', (transition) => {
    expect(transitions[transition]).toMatchSnapshot();
  });
});
