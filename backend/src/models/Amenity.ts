import mongoose, { Document, Schema } from 'mongoose';

export interface IAmenity extends Document {
    name: string;
    category: 'bathroom' | 'room' | 'property' | 'internet';
    icon?: string;
}

// Mongoose Schema - Actual database rules
const amenitySchema = new Schema<IAmenity>(
    {
        name: {
           type: String,
           required: true,
           unique: true,
           trim: true
        },
        category: {
            type: String,
            required: true,
            enum: ['bathroom', 'room', 'property', 'internet'],
        },
        icon: {
            type: String
        }
    },
    { timestamps: true }
);

// Export the model
export const Amenity = mongoose.
model<IAmenity>('Amenity', amenitySchema);

