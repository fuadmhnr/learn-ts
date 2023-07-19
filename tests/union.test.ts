describe('Union type', function(): void {
  it('should support in typescript', function(): void {
    let sample: number | string | boolean = 'Fuad';
    console.log(sample);

    sample = 100;
    console.log(sample);

    sample = true;
    console.log(sample);
  });

  it('should support typeof operator', function() {
    function process(value: number | string | boolean) {
      if(typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process(100)).toBe(102);
    expect(process('Fuad')).toBe('FUAD');
    expect(process(true)).toBe(false);
  })
})