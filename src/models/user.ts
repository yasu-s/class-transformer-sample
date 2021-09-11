import { Exclude, Type, Expose } from 'class-transformer';

export class User {
  @Expose({ name: 'uid' })
  id: number;

  firstName: string;
  lastName: string;
  createdAt: Date;

  @Type(() => Date)
  birthDay: Date;

  @Exclude()
  mail: string;

  @Expose({ name: 'fullName' })
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
