import { Types, Document } from 'mongoose';

export default interface RoleInterface extends Document {
   _id: Types.ObjectId;
   name: string;
   description: string;
   color: string;
   emoji: string;
   companyId: Types.ObjectId;
   permissions: {
      addItems: boolean;
      editItems: boolean;
      deleteItems: boolean;
      fetchItems: boolean;
      createOrders: boolean;
   };
   createdAt: Date;
   updatedAt: Date;
}
