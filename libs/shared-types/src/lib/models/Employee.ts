import * as mongoose from 'mongoose';
import { EmployeeConfig } from '../config';
import { EmployeeInterface } from '../interfaces';

const EmployeeSchema = new mongoose.Schema<EmployeeInterface>(
   {
      _id: mongoose.Schema.Types.ObjectId,
      login: {
         type: String,
         unique: true,
         required: true,
      },
      password: {
         type: String,
         required: true,
         validate: () => true /*Add password regex validation*/,
         minlength: EmployeeConfig.passwordMinLength,
         maxlength: EmployeeConfig.passwordMaxLength,
      },
      name: {
         type: String,
         required: true,
         validate: () => true /*Check that it's an appropriate name*/,
         minlength: EmployeeConfig.nameMinLength,
         maxlength: EmployeeConfig.nameMaxLength,
      },
      description: {
         type: String,
         required: true,
         minlength: EmployeeConfig.descriptionMinLength,
         maxlength: EmployeeConfig.descriptionMaxLength,
      },
      avatar: {
         data: Buffer,
         contentType: String,
         validate: () =>
            true /*Function to validate that image size isn't bigger then {EmployeeConfig.avatarMaxSize} (Kbs)*/,
      },

      companyId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'Company',
         validate: () => true /*Validate that it's a valid company Id*/,
      },

      roleId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         red: 'Role',
         validate: () => true,
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

const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

export default EmployeeModel;
