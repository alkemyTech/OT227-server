const  ejs = require('ejs');
const path = require('path');

class sendTemplate {
  static async welcomeTemplate (user) {    
   return await new Promise((resolve,rejects) => {
    ejs.renderFile(path.join(__dirname,'../views/welcomeEmailTemplate.ejs'), {name: user}, function(err,result){
      if(!err){
        resolve(result); 
      } else {
        rejects(err);
      }
    });    
   });
  }
}

module.exports = sendTemplate;