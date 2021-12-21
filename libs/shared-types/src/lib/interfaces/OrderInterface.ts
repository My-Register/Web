import { Types, Document } from 'mongoose';

export default interface OrderInterface extends Document {
   _id: Types.ObjectId;
   companyId: Types.ObjectId;
   sellerId: Types.ObjectId;
   details: { item: Types.ObjectId; numberOfItems: number }[];
   price: number;
   createdAt: Date;
   updatedAt: Date;
}
