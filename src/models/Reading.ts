import mongoose, { Document, Schema } from 'mongoose';

interface IReading extends Document {
  startReading: number;
  endReading: number;
  distance: number;
  date: Date;
}

const readingSchema = new Schema<IReading>({
  startReading: { type: Number, required: true },
  endReading: { type: Number, required: true },
  distance: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Reading ||
  mongoose.model<IReading>('Reading', readingSchema);
