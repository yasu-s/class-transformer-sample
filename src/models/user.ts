import { Exclude, Type, Expose } from 'class-transformer';

export class User {
  @Expose({ name: 'uid' })
  id: number;

  firstName: string | null;
  lastName: string | null;
  createdAt: Date | null;

  @Type(() => Date)
  birthDay: Date | null;

  @Exclude()
  mail: string | null;

  @Expose({ name: 'fullName' })
  getFullName(): string {
    return `${this.firstName || ''} ${this.lastName || ''}`.trim();
  }
}
