import { describe, expect, test } from "vitest";

const person = {
  isActive: true,
  age: 32,
};

describe("person", () => {

  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });

  test("is age > 18", ()=>{
    expect(person.age).toBeGreaterThan(18);
  })

});

describe("fixed add test", () => {
  test("should fail", () => {
    expect(1 + 2).toBe(3);
  });
});

