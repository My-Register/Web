import { Types, Document } from 'mongoose';

export default interface EmployeeInterface extends Document {
   _id: Types.ObjectId;
   login: string;
   password: string;
   name: string;
   description: string;
   avatar: Buffer;
   companyId: Types.ObjectId;
   roleId: Types.ObjectId;
   createdAt: Date;
   updatedAt: Date;
}
