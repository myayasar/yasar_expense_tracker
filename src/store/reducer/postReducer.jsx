import {UPDATE_EXPENCE,DELETE_UPDATE_EXPENCE} from "../types";

const sum = (tracker) => {
    let draft,balance,credit;
    draft=balance=credit=0;
    tracker.forEach(({amount,type}) => {
        amount = parseInt(amount)
        if(type == "credit"){
            credit += amount;
        } else {
            draft += amount;
        }
    });
    balance = credit - draft;
    return {draft,balance,credit}
} 

let props = {tracker:[{date:"18/8/2019",summary:"salary",amount:"10000",type:"credit"},
{date:"28/9/2019",summary:"vegetable",amount:"3000",type:"draft"},
{date:"13/10/2019",summary:"hotel",amount:"2000",type:"draft"},
{date:"18/8/2019",summary:"small income",amount:"4000",type:"credit"}],
draft:0,balance:0,credit:0}
if(localStorage.getItem("tracker") == null){
    localStorage.setItem("tracker",JSON.stringify(props))
} else {
    props = JSON.parse(localStorage.getItem("tracker"))
}
let initalCalc = sum(props.tracker)
const init = {
    ...props,
    ...initalCalc
};

let tracker,calc;
export default function(state = init, action) {
    switch (action.type) {
    case UPDATE_EXPENCE:
        tracker = [...state.tracker];
        tracker.push(action.payload);
        calc = sum(tracker)

        localStorage.setItem("tracker",JSON.stringify({tracker,...calc}))
        return {
            ...state,
            tracker : [...tracker],
           ...calc
        }
    case DELETE_UPDATE_EXPENCE:
            tracker = action.payload;
            calc = sum(tracker)
            localStorage.setItem("tracker",JSON.stringify({tracker,...calc}))
            return {
                ...state,
                tracker : [...tracker],
               ...calc
            }
    
    default:
            return state;
    };
};