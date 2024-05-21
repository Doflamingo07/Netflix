import express from "express";

const app = express();

// to make  app understand json
app.use(express.json());

// routes

let movieList = [];

// add movie
app.post("/movie/add", (req, res) => {
  // extract new movie from req.body
  const newMovie = req.body;

  //add new movie to movieList
  movieList.push(newMovie);

  return res.status(200).send({ message: "Movie is added successfully" });
});

app.get("/movie/add", (req, res) => {
  return res.status(200);
});
// network port and servers
const PORT = 8001;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
