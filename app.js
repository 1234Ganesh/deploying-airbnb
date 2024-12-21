const path = require('path')
const express = require('express');

const rootDir = require('./utils/pathUtils');
const { controlerErr } = require('./controllers/errors');
const storeRouter = require('./routes/storeRouter');
const hostRouter = require('./routes/hostRouter');
const { mongoConnect } = require('./utils/databaseUtils');




const app = express();


app.set('view engine','ejs')
app.set('views','views')

app.use(controlerErr)

app.use(express.urlencoded());
app.use(storeRouter)
app.use(hostRouter)

app.use(express.static(path.join(rootDir,'public')))
app.use((req,res,next)=>{
  res.status(404).render(('404Page'))
})

const PORT = 3001;
  
mongoConnect(()=>{
  app.listen(PORT,()=>{
    console.log('server started',PORT)
  })

})

