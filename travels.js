exports = module.exports = function(mongoose) {

  // From: Kaique (https://github.com/kaiquewdev)

  var Schema = mongoose.Schema;

  // NOTE: all "_time" maintain minutes as unit
  var Travel = new Schema({
    origin: {
      type: String,
      default: ''
    },
    destination: {
      type: String,
      default: ''
    },
    travel_id: {
      type: String,
      required: true,
      index: true,
      unique: true
    },
    driver_name: {
      type: String,
      required: true,
      index: true
    },
    driver_id: {
      type: String,
      required: true,
      index: true
    },
    plate_number: {
      type: String,
      required: true,
      index: true
    },
    vendor_name: {
      type: String,
      required: true
    },
    authorizations: [{
      irregularity: String,
      comments: String,
      auth: Boolean
    }],
    timeline: {
      authorization: [{
        user_id: {
          type: String,
          default: '',
          index: true
        },
        has_authorization: {
          type: Number,
          default: 0
        },
        comments: {
          type: String,
          default: ''
        }
      }],
      timestamp: [{
        type: Date
      }],
      state: [{
        type: String,
        required: true,
      }],
      position: [{
        lat: {
          type: String
        },
        lng: {
          type: String
        },
        location: {
          type: String
        },
      }],
      message: [{
        match: {
          type: String
        },
        user: {
          type: String
        },
        vendor: {
          type: String
        },
      }],
      detail: [{
        type: String,
        required: true,
      }],
      work_time: [{
        type: Number,
        required: true,
      }],
      break_time: [{
        type: Number,
        required: true,
      }],
      work_time_violation: [{
        type: Number,
        required: true,
      }],
      break_time_violation: [{
        type: Number,
        required: true,
        index: true,
      }]
    },
    started: {
      type: Boolean,
      required: true,
      default: true,
    },
    finished: {
      type: Boolean,
      required: true,
      default: false,
    },
    current_travel_time: {
      type: Number,
      required: true,
      default: 0,
    },
    total_work_time: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    total_break_time: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    total_time: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    total_work_violation: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    total_break_violation: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    total_work_violation_with_authorization: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    total_work_violation_with_no_authorization: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    total_targeted_daytime: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    total_targeted_evening: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    total_violation: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    }
  });

  function schemaPreSaveHandler(next) {
    var doc = this;
    doc.updated_at = Date.now();
    next();
  }

  Travel.pre('save', schemaPreSaveHandler);

  return {
    Travel: mongoose.model('Travel', Travel);
  }

};
