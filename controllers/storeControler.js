const Favourite  = require("../model/favourite")
const Home = require("../model/home");

exports.getIndex = (req,res,next)=>{
  Home.fetchAll().then(registeredHomes=>{
    res.render('store/index',{registeredHomes})

  });
 }


exports.getHome = (req,res,next)=>{
  Home.fetchAll().then(registeredHomes=>{
    res.render('store/home-list',{registeredHomes})
  })  
 
 }
 exports.getBookings = (req,res,next)=>{
  res.render('store/booking')
   j
 
 }
 exports.getFavouriteList = (req,res,next)=>{
  Favourite.getFavouite().then(favourites=>{
    favourites = favourites.map(fav=>fav.houseId);
    Home.fetchAll().then(registeredHomes=>{
      console.log(favourites,registeredHomes)
      const favouriteHomes = registeredHomes.filter((home)=>favourites.includes(home._id.toString())
    );
      res.render('store/favourite-list',{favouriteHomes})
    });

  })
 
   
 
 }

 exports.geHomeDetails=(req,res,next)=>{
  const homeId = req.params.homeId
  Home.findById(homeId).then(home=>{
    if(!home){
      res.redirect('/home');
    }else{
      res.render('store/home-details',{home:home})
    }  
  })
 
    
 
 }
  
exports.postAddToFavourite=(req,res,next)=>{
  const homeId = req.body.id
  const fav = new Favourite(homeId);
  fav.save().then(result=>{
    console.log('fav added',result)
  }).catch(err=>{
    console.log('err while marking',err)
  }).finally(()=>{
    res.redirect('/favourites')

  })
}

exports.postRemoveFavourite=(req,res,next)=>{
  const homeId = req.params.homeId;
  
  Favourite.deleteById(homeId).then(result=>{
    console.log('fav removed',result)
  }).catch(err=>{
    console.log('err while removing fav',err)
  }).finally(()=>{
    res.redirect('/favourites')
  })
}