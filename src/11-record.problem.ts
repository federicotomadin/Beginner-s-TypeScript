import { expect, it } from "vitest";

const createCache = () => {
  const cache: Record<number, string> = {};

  const add = (id: number, value: string) => {
    cache[id] = value;
  };

  const remove = (id: number) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add(1, "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add(1, "Matt");
  cache.remove(1);

  expect(cache.cache["123"]).toEqual(undefined);
});
