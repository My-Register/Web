import { Types, Document } from 'mongoose';

export default interface ItemInterface extends Document {
   _id: Types.ObjectId;
   name: string;
   description: string;
   companyId: Types.ObjectId;
   price: number;
   addedBy: Types.ObjectId;
   selledTimes: number;
   createdAt: Date;
   updatedAt: Date;
}
