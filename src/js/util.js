import Configuration from "../config"
//const env = Configuration.getEnv() == "prod" ? 1 : 0 
export default {

    sleep:(seconds)=>{
      return new Promise( (result)=>{ setTimeout( ()=>{ result()  },seconds*1000 ) } )
    },
    checkSetIsFav:(games, favGames)=>{
      //console.log("games",games);
      if(!Array.isArray(games)) return []
      let favs = favGames.map(e=>e.id)
      return games.map(g=>({...g, isFav: favs.includes(g.id) }))
    },
    
    getImgUrl:(assets, game)=>{
       //https://d2zzz5z45zl95g.cloudfront.net/us_img_games/slot_Tom_Horn_Gaming_0_VSIncas_TNP.png
      return `${assets}/us_img_games/${game.category}_${game.brand.replace(/ /g, "_")}_1_${game.gameid}.png`;
    },
    getProviderImgUrl: (assets, game) =>{
      //"https://d2zzz5z45zl95g.cloudfront.net/us_img_brands/Pragmatic.png"
      return `${assets}/us_img_brands/${game.brand}.png` 
    },
    

      dateDiffInDays: (a, b) => {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
      },

      getAge:(dateString)=> {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    },
    /*setUrlPage:(page)=>{
      history.pushState({name: page}, null, page);
    },*/
    categoryAllowedChange(category, userState){
      return ( /horses|esports/.test(category) && userState == "logout")
    }
}