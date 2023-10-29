import { createClient, RedisClientType } from "redis";

export default class Redis {
  private static redis_instance: Redis;
  private static redis_client: RedisClientType;

  constructor() {
    if (!Redis.redis_client) {
      Redis.redis_client = createClient();

      Redis.redis_client
        .connect()
        .then(() => console.log("Redis connected successfully!"))
        .catch((error) => console.error(error));
    }

    Redis.redis_instance = this;
    return this;
  }

  getInstance() {
    if (!Redis.redis_instance) {
      Redis.redis_instance = new Redis();
    }

    return Redis.redis_instance;
  }

  async save({ key, value }: { key: string; value: string }): Promise<void> {
    if (!key) {
      return;
    }

    try {
      await Redis.redis_client.set(key, value);
    } catch (error) {
      console.error(error);
    }
  }

  async retrieve({ key }): Promise<any> {
    if (!key) {
      return;
    }

    try {
      return await Redis.redis_client.get(key);
    } catch (error) {
      console.error(error);
    }
  }

  async delete({ key }: { key: string }): Promise<number> {
    if (!key) {
      return;
    }

    try {
      return Redis.redis_client.del(key);
    } catch (error) {
      console.error(error);
    }
  }
}

const redis = new Redis();

export { redis };
