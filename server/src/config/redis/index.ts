import { createClient, RedisClientType } from "redis";
import { generateRandomString } from "../randomstring";

export default class Redis {
  private static redis_instance: Redis;
  redis_client: RedisClientType;

  constructor() {
    if (!this.redis_client) {
      this.redis_client = createClient({
        socket: {
          connectTimeout: 10000,
          reconnectStrategy: (retries) => Math.min(retries * 50, 1000),
        },
      });

      this.redis_client
        .connect()
        .then(() => console.log("Redis connected successfully!"))
        .catch((error) => console.error(error));
    }

    Redis.redis_instance = this;
  }

  getInstance() {
    if (!Redis.redis_instance) {
      new Redis();
    }

    return Redis.redis_instance;
  }

  async save({
    key,
    value,
    ttl,
  }: {
    key: string;
    value: any;
    ttl: number;
  }): Promise<void> {
    if (!key || !value) {
      console.log("Redis client: Invalid data to save.");
      return;
    }

    if (!this.redis_client) {
      console.log("Redis client is not initialized.");
      return;
    }

    try {
      await this.redis_client.set(key, JSON.stringify(value), { EX: ttl });
      console.log(`Redis client cached data for ${key}`);
    } catch (error) {
      console.error(error);
    }
  }

  async retrieve({ key }): Promise<any> {
    if (!key) {
      console.log("Redis client: Invalid data to retrieve.");
      return;
    }

    if (!this.redis_client) {
      console.log("Redis client is not initialized.");
      return;
    }

    try {
      const data = await this.redis_client.get(key);
      console.log(`Redis client retrieved data for ${key}`);

      return JSON.parse(data);
    } catch (error) {
      console.error(error);
    }
  }

  async delete({ key }: { key: string }): Promise<void> {
    if (!key) {
      console.log("Redis client: Invalid data to delete.");
      return;
    }

    if (!this.redis_client) {
      console.log("Redis client is not initialized.");
      return;
    }

    try {
      await this.redis_client.unlink(key);
      console.log(`Redis client deleted data for ${key}`);
    } catch (error) {
      console.error(error);
    }
  }

  redisKeyBuilder(payload: { [key: string]: string }): string {
    if (!payload) {
      console.log("Redis client: Invalid data to build cache key.");
      return;
    }

    if (!this.redis_client) {
      return;
    }

    if (!payload.prefix) {
      const random_key = <string>generateRandomString({ length: 16 });
      payload.prefix = random_key;
    }

    let result = "";
    for (const key in payload) {
      result += `${key}=${payload[key]}`;
    }

    return result;
  }
}

const redis = new Redis().getInstance();

export { redis };
