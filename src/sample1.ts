import 'reflect-metadata';
import { serialize, deserialize } from 'class-transformer';
import { User } from './models/user';

function createUser(): User {
  const user = new User();
  user.id = 1;
  user.firstName = 'hoge';
  user.lastName = 'hige';
  user.createdAt = new Date();
  user.birthDay = new Date(2000, 0, 1);
  user.mail = 'hoge@hogeee.com';
  return user;
}

function stringifyTest(user: User): void {
  const json = JSON.stringify(user);
  console.log(`stringifyTest: JSON.stringify - ${json}`);

  const obj1 = JSON.parse(json) as User;
  console.log(`stringifyTest: obj1.birthDay instanceof Date = ${(obj1.birthDay instanceof Date).toString()}`);

  const obj2 = deserialize(User, json);
  console.log(`stringifyTest: obj2.birthDay instanceof Date = ${(obj2.birthDay instanceof Date).toString()}`);
}

function transformerTest(user: User): void {
  const json = serialize(user);
  console.log(`transformerTest: serialize - ${json}`);

  const obj1 = JSON.parse(json) as User;
  console.log(`transformerTest: obj1.birthDay instanceof Date = ${(obj1.birthDay instanceof Date).toString()}`);

  const obj2 = deserialize(User, json);
  console.log(`transformerTest: obj2.birthDay instanceof Date = ${(obj2.birthDay instanceof Date).toString()}`);
}

function main(): void {
  const user = createUser();
  stringifyTest(user);
  transformerTest(user);
}

main();
