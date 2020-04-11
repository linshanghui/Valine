function bt(e) {
                return`<img src="https://cdn.jsdelivr.net/gh/HCLonely/valine-face@1.0.0/bilibili_tv/${e}.png" />`
            }

const tv_face={
                "[tv_白眼]": bt("baiyan"),
                "[tv_doge]": bt("doge"),
                "[tv_坏笑]": bt("huaixiao"),
                "[tv_难过]": bt("nanguo"),
                "[tv_生气]": bt("shengqi"),
                "[tv_委屈]": bt("weiqu"),
                "[tv_斜眼笑]": bt("xieyanxiao"),
                "[tv_呆]": bt("fadai"),
                "[tv_发怒]": bt("fanu"),
                "[tv_惊吓]": bt("jingxia"),
                "[tv_呕吐]": bt("outu"),
                "[tv_思考]": bt("sikao"),
                "[tv_微笑]": bt("weixiao"),
                "[tv_疑问]": bt("yiwen"),
                "[tv_大哭]": bt("daku"),
                "[tv_鼓掌]": bt("guzhang"),
                "[tv_抠鼻]": bt("koubi"),
                "[tv_亲亲]": bt("qinqin"),
                "[tv_调皮]": bt("tiaopi"),
                "[tv_笑哭]": bt("xiaoku"),
                "[tv_晕]": bt("yun"),
                "[tv_点赞]": bt("dianzan"),
                "[tv_害羞]": bt("haixiu"),
                "[tv_睡着]": bt("shuizhao"),
                "[tv_色]": bt("se"),
                "[tv_吐血]": bt("tuxue"),
                "[tv_无奈]": bt("wunai"),
                "[tv_再见]": bt("zaijian"),
                "[tv_流汗]": bt("liuhan"),
                "[tv_偷笑]": bt("touxiao"),
                "[tv_抓狂]": bt("zhuakuang"),
                "[tv_黑人问号]": bt("heirenwenhao"),
                "[tv_困]": bt("kun2"),
                "[tv_打脸]": bt("dalian"),
                "[tv_闭嘴]": bt("bizui"),
                "[tv_鄙视]": bt("bishi"),
                "[tv_腼腆]": bt("miantian"),
                "[tv_馋]": bt("chan"),
                "[tv_可爱]": bt("keai"),
                "[tv_发财]": bt("facai"),
                "[tv_生病]": bt("shengbing"),
                "[tv_流鼻血]": bt("liubixue"),
                "[tv_尴尬]": bt("ganga"),
                "[tv_大佬]": bt("dalao"),
                "[tv_流泪]": bt("liulei"),
                "[tv_冷漠]": bt("lengmo"),
                "[tv_皱眉]": bt("zhoumei"),
                "[tv_鬼脸]": bt("guilian"),
                "[tv_调侃]": bt("tiaokan"),
                "[tv_目瞪口呆]": bt("mudengkoudai")
}

const Emoji = {
    data : Object.assign(tv_face,require('./light.json')),
    parse : str => String(str).replace(/:(.+?):/g, (placeholder, key) => Emoji.data[key] || placeholder)
}

module.exports = Emoji