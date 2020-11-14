import { jest } from "@jest/globals";

export default {
  get: jest.fn(() => Promise.resolve({ data: { name: "Hebe Tien" } })),
};
