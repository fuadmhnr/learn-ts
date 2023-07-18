describe("Array", function (): void {
  it("should same with javascript", function (): void {
    const names: string[] = ["Fuad", "Alica", "Ilham", "Fajar"];
    const values: number[] = [10, 30, 33, 50];

    console.info(names);
    console.info(values);
  });

  it("should be readonly array", function (): void {
    const hobbies: ReadonlyArray<string> = ["Sembahyang", "Mengaji"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);
  });

  it("should support tuple", function (): void {
    const person: readonly [string, string, number] = ['Fuad Muhammad Nur', 'Jakarta', 24]
    console.info(person);
    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);

    // person[0] = 'Yudi'; // errors
  });
});
