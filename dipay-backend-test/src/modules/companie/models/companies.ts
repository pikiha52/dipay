import mongoose, { Schema, Document, Types } from 'mongoose';

interface companies extends Document {
    company_name: string
    telephone_number: string
    is_active: boolean
    address: string
}

const companies: Schema = new Schema({
    company_name: {
        unique: true,
        type: String,
        required: true,
        min: [3, 'Must be at least 3, got {VALUE}'],
        max: 50,
    },
    telephone_number: {
        type: String,
        min: [8, 'Must be at least 8, got {VALUE}'],
        max: 16,
    },
    is_active: {
        type: Boolean,
        default: false,
    },
    address: {
        type: String,
        min: [10, 'Must be at least 10, got {VALUE}'],
        max: 50,
    }
});

const companiesModel = mongoose.model<companies>('companies', companies);

export default companiesModel;