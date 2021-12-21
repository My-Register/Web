import { Types, Document, Date } from 'mongoose';

export default interface CompanyInterface extends Document {
   _id: Types.ObjectId;
   email: string;
   password: string;
   name: string;
   avatar: Buffer;
   domain: string;
   description: string;
   employesIds: Types.ObjectId[];
   itemsIds: Types.ObjectId[];
   rolesIds: Types.ObjectId[];
   premium: {
      plan: number;
      expiration: Date;
   };
   settings: {
      /*Define settings*/
   };
   createdAt: Date;
   updatedAt: Date;
}
