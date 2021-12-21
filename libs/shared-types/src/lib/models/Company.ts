import * as mongoose from 'mongoose';
import { CompanyConfig } from '../config';
import { CompanyInterface } from '../interfaces';

const CompanySchema = new mongoose.Schema<CompanyInterface>(
   {
      _id: mongoose.Schema.Types.ObjectId,
      email: {
         $type: String,
         unique: true,
         required: true,
      },
      password: {
         $type: String,
         required: true,
         validate: () => true /*Add password regex validation*/,
         minlength: CompanyConfig.passwordMinLength,
         maxlength: CompanyConfig.passwordMaxLength,
      },
      name: {
         $type: String,
         required: true,
         validate: () => true /*Check that it's an appropriate name*/,
         minlength: CompanyConfig.nameMinLength,
         maxlength: CompanyConfig.nameMaxLength,
      },
      avatar: {
         data: Buffer,
         contentType: String,
         validate: () =>
            true /*Function to validate that image size isn't bigger then {CompanyConfig.avatarMaxSize} (Kbs)*/,
      },
      domain: {
         $type: String,
         required: true,
         minlength: CompanyConfig.domainMinLength,
         maxlength: CompanyConfig.domainMaxLength,
      },
      description: {
         $type: String,
         required: true,
         minlength: CompanyConfig.descriptionMinLength,
         maxlength: CompanyConfig.descriptionMaxLength,
      },
      employesIds: {
         $type: [
            {
               $type: mongoose.Schema.Types.ObjectId,
               ref: 'Employee',
            },
         ],
         validate: () =>
            true /*Additional check to verify that number of employees is not bigger then what offer give*/,
      },
      itemsIds: {
         $type: [
            {
               $type: mongoose.Schema.Types.ObjectId,
               ref: 'Item',
            },
         ],
         validate: () => true /*Additional check to verify that number of items is not bigger then what offer give*/,
      },
      rolesIds: {
         $type: [
            {
               $type: mongoose.Schema.Types.ObjectId,
               ref: 'Role',
            },
         ],
         validate: () => true /*Additional check to verify that number of roles is not bigger then what offer give*/,
      },
      premium: {
         plan: {
            $type: Number,
            required: true,
            default: CompanyConfig.defaultPremiumPlan,
         },
         expiration: {
            $type: Date,
            required: true,
         },
      },
      settings: {
         /*Determine Settings*/
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
      typeKey: '$type',
   },
);

const CompanyModel = mongoose.model('Company', CompanySchema);

export default CompanyModel;
