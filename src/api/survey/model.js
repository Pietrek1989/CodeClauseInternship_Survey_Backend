const surveySchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      question: String,
      options: [String],
    },
  ],
  responses: [
    {
      age: Number,
      country: String,
      answers: [Number], // index of selected option for each question
    },
  ],
});

const Survey = mongoose.model("Survey", surveySchema);
