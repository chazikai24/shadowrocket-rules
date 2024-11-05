/******************************

脚本功能：佐糖解锁VIP
软件版本：2024.11.05最新版测试通过
脚本原作者：彭于晏💞
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

修改by chazikai24 -- 2024.11.05

*************************************/


var ojbk = JSON.parse($response.body);
const vipa = '/vips';


if ($request.url.indexOf(vipa) != -1){
  ojbk.data.coin = 100;
  ojbk.data.ai_quota = 999999999;
  ojbk.data.group_expired_at = 0;
  ojbk.data.period_type = "active";
  ojbk.data.expired_at = 4092600296;
  ojbk.data.license_type = "premium";
  ojbk.data.status = 1;
  ojbk.data.quota = 999999999;
}

$done({body : JSON.stringify(ojbk)});
