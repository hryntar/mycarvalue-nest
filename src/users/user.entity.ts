import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Exclude } from "class-transformer";
import { Report } from "src/reports/report.entity";

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   email: string;

   @Column()
   @Exclude()
   password: string;

   @Column({ default: true })
   admin: boolean;

   @OneToMany(() => Report, report => report.user)
   reports: Report[];

   @AfterInsert()
   logInsert() {
      console.log('Inserting the User with Id ', this.id);
   }

   @AfterUpdate()
   logUpdate() {
      console.log('Updating the User with Id ', this.id);
   }

   @AfterRemove()
   logRemove() {
      console.log('Removing the User with Id ', this.id);
   }
}