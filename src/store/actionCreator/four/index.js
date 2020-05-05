import fourType from "../../actionType/four";
export function changeActivity(payload) {
    return {
       type:fourType.GET_ACTIVITY,
       payload
    }
}