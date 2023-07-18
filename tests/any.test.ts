describe('Any', function(): void {
  it('should support in typescript', function() {
    const person: any = {
      id: 1,
      name: 'Fuad Muhammad Nur',
      age: 24
    }

    person.age = 17
    person.country = 'Indonesia'

    console.info(person);
  })
})