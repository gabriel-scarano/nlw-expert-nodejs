import { Redis } from "ioredis";

export const redis = new Redis({
    port: 2223
});