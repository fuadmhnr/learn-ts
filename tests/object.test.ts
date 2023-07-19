describe("Object", function () {
  it("should support in typescript", function () {
    const person: { id: string; name: string; address: string } = {
      id: "1",
      name: "Fuad",
      address: "Tangerang",
    };

    console.info(person);
    person.id = "2";
    person.name = "Muhammad";

    console.info(person);
  });
});
