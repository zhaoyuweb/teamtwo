import lagouType from "../../actionType/lagou"
import axios from "axios";
export function upLaGou(payload) {
    return {
        type: lagouType.UP_LAGOU,
        payload
    }
}
export default {
    listMore(pageNo = 1) {
        return async (dispatch) => {
            console.log(11111, this.props);
            this.btn.value = "加载中……"
            const { data } = await axios.get("/lagou/listmore.json", {
                params: {
                    pageNo,
                    pageSize: this.props.pageSize
                }
            })
            dispatch(upLaGou(data.content.data.page))
        }

    }
}