const Home = require("../model/home");

exports.getaddHome =(req,res,next)=>{
  res.render('host/edit-home',{editing:false});
}

exports.getEditHome=(req,res,next)=>{
  const homeId = req.params.homeId
  const editing = req.query.editing === 'true'
  Home.findById(homeId).then(home=>{
    if(!home){
      console.log('home not found editing')
      return res.redirect('/host-home-list')
    }else{
      console.log(homeId,editing,home)
       res.render('host/edit-home',{editing:editing,home:home})
    }
  })
}

exports.getHostHomes = (req,res,next)=>{
  Home.fetchAll().then(registeredHomes=>{
    res.render('host/host-home-list',{registeredHomes})
  });
 }

exports.postAddHome= (req,res,next)=>{
  console.log(req.body)
  const {houseName,price,location,rating,photoUrl,description}=req.body
  const home = new Home(houseName,price,location,rating,photoUrl,description);
  home.save().then(()=>{
    console.log('home saved successfully')
  })
  res.redirect('/host-home-list');
}


exports.postEditHome =(req,res,next)=>{
  const {id,houseName,price,location,rating,photoUrl,description}=req.body
  const home = new Home(houseName,price,location,rating,photoUrl,description,id);
  home.save().then(result=>{
    console.log('Home updated',result)
  })
  res.redirect('/host-home-list');

}

exports.postDeleteHome= (req,res,next)=>{
  const homeId=req.params.homeId
  console.log('Came to delete');
  Home.deleteById(homeId).then(()=>{
    res.redirect('/host-home-list')
    }).catch(error=>{
      console.log('ERR while deleting',error)
    })
};










