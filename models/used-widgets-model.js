import mongoose from 'mongoose';

const usedWidgetsSchema = new mongoose.Schema(
  {
    widgetId: {
      type: Schema.Types.ObjectId,
      ref: 'EnabledWidgets',
      required: true,
    },
    inviteId: {
      type: Schema.Types.ObjectId,
      ref: 'Invite',
      required: true,
    },
    position: {
      type: Number,
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

export const UsedWidgets = mongoose.model('UsedWidgets', usedWidgetsSchema);
