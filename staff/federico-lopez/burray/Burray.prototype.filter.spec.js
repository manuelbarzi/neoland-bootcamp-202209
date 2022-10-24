describe("Burray.prototype.filter", () => {
  it("should filter the elements of a burray that have more than 6 letters", () => {
    const words = new Burray(
      "spray",
      "limit",
      "elite",
      "exuberant",
      "destruction",
      "present"
    );

    const result = words.filter((word) => word.length > 6);

    expect(result).toBeInstanceOf(Burray);
    // expect(result instanceof Burray).toBe(true)

    expect(result).toHaveSize(3);
    // expect(result.length).toBe(3);

    expect(result[0]).toBe("exuberant");
    expect(result[1]).toBe("destruction");
    expect(result[2]).toBe("present");
  });

  it("should fail on not a function first argument", () => {
    const numbers = new Burray(0, 1, 2);

    try {
      const result = numbers.filter("hello world");

      throw new Error("it should not reach this point");
    } catch (error) {
      expect(error).toBeInstanceOf(TypeError);
      expect(error.message).toBe('"hello world" is not a function');
    }

    // this could be reach with an specific matcher of jasmine that detecs that the function throws an error
  });
});
