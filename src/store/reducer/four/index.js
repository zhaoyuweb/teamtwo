import fourInit from "../../state/four"
import fourType from "../../actionType/four"
export default function (state = fourInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state));
   if(type===fourType.GET_ACTIVITY){
       console.log(payload)
       state.pageIndex+=10;
       state.activityData=[
           ...state.activityData,
           ...payload
        ]
   }

    return state;
}