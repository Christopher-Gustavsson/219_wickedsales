
export default (store) => (next) => (action) => {
    if(typeof action !== "function"){
        return next(action);
    }

    return action(store.dispatch);
}

// export default function(store)
// {
//     return function(next){
//         return function(action){
//             // code goes here
//         }
//     }
// }