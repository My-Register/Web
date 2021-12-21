/*Improve Schema Quality*/
import { Types, Document } from 'mongoose';
import { ActionType, UpdatableKeys } from '@./shared-types';

export default interface LogInterface extends Document {
   _id: Types.ObjectId;
   companyId: Types.ObjectId;
   employeeId: Types.ObjectId;
   itemId: Types.ObjectId;
   roleId: Types.ObjectId;
   orderId: Types.ObjectId;
   state: {
      oldState: {
         [key in UpdatableKeys]: string | number;
      };
      newState: {
         [key in UpdatableKeys]: string | number;
      };
   };
   action: {
      author: Types.ObjectId /*Who provoqued this log*/;
      type: ActionType /*Action type: DELETE, CREATE, UPDATE*/;
      text: string /*Custom text provided by the user or the server*/;
   };
   createdAt: Date;
   updatedAt: Date;
}
