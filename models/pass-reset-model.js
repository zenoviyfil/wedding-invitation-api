import { Schema, model } from 'mongoose';

const resetPasswordSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    resetToken: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const ResetPassword = model('ResetPassword', resetPasswordSchema);
