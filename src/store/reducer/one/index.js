import oneInit from "../../state/one"
export default function (state = oneInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state));
    if (type === "UP_HB") {
        console.log(1111, payload);
        state.title = payload.title;
    }
    return state;
}