import axios from "axios";

export {};

let url:string = 'https://udemy-utils.herokuapp.com/api/articles?token=token123';

axios.get(url).then(function(response){
    console.log(response);
});