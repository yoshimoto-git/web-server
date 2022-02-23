const e = require('express');
const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended:  false }));

console.log(__dirname);

// 静的ルートの追加
// publicの中htmlを返却するようになる
// index.htmlはルートとなる
app.use(express.static(path.join(__dirname, "public")));

app.post('/api/vi/quiz', function (req, res) {
  const answer = req.body.answer;
  if (answer === "2"){
    // res.send("<h1>正解</h1>");
    res.redirect("/correct.html")
  } else {
    // res.send("<h1>不正解</h1>");
    res.redirect("/wrong.html")
  }
  res.send(answer);
})


// app.get('/', function (req, res) {
//   console.log(req);
//   res.send('<h1>Top Page!!!</h1>')
// })

// app.get('/about', function (req, rWes) {
//   res.send('About Page')
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log("I am Running!");
})

console.log("Last Line")