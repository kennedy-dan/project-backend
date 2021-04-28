const mongoose = require("mongoose");

const crimeReportSchemma = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    report: [
      {
        category: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "CrimeCategory",
          required: true,
        },

        location: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Location",
          required: true,
        },
        reportText: {
          type: String,
          required: true,
        },
        reportStatus: {
          type: mongoose.Schema.Types.Mixed,
          default: function () {
            return [
              { type: "reported", date: new Date(), isCompleted: true },
              { type: "pending", isCompleted: false },
              { type: "investigating", isCompleted: false },
              { type: "solved", isCompleted: false },
            ];
          },
        },
        // reportStatus: [
        //   {
        //     type: {
        //       type: String,
        //       enum: ["reported", "pending", "investigating", "case closed"],
        //       default: "reported",
        //     },
        //     date: {
        //       type: Date,
        //     },
        //     isCompleted: {
        //       type: Boolean,
        //       default: false,
        //     },
        //   },
        // ],
      },
    ],

    reportStatus: [
      {
        type: {
          type: String,
          enum: ["reported", "pending", "investigating", "case closed"],
          default: "reported",
        },
        date: {
          type: Date,
        },
        isCompleted: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crimereport", crimeReportSchemma);
