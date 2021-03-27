/*
 * @Author: hanqing5
 * @Date: 2020-12-11 18:21:50
 * @LastEditors: your name
 * @LastEditTime: 2020-12-14 21:48:40
 * @Description: 文件描述
 */
/* demo模块接口列表 */
import { getRequest, postRequest } from '../../../../common/io/base-methods'
const demoApis = {
    // get
    queryDemoString: getRequest(`/iarrm-bldm/demo/getString`),
    // save
    saveDemoString: postRequest(`/iarrm-bldm/demo/updateString`),
}
export default demoApis