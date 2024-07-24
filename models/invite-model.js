import mongoose from 'mongoose';

const inviteSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    themeId: {
      type: Schema.Types.ObjectId,
      ref: 'Theme',
      required: true,
    },
    nameOne: {
      type: String,
      required: true,
    },
    nameTwo: {
      type: String,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Invite = model('Invite', inviteSchema);
