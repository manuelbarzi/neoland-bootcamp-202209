describe("Burray.prototype.push", () => {
  it("add a new element into the Burray, and grow length", () => {
    const b = new Burray

    const length = b.push(100);

    expect(b).toBeInstanceOf(Burray);
    expect(b[0]).toBe(100);
    expect(b.length).toBe(1);
    expect(length).toBe(1);
  });
});
