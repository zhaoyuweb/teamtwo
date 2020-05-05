import lagouInit from "../../state/lagou"
export default function (state=lagouInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === "UP_LAGOU"){
        console.log(1111,payload);
        state.pageSize = payload.pageSize;
        state.pageNo = payload.pageNo;
        state.result = [
            ...state.result,
            ...payload.result
        ];
    }
    return state;
}