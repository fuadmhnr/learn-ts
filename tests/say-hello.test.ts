import { sayHello } from "../src/say-hello"

describe('sayHello', function() {
  it('should return hello fuad', function() {
    expect(sayHello('fuad')).toBe('Hello fuad');
  })
})