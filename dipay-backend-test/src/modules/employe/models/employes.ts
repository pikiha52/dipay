import mongoose, { Schema, Document, Types } from 'mongoose';
import companiesModel from '../../companie/models/companies';

interface employes extends Document {
    name: string
    email: string
    phone_number: string
    jobtitle: string,
    company_id: Types.ObjectId;
}

const employes: Schema = new Schema({
    name: {
        type: String,
        required: true,
        min: [2, 'Must be at least 2, got {VALUE}'],
        max: 50,
    },
    email: {
        unique: true,
        type: String,
        required: true,
        min: [5, 'Must be at least 5, got {VALUE}'],
        max: 255,
    },
    phone_number: {
        type: String,
        required: false,
    },
    jobtitle: {
        type: String,
        enum: ['manager', 'director', 'staff'],
    },
    company_id: {
        type: Schema.Types.ObjectId || companiesModel,
        required: true,
        ref: 'companies'
    },
});

const employeModel = mongoose.model<employes>('employes', employes);

export default employeModel;