// Reading.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IReading extends Document {
  startReading: number;
  endReading: number;
  startReadingTime: Date;
  endReadingTime: Date;
  distance: number;
}

const readingSchema = new Schema<IReading>({
  startReading: { type: Number, required: false }, // Changed to not required
  endReading: { type: Number, required: false },
  startReadingTime: { type: Date, required: false },
  endReadingTime: { type: Date, required: false },
  distance: Number,
});

export default mongoose.models.Reading ||
  mongoose.model<IReading>('Reading', readingSchema);
