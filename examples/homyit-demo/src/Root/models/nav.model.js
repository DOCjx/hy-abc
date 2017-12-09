import dva from 'dva';

export default {
  namespace: 'nav',
  state: {
    i: 0,
    stars:[],
    navs:[],
    line:[],
  },
  reducers: {
      canvas(state,{payload: star}){
        //console.log(star);

        let j=star.i;
        j++;
        //console.log(star.lines[j-1]);
        //console.log(star.addNav[j]);
        return{
          ...state,
          stars: star.star,
          i:j,
          navs:star.addNav[j-1],
          line:star.lines[j-1]
        }
      },

  }
};