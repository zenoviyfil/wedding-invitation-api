import mongoose from 'mongoose';

const enabledWidgetsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    settings: {
      type: Object,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const EnabledWidgets = mongoose.model(
  'EnabledWidgets',
  enabledWidgetsSchema
);
