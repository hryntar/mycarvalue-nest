import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   email: string;

   @Column()
   password: string;

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