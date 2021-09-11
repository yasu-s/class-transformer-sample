import 'reflect-metadata';
import { serialize, deserialize } from 'class-transformer';
import { User } from './models/user';

function main(): void {
  const user = new User();
  user.id = 1;
  user.firstName = 'hoge';
  user.lastName = 'hige';
  user.createdAt = new Date();
  user.birthDay = new Date(2000, 0, 1);
  user.mail = 'hoge@hogeee.com';

  const json1 = JSON.stringify(user);
  console.log(`JSON.stringify - ${json1}`);

  const json2 = serialize(user);
  console.log(`serialize - ${json2}`);

  const obj1 = JSON.parse(json1) as User;
  console.log(`obj1.birthDay instanceof Date = ${(obj1.birthDay instanceof Date).toString()}`);

  const obj2 = deserialize(User, json2);
  console.log(`obj2.birthDay instanceof Date = ${(obj2.birthDay instanceof Date).toString()}`);
}

main();
