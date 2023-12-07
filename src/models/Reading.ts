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
  startReading: { type: Number, required: true },
  endReading: { type: Number, required: true },
  startReadingTime: { type: Date, required: true },
  endReadingTime: { type: Date, required: true },
  distance: Number,
});

export default mongoose.models.Reading ||
  mongoose.model<IReading>('Reading', readingSchema);
