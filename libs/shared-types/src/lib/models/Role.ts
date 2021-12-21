import * as mongoose from 'mongoose';
import { RoleConfig } from '../config';
import { RoleInterface } from '../interfaces';

const RoleSchema = new mongoose.Schema<RoleInterface>(
   {
      _id: mongoose.Schema.Types.ObjectId,
      name: {
         type: String,
         required: true,
         validate: () => true /*Check that it's an appropriate name*/,
         minlength: RoleConfig.nameMinLength,
         maxlength: RoleConfig.nameMaxLength,
      },
      description: {
         type: String,
         required: true,
         minlength: RoleConfig.descriptionMinLength,
         maxlength: RoleConfig.descriptionMaxLength,
      },

      color: {
         type: String,
         minlength: RoleConfig.colorMinLength,
         maxlength: RoleConfig.colorMaxLength,
         default: RoleConfig.defaultColor,
      },
      emoji: {
         type: String,
         maxlength: RoleConfig.emojiMinLength,
         minlength: RoleConfig.emojiMaxLength,
         default: RoleConfig.defaultEmoji,
      },
      companyId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'Company',
         validate: () => true /*Validate that it's a valid company Id*/,
      },
      permissions: {
         addItems: {
            type: Boolean,
            default: RoleConfig.defaultPermissions.addItems,
         },
         editItems: {
            type: Boolean,
            default: RoleConfig.defaultPermissions.editItems,
         },
         deleteItems: {
            type: Boolean,
            default: RoleConfig.defaultPermissions.deleteItems,
         },
         fetchItems: {
            type: Boolean,
            default: RoleConfig.defaultPermissions.fetchItems,
         },
         createOrders: {
            type: Boolean,
            default: RoleConfig.defaultPermissions.createOrders,
         },
      },
   },
   {
      toObject: {
         getters: true,
      },
      strictQuery: true,
      timestamps: true,
      minimize: false,
      strict: 'throw',
   },
);

const RoleModel = mongoose.model('Role', RoleSchema);

export default RoleModel;
