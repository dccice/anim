/*
京享值PK
cron 15 0,6,13,19,21 * * * ddo_pk.js
更新时间：2021-6-22

本次没有ddo内置助力码！

活动入口：京东APP-我的-京享值
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京享值PK
15 0,6,13,19,21 * * * https://raw.githubusercontent.com/hyzaw/scripts/main/ddo_pk.js, tag=京享值PK
================Loon==============
[Script]
cron "15 0,6,13,19,21 * * *" script-path=https://raw.githubusercontent.com/hyzaw/scripts/main/ddo_pk.js,tag=京享值PK
===============Surge=================
京享值PK = type=cron,cronexp="15 0,6,13,19,21 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/hyzaw/scripts/main/ddo_pk.js
============小火箭=========
京享值PK = type=cron,script-path=https://raw.githubusercontent.com/hyzaw/scripts/main/ddo_pk.js, cronexpr="15 0,6,13,19,21 * * *", timeout=3600, enable=true
*/
const $ = new Env('京享值PK');
$['toObj'] = (_0x33dcea, _0x3daa2f = null) => {
    try {
        return JSON['parse'](_0x33dcea);
    } catch (_0x2d92c6) {
        return _0x2d92c6;
    }
};
$['toStr'] = (_0x2d3e9b, _0x5dc375 = null) => {
    try {
        return JSON['stringify'](_0x2d3e9b);
    } catch (_0x2c48a3) {
        return _0x2c48a3;
    }
};
const notify = $['isNode']() ? require('./sendNotify') : '';
const jdCookieNode = $['isNode']() ? require('./jdCookie.js') : '';
const sck = $['isNode']() ? 'set-cookie' : 'Set-Cookie';
let cookiesArr = [],
    cookie = '',
    message;
let minPrize = 0x1;
let bcomplate = ![];
if ($['isNode']()) {
    Object['keys'](jdCookieNode)['forEach'](_0x405326 => {
        cookiesArr['push'](jdCookieNode[_0x405326]);
    });
    if (process['env']['JD_DEBUG'] && process['env']['JD_DEBUG'] === 'false') console['log'] = () => {};
} else {
    cookiesArr = [$['getdata']('CookieJD'), $['getdata']('CookieJD2'), ...jsonParse($['getdata']('CookiesJD') || '[]')['map'](_0x1a0563 => _0x1a0563['cookie'])]['filter'](_0x3996a2 => !!_0x3996a2);
}
const JD_API_HOST = 'https://api.m.jd.com/client.action';
$['helpAuthor'] = ![];
!(async () => {
    var _0x297df2 = {
        'bOmcP': '【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取',
        'PanrW': 'https://bean.m.jd.com/',
        'EBquU': function(_0x2f8baf, _0x1a127f) {
            return _0x2f8baf < _0x1a127f;
        },
        'zAJwA': '1|0|5|3|4|2',
        'JlnDm': function(_0x2212cc, _0x5bceb4) {
            return _0x2212cc(_0x5bceb4);
        },
        'WBLkX': function(_0x393257) {
            return _0x393257();
        },
        'ZNdQM': function(_0x2dd76c, _0x1c9ec6) {
            return _0x2dd76c + _0x1c9ec6;
        }
    };
    if (!cookiesArr[0x0]) {
        $['msg']($['name'], _0x297df2['bOmcP'], _0x297df2['PanrW'], {
            'open-url': _0x297df2['PanrW']
        });
        return;
    }
    for (let _0x1870b6 = 0x0; _0x297df2['EBquU'](_0x1870b6, cookiesArr['length']); _0x1870b6++) {
        if (cookiesArr[_0x1870b6]) {
            var _0x569dc4 = _0x297df2['zAJwA']['split']('|'),
                _0xcc5e89 = 0x0;
            while (!![]) {
                switch (_0x569dc4[_0xcc5e89++]) {
                    case '0':
                        $['UserName'] = _0x297df2['JlnDm'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                        continue;
                    case '1':
                        cookie = cookiesArr[_0x1870b6];
                        continue;
                    case '2':
                        await _0x297df2['WBLkX'](main);
                        continue;
                    case '3':
                        message = '';
                        continue;
                    case '4':
                        console['log']('\n******开始【京东账号' + $['index'] + '】' + $['UserName'] + '*********\n');
                        continue;
                    case '5':
                        $['index'] = _0x297df2['ZNdQM'](_0x1870b6, 0x1);
                        continue;
                }
                break;
            }
        }
    }
})()['catch'](_0x1e005a => {
    $['log']('', '❌ ' + $['name'] + ', 失败! 原因: ' + _0x1e005a + '!', '');
})['finally'](() => {
    $['done']();
});

function showMsg() {
    var _0x3f3961 = {
        'EhETt': function(_0x15eeae, _0x481b42) {
            return _0x15eeae + _0x481b42;
        },
        'wJzlF': '当前胜场:',
        'Lxfgn': function(_0x4f9741, _0x1ef715) {
            return _0x4f9741 === _0x1ef715;
        },
        'Fkaaq': 'RFqCh',
        'aBSQm': 'VpNiH',
        'UjrTB': function(_0x327d42) {
            return _0x327d42();
        }
    };
    return new Promise(_0x5d600f => {
        var _0xca72d9 = {
            'fgTgq': function(_0x4dce6c, _0x9ee47c) {
                return _0x3f3961['EhETt'](_0x4dce6c, _0x9ee47c);
            },
            'uvtOQ': _0x3f3961['wJzlF']
        };
        if (_0x3f3961['Lxfgn'](_0x3f3961['Fkaaq'], _0x3f3961['aBSQm'])) {
            console['log'](_0xca72d9['fgTgq'](_0xca72d9['uvtOQ'], data['pkResult']['fromWinNum']));
        } else {
            $['log']($['name'], '', '京东账号' + $['index'] + $['nickName'] + '\x0a' + message);
            _0x3f3961['UjrTB'](_0x5d600f);
        }
    });
}
async function main() {
    var _0x27f381 = {
        'pVPIF': 'CookieJD',
        'Bcnwj': 'CookieJD2',
        'KdXRd': function(_0x173276, _0x294690) {
            return _0x173276(_0x294690);
        },
        'ngpcx': 'CookiesJD',
        'VldAW': function(_0xc6eef4, _0x475c13) {
            return _0xc6eef4 + _0x475c13;
        },
        'cFBFC': '获得奖励:',
        'lMbes': '总胜场:',
        'nDYHd': function(_0x4edc5f) {
            return _0x4edc5f();
        },
        'qfTzC': function(_0xdf1e00, _0x560ed0) {
            return _0xdf1e00 + _0x560ed0;
        },
        'UCqxK': '当前token：',
        'PJRBA': function(_0x15b958, _0x52b585) {
            return _0x15b958 === _0x52b585;
        },
        'zMYhQ': 'UoTyu',
        'CtRAs': 'ZjgVr',
        'AxFYn': function(_0x2f9a2e) {
            return _0x2f9a2e();
        },
        'AILij': function(_0x295f2b, _0x1d17c4) {
            return _0x295f2b + _0x1d17c4;
        },
        'RBfRu': '当前pin（pk码）：',
        'SExDJ': function(_0x2b155e, _0x36098e) {
            return _0x2b155e(_0x36098e);
        },
        'QymWN': function(_0x3e1253, _0x2cfdf5) {
            return _0x3e1253(_0x2cfdf5);
        },
        'senvI': '我的京享值:',
        'ERMKc': function(_0x35644b, _0x3f2ebe) {
            return _0x35644b !== _0x3f2ebe;
        },
        'Abtte': 'RdwKw',
        'dPwvo': function(_0x61a483, _0x41d7bc) {
            return _0x61a483 < _0x41d7bc;
        },
        'GKIae': function(_0x482822, _0x401897) {
            return _0x482822 !== _0x401897;
        },
        'ceBiT': 'tiYvp',
        'PltEt': 'lyJYG',
        'lgEKa': function(_0x5efcd1, _0x5dbbe8) {
            return _0x5efcd1 + _0x5dbbe8;
        },
        'AQEYs': '别人的的pin：',
        'tGPic': function(_0x1cfde0, _0x55a7e8) {
            return _0x1cfde0 + _0x55a7e8;
        },
        'RgreX': '别人的京享值:',
        'nzvgD': function(_0x3935a2, _0x3a043c) {
            return _0x3935a2 < _0x3a043c;
        },
        'Iaigf': function(_0x32d80d, _0x7a195) {
            return _0x32d80d(_0x7a195);
        },
        'tcNaL': '去开宝箱',
        'MmemU': function(_0x2267b2, _0x1bcc8f) {
            return _0x2267b2 < _0x1bcc8f;
        },
        'DXdTx': function(_0x244874, _0x4da283) {
            return _0x244874 == _0x4da283;
        },
        'mylgr': function(_0x4f4cfb, _0x4a93c6) {
            return _0x4f4cfb >= _0x4a93c6;
        },
        'FFBjz': 'oZDgF',
        'sQFwq': 'yGqlY'
    };
    await _0x27f381['nDYHd'](getToken);
    console['log'](_0x27f381['qfTzC'](_0x27f381['UCqxK'], $['token']));
    if ($['token']) {
        if (_0x27f381['PJRBA'](_0x27f381['zMYhQ'], _0x27f381['CtRAs'])) {
            cookiesArr = [$['getdata'](_0x27f381['pVPIF']), $['getdata'](_0x27f381['Bcnwj']), ..._0x27f381['KdXRd'](jsonParse, $['getdata'](_0x27f381['ngpcx']) || '[]')['map'](_0x2ee3a3 => _0x2ee3a3['cookie'])]['filter'](_0x5c01e4 => !!_0x5c01e4);
        } else {
            await _0x27f381['AxFYn'](getPin);
            if ($['pin']) {
                console['log'](_0x27f381['AILij'](_0x27f381['RBfRu'], $['pin']));
            }
            let _0x10656e = await _0x27f381['SExDJ'](getScore, $['pin']);
            await _0x27f381['SExDJ'](getPinList, 0x1e);
            await _0x27f381['QymWN'](submitPKCode, $['pin']);
            console['log'](_0x27f381['AILij'](_0x27f381['senvI'], _0x10656e));
            if ($['pinList']) {
                if (_0x27f381['ERMKc'](_0x27f381['Abtte'], _0x27f381['Abtte'])) {
                    console['log'](e);
                } else {
                    console['log']($['pinList']);
                    for (let _0x45b66f = 0x0; _0x27f381['dPwvo'](_0x45b66f, $['pinList']['length']); _0x45b66f++) {
                        if (bcomplate) {
                            if (_0x27f381['GKIae'](_0x27f381['ceBiT'], _0x27f381['PltEt'])) {
                                break;
                            } else {
                                console['log'](_0x27f381['VldAW'](_0x27f381['cFBFC'], $['toStr'](item)));
                            }
                        } else {
                            let _0x3891fe = $['pinList'][_0x45b66f];
                            console['log'](_0x27f381['lgEKa'](_0x27f381['AQEYs'], _0x3891fe));
                            let _0x2856d3 = await _0x27f381['QymWN'](getScore, _0x3891fe);
                            console['log'](_0x27f381['tGPic'](_0x27f381['RgreX'], _0x2856d3));
                            if (_0x27f381['nzvgD'](_0x2856d3, _0x10656e)) {
                                await _0x27f381['Iaigf'](launchBattle, _0x3891fe);
                                await _0x27f381['Iaigf'](receiveBattle, _0x3891fe);
                            }
                        }
                    }
                    bcomplate = ![];
                }
            }
            await _0x27f381['AxFYn'](getBoxRewardInfo);
            console['log'](_0x27f381['tcNaL']);
            if ($['awards']) {
                for (let _0xb683d = 0x0; _0x27f381['MmemU'](_0xb683d, $['awards']['length']); _0xb683d++) {
                    let _0x252689 = $['awards'][_0xb683d];
                    if (_0x27f381['DXdTx'](_0x252689['received'], 0x0)) {
                        if (_0x27f381['mylgr']($['totalWins'], _0x252689['wins'])) {
                            if (_0x27f381['PJRBA'](_0x27f381['FFBjz'], _0x27f381['sQFwq'])) {
                                $['awards'] = data['data']['awards'];
                                $['totalWins'] = data['data']['totalWins'];
                                console['log'](_0x27f381['VldAW'](_0x27f381['lMbes'], data['data']['totalWins']));
                            } else {
                                await _0x27f381['Iaigf'](sendBoxReward, _0x252689['id']);
                            }
                        }
                    }
                }
            }
        }
    }
}

function submitPKCode(_0x575235) {
    var _0x392a67 = {
        'CfymQ': function(_0x4e308f, _0x2c9f59) {
            return _0x4e308f === _0x2c9f59;
        },
        'YIIKH': 'qidaY',
        'jjXuB': 'MDpPq',
        'EFvsa': function(_0x109acb, _0x26ffb6) {
            return _0x109acb(_0x26ffb6);
        },
        'THoEz': 'HDzTf',
        'wHrBk': 'pool.nz.lu',
        'QpcDL': 'keep-alive',
        'htGmv': ' */*',
        'cMvom': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4433.0 Safari/537.36',
        'xVHfF': 'zh-cn'
    };
    console['log']('上传pk码: ' + _0x575235);
    return new Promise(_0x275b21 => {
        var _0x179d96 = {
            'oEbeY': function(_0x5768db, _0x118036) {
                return _0x392a67['CfymQ'](_0x5768db, _0x118036);
            },
            'AEijT': _0x392a67['YIIKH'],
            'bIYQW': _0x392a67['jjXuB'],
            'CxAMh': function(_0x33a0b0, _0x487f3f) {
                return _0x392a67['EFvsa'](_0x33a0b0, _0x487f3f);
            }
        };
        if (_0x392a67['CfymQ'](_0x392a67['THoEz'], _0x392a67['THoEz'])) {
            let _0x415d9f = {
                'url': 'https://pool.nz.lu/api/v2/upload?name=PK0622&code=' + _0x575235,
                'headers': {
                    'Host': _0x392a67['wHrBk'],
                    'Connection': _0x392a67['QpcDL'],
                    'Accept': _0x392a67['htGmv'],
                    'User-Agent': _0x392a67['cMvom'],
                    'Accept-Language': _0x392a67['xVHfF']
                }
            };
            $['get'](_0x415d9f, (_0x35a7fa, _0x204f1c, _0x35b4fb) => {
                try {
                    if (_0x35b4fb) {
                        if (_0x179d96['oEbeY'](_0x179d96['AEijT'], _0x179d96['bIYQW'])) {
                            console['log'](e);
                        } else {
                            console['log'](_0x575235 + '上传成功');
                        }
                    }
                } catch (_0x2da79a) {
                    console['log'](_0x2da79a);
                } finally {
                    _0x179d96['CxAMh'](_0x275b21, _0x35b4fb);
                }
            });
        } else {
            return JSON['parse'](str);
        }
    });
}

function getPinList(_0x54b4fb = 0x14) {
    var _0x2d0970 = {
        'pVmro': function(_0x57053c, _0x13adfa) {
            return _0x57053c === _0x13adfa;
        },
        'eJOWH': 'HFeqo',
        'YXrHU': 'uwUxU',
        'oMhlU': function(_0x3985f9, _0x23219e) {
            return _0x3985f9(_0x23219e);
        },
        'cYagp': function(_0xd3ace0, _0x3a2a99) {
            return _0xd3ace0 | _0x3a2a99;
        },
        'ZOjoP': function(_0x55997d, _0x4c66e1) {
            return _0x55997d & _0x4c66e1;
        },
        'vSmAW': function(_0x57d532, _0x34f3e5) {
            return _0x57d532 !== _0x34f3e5;
        },
        'jssjr': 'pHwqG',
        'yXnGq': 'eZIui',
        'qPyGp': 'pool.nz.lu',
        'JOAKr': 'keep-alive',
        'hdlsK': ' */*',
        'waBvk': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4433.0 Safari/537.36',
        'xLGGF': 'zh-cn',
        'nOIKo': '获取Pk列表'
    };
    console['log'](_0x2d0970['nOIKo']);
    return new Promise(_0x1b201b => {
        var _0x273990 = {
            'DQIKd': function(_0x1ab8a4, _0x3852bb) {
                return _0x2d0970['cYagp'](_0x1ab8a4, _0x3852bb);
            },
            'wmmxS': function(_0xda3ebd, _0x11d0cf) {
                return _0x2d0970['ZOjoP'](_0xda3ebd, _0x11d0cf);
            },
            'vqVhV': function(_0x36f65e, _0x75f5ae) {
                return _0x2d0970['ZOjoP'](_0x36f65e, _0x75f5ae);
            }
        };
        if (_0x2d0970['vSmAW'](_0x2d0970['jssjr'], _0x2d0970['yXnGq'])) {
            let _0x5bb952 = {
                'url': 'https://pool.nz.lu/api/v2/get?name=PK0622&count=' + _0x54b4fb,
                'headers': {
                    'Host': _0x2d0970['qPyGp'],
                    'Connection': _0x2d0970['JOAKr'],
                    'Accept': _0x2d0970['hdlsK'],
                    'User-Agent': _0x2d0970['waBvk'],
                    'Accept-Language': _0x2d0970['xLGGF']
                }
            };
            $['get'](_0x5bb952, (_0x3a7032, _0x17f2d6, _0x572929) => {
                if (_0x2d0970['pVmro'](_0x2d0970['eJOWH'], _0x2d0970['YXrHU'])) {
                    console['log'](e);
                } else {
                    try {
                        if (_0x572929) {
                            let _0x131a05 = $['toObj'](_0x572929);
                            $['pinList'] = _0x131a05['data'];
                        }
                    } catch (_0x2c0355) {
                        console['log'](_0x2c0355);
                    } finally {
                        _0x2d0970['oMhlU'](_0x1b201b, _0x572929);
                    }
                }
            });
        } else {
            return _0x273990['DQIKd'](_0x273990['wmmxS'](x, y), _0x273990['vqVhV'](~x, z));
        }
    });
}

function launchBattleUrl(_0x268a37) {
    var _0x10ae4c = {
        'uiraO': function(_0x4cccc9, _0xec13e0) {
            return _0x4cccc9 + _0xec13e0;
        },
        'lSSsO': function(_0xc8fb82, _0x19d507) {
            return _0xc8fb82 + _0x19d507;
        },
        'AxBaF': 'dafbe42d5bff9d82298e5230eb8c3f79_34e1e81ae8122ca039ec5738d33b4eee_',
        'LoOEC': 'pengyougou.m.jd.com',
        'YmZQe': 'application/json',
        'AREmZ': 'https://game-cdn.moxigame.cn',
        'nfoyA': 'keep-alive',
        'XFTrH': ' */*',
        'qAlHx': 'zh-cn',
        'PLabO': 'cors',
        'gkrxk': 'cross-site',
        'cgXce': 'empty'
    };
    let _0x440b30 = new Date()['valueOf']();
    let _0x4161cc = _0x10ae4c['uiraO'](_0x10ae4c['uiraO'](_0x10ae4c['lSSsO'](_0x10ae4c['AxBaF'], '{"actId":9,"recipient":"' + _0x268a37 + '","relation":2}'), '_'), _0x440b30);
    _0x4161cc = _0x4161cc['MD5'](0x20);
    return {
        'url': 'https://pengyougou.m.jd.com/open/api/like/jxz/launchBattle?appId=dafbe42d5bff9d82298e5230eb8c3f79&lkEPin=' + $['pin'] + '&sign=' + _0x4161cc + '&t=' + _0x440b30,
        'body': '{\"actId\":9,\"recipient\":\"' + _0x268a37 + '\",\"relation\":2}',
        'headers': {
            'Host': _0x10ae4c['LoOEC'],
            'Content-Type': _0x10ae4c['YmZQe'],
            'Origin': _0x10ae4c['AREmZ'],
            'Connection': _0x10ae4c['nfoyA'],
            'Accept': _0x10ae4c['XFTrH'],
            'User-Agent': '',
            'Accept-Language': _0x10ae4c['qAlHx'],
            'Referer': 'https://game-cdn.moxigame.cn/ClickEliminate/IntegralPK_jd/thirdapp/index.html?&token=' + $['token'] + '&returnurl=https%3A%2F%2Fprodev.m.jd.com%2Fmall%2Factive%2F45njQg88Vym1s2EGp9aV6cPvqecw%2Findex.html%23%2Findex%3FloginIn%3DloginIn&=&friendPin=' + $['pin'],
            'Sec-Fetch-Mode': _0x10ae4c['PLabO'],
            'Sec-Fetch-Site': _0x10ae4c['gkrxk'],
            'Sec-Fetch-Dest': _0x10ae4c['cgXce']
        }
    };
}

function launchBattle(_0x14fbba) {
    var _0x9d2588 = {
        'vKMUD': function(_0x19f645, _0x32ecda) {
            return _0x19f645(_0x32ecda);
        },
        'ZFhrp': '不要在BoxJS手动复制粘贴修改cookie',
        'RbXlA': function(_0x59dbab, _0x40c7de) {
            return _0x59dbab === _0x40c7de;
        },
        'CdaJK': 'EDkfi',
        'iRvxw': 'SuqUF',
        'CQSfT': '挑战成功',
        'mtUpS': function(_0x4a64f2, _0x2c847d) {
            return _0x4a64f2 == _0x2c847d;
        },
        'VTZiK': '今日次数已耗尽',
        'gIwGz': function(_0x566d6c, _0x2db960) {
            return _0x566d6c !== _0x2db960;
        },
        'DyldY': 'ocQBT',
        'tHHzu': 'CRwKf',
        'vaMTf': 'Zvlyw',
        'gxZip': 'wtmKK',
        'FwFYo': '发起挑战'
    };
    console['log'](_0x9d2588['FwFYo']);
    return new Promise(_0x34ccc3 => {
        var _0x58a2fc = {
            'nquLy': function(_0xbb9bc8, _0x5b2093) {
                return _0x9d2588['vKMUD'](_0xbb9bc8, _0x5b2093);
            },
            'rerrK': _0x9d2588['ZFhrp'],
            'bFgMS': function(_0x3a0be7, _0x56ba0c) {
                return _0x9d2588['RbXlA'](_0x3a0be7, _0x56ba0c);
            },
            'Oqpyo': _0x9d2588['CdaJK'],
            'HcTTm': _0x9d2588['iRvxw'],
            'sMdem': _0x9d2588['CQSfT'],
            'ELxEh': function(_0x554673, _0x278218) {
                return _0x9d2588['mtUpS'](_0x554673, _0x278218);
            },
            'nyuVw': _0x9d2588['VTZiK'],
            'PavLB': function(_0xde09e, _0x144ec1) {
                return _0x9d2588['gIwGz'](_0xde09e, _0x144ec1);
            },
            'HHxmF': _0x9d2588['DyldY'],
            'nVMMZ': _0x9d2588['tHHzu'],
            'FEwFn': function(_0x37af6b, _0x4e631c) {
                return _0x9d2588['gIwGz'](_0x37af6b, _0x4e631c);
            },
            'tPRbL': _0x9d2588['vaMTf']
        };
        if (_0x9d2588['RbXlA'](_0x9d2588['gxZip'], _0x9d2588['gxZip'])) {
            $['post'](_0x9d2588['vKMUD'](launchBattleUrl, _0x14fbba), (_0x500162, _0x13b897, _0x340b95) => {
                if (_0x58a2fc['bFgMS'](_0x58a2fc['Oqpyo'], _0x58a2fc['HcTTm'])) {
                    _0x58a2fc['nquLy'](_0x34ccc3, _0x340b95);
                } else {
                    try {
                        if (_0x340b95) {
                            let _0x41617b = $['toObj'](_0x340b95);
                            console['log'](_0x41617b);
                            if (_0x41617b) {
                                console['log'](_0x58a2fc['sMdem']);
                                _0x41617b = _0x41617b['data'];
                                if (_0x41617b['msg']) {
                                    console['log'](_0x41617b['msg']);
                                    if (_0x58a2fc['ELxEh'](_0x41617b['msg'], _0x58a2fc['nyuVw'])) {
                                        bcomplate = !![];
                                    }
                                } else {
                                    if (_0x58a2fc['PavLB'](_0x58a2fc['HHxmF'], _0x58a2fc['nVMMZ'])) {
                                        console['log']($['toStr'](_0x41617b));
                                    } else {
                                        try {
                                            return JSON['parse'](str);
                                        } catch (_0x2510f3) {
                                            console['log'](_0x2510f3);
                                            $['msg']($['name'], '', _0x58a2fc['rerrK']);
                                            return [];
                                        }
                                    }
                                }
                            }
                        }
                    } catch (_0x1f9afb) {
                        console['log'](_0x1f9afb);
                    } finally {
                        if (_0x58a2fc['FEwFn'](_0x58a2fc['tPRbL'], _0x58a2fc['tPRbL'])) {
                            let _0x4522fb = $['toObj'](_0x340b95);
                            if (_0x4522fb) {
                                $['token'] = _0x4522fb['data'];
                            }
                        } else {
                            _0x58a2fc['nquLy'](_0x34ccc3, _0x340b95);
                        }
                    }
                }
            });
        } else {
            return JSON['parse'](t);
        }
    });
}

function getScore(_0x28a1fe) {
    var _0x2057b4 = {
        'TalQN': function(_0x12ee12, _0x4cd09e) {
            return _0x12ee12 !== _0x4cd09e;
        },
        'iWVJy': 'YoHEV',
        'Gpgur': function(_0x2a8fc0, _0x1f68cd) {
            return _0x2a8fc0 === _0x1f68cd;
        },
        'EwZrw': 'HydzL',
        'CoLuK': 'DPvzb',
        'fkIWb': function(_0x3641e7, _0x2e5d41) {
            return _0x3641e7 !== _0x2e5d41;
        },
        'mvCRJ': 'rVERs',
        'URTld': 'NeBEe',
        'MhBfH': 'AAETV',
        'UZlUT': 'zjprw',
        'ZnGKd': function(_0x4bfe24, _0x3c0582) {
            return _0x4bfe24(_0x3c0582);
        },
        'UrVkB': '5|6|7|2|4|13|10|12|3|9|1|8|0|14|11',
        'EaTmW': function(_0x577763, _0x133517) {
            return _0x577763 - _0x133517;
        },
        'xNQVA': function(_0x4b14d8, _0x3c18ba) {
            return _0x4b14d8 << _0x3c18ba;
        },
        'oAXvc': function(_0x457505, _0x522af5) {
            return _0x457505 * _0x522af5;
        },
        'MEXeV': function(_0x26bd67, _0x54137c) {
            return _0x26bd67 % _0x54137c;
        },
        'EcPdu': function(_0x18b453, _0x2086e3) {
            return _0x18b453 / _0x2086e3;
        },
        'eIOkU': function(_0x9e275a, _0x30828a) {
            return _0x9e275a % _0x30828a;
        },
        'bboXP': function(_0x529af3, _0x3eabbd) {
            return _0x529af3 < _0x3eabbd;
        },
        'euQsq': function(_0x551f91, _0x25ccd3) {
            return _0x551f91 - _0x25ccd3;
        },
        'KflPy': function(_0x1b4953, _0x49ca81) {
            return _0x1b4953 | _0x49ca81;
        },
        'myTss': function(_0x16470f, _0x138c8d) {
            return _0x16470f + _0x138c8d;
        },
        'IKVle': function(_0x3458de, _0xf7b226) {
            return _0x3458de >>> _0xf7b226;
        },
        'PFMdq': 'https://jd.moxigame.cn/likejxz/getScore?actId=9&appId=dafbe42d5bff9d82298e5230eb8c3f79&lkEPin=',
        'jQnAN': 'jd.moxigame.cn',
        'yrxHC': 'application/json',
        'NwyUu': 'https://game-cdn.moxigame.cn',
        'LcZWI': 'keep-alive',
        'RcVZI': ' */*',
        'SDJEB': 'zh-cn',
        'ePdug': 'gzip, deflate, br'
    };
    console['log'](_0x2057b4['myTss'](_0x2057b4['myTss']('查询', _0x28a1fe), '分数'));
    return new Promise(_0x100540 => {
        var _0x1f3124 = {
            'mSyoi': _0x2057b4['UrVkB'],
            'rXZaJ': function(_0x4552bc, _0x1efd86) {
                return _0x2057b4['EaTmW'](_0x4552bc, _0x1efd86);
            },
            'eKzOH': function(_0x32b575, _0xe3041) {
                return _0x2057b4['xNQVA'](_0x32b575, _0xe3041);
            },
            'qqLLH': function(_0x35e0c5, _0x44a247) {
                return _0x2057b4['oAXvc'](_0x35e0c5, _0x44a247);
            },
            'qvbjg': function(_0x54bb83, _0x39e63e) {
                return _0x2057b4['MEXeV'](_0x54bb83, _0x39e63e);
            },
            'NcZGq': function(_0x369014, _0x22b4d2) {
                return _0x2057b4['EcPdu'](_0x369014, _0x22b4d2);
            },
            'qFTHS': function(_0x1e687b, _0x1ba898) {
                return _0x2057b4['eIOkU'](_0x1e687b, _0x1ba898);
            },
            'Ydgao': function(_0x2774d8, _0x2f597e) {
                return _0x2057b4['bboXP'](_0x2774d8, _0x2f597e);
            },
            'baDyc': function(_0x35e034, _0x600022) {
                return _0x2057b4['euQsq'](_0x35e034, _0x600022);
            },
            'ekabb': function(_0x5a2f08, _0x84e390) {
                return _0x2057b4['KflPy'](_0x5a2f08, _0x84e390);
            },
            'GCoYc': function(_0x4707ad, _0x5cef9) {
                return _0x2057b4['myTss'](_0x4707ad, _0x5cef9);
            },
            'sxOnF': function(_0x44e355, _0x2e8481) {
                return _0x2057b4['xNQVA'](_0x44e355, _0x2e8481);
            },
            'KmyGR': function(_0x3b33ed, _0x240fdb) {
                return _0x2057b4['euQsq'](_0x3b33ed, _0x240fdb);
            },
            'REUzw': function(_0x261aad, _0x4cd684) {
                return _0x2057b4['eIOkU'](_0x261aad, _0x4cd684);
            },
            'JjGeF': function(_0x455706, _0x386a74) {
                return _0x2057b4['ZnGKd'](_0x455706, _0x386a74);
            },
            'kArmX': function(_0x576d89, _0xf4e1cb) {
                return _0x2057b4['IKVle'](_0x576d89, _0xf4e1cb);
            }
        };
        let _0x57d4a9 = {
            'url': _0x2057b4['myTss'](_0x2057b4['PFMdq'], _0x28a1fe),
            'headers': {
                'Host': _0x2057b4['jQnAN'],
                'Content-Type': _0x2057b4['yrxHC'],
                'Origin': _0x2057b4['NwyUu'],
                'Connection': _0x2057b4['LcZWI'],
                'Accept': _0x2057b4['RcVZI'],
                'User-Agent': '',
                'Accept-Language': _0x2057b4['SDJEB'],
                'Accept-Encoding': _0x2057b4['ePdug']
            }
        };
        $['get'](_0x57d4a9, (_0x1e5ffa, _0x11fe0d, _0x25e4d3) => {
            let _0x887445 = 0x0;
            try {
                if (_0x2057b4['TalQN'](_0x2057b4['iWVJy'], _0x2057b4['iWVJy'])) {
                    console['log'](e);
                } else {
                    if (_0x25e4d3) {
                        if (_0x2057b4['Gpgur'](_0x2057b4['EwZrw'], _0x2057b4['CoLuK'])) {
                            try {
                                return JSON['parse'](t);
                            } catch (_0x1afe95) {
                                return _0x1afe95;
                            }
                        } else {
                            let _0x43aab6 = $['toObj'](_0x25e4d3);
                            if (_0x43aab6) {
                                if (_0x2057b4['fkIWb'](_0x2057b4['mvCRJ'], _0x2057b4['URTld'])) {
                                    _0x887445 = _0x43aab6['data'];
                                } else {
                                    return !![];
                                }
                            }
                        }
                    }
                }
            } catch (_0x32ff08) {
                if (_0x2057b4['fkIWb'](_0x2057b4['MhBfH'], _0x2057b4['UZlUT'])) {
                    console['log'](_0x32ff08);
                } else {
                    var _0x26f97e = _0x1f3124['mSyoi']['split']('|'),
                        _0x508c64 = 0x0;
                    while (!![]) {
                        switch (_0x26f97e[_0x508c64++]) {
                            case '0':
                                _0x47c685[_0x1f3124['rXZaJ'](_0x5e3d68, 0x2)] = _0x1f3124['eKzOH'](_0xa78ebb, 0x3);
                                continue;
                            case '1':
                                _0x46d42b = _0x1f3124['qqLLH'](_0x1f3124['qvbjg'](_0x29f0d1, 0x4), 0x8);
                                continue;
                            case '2':
                                var _0x3316f3 = _0x1f3124['NcZGq'](_0x1f3124['rXZaJ'](_0x3924fc, _0x1f3124['qFTHS'](_0x3924fc, 0x40)), 0x40);
                                continue;
                            case '3':
                                while (_0x1f3124['Ydgao'](_0x29f0d1, _0xa78ebb)) {
                                    _0x449025 = _0x1f3124['NcZGq'](_0x1f3124['baDyc'](_0x29f0d1, _0x1f3124['qFTHS'](_0x29f0d1, 0x4)), 0x4);
                                    _0x46d42b = _0x1f3124['qqLLH'](_0x1f3124['qFTHS'](_0x29f0d1, 0x4), 0x8);
                                    _0x47c685[_0x449025] = _0x1f3124['ekabb'](_0x47c685[_0x449025], _0x1f3124['eKzOH'](sMessage['charCodeAt'](_0x29f0d1), _0x46d42b));
                                    _0x29f0d1++;
                                }
                                continue;
                            case '4':
                                var _0x5e3d68 = _0x1f3124['qqLLH'](_0x1f3124['GCoYc'](_0x3316f3, 0x1), 0x10);
                                continue;
                            case '5':
                                var _0x449025;
                                continue;
                            case '6':
                                var _0xa78ebb = sMessage['length'];
                                continue;
                            case '7':
                                var _0x3924fc = _0x1f3124['GCoYc'](_0xa78ebb, 0x8);
                                continue;
                            case '8':
                                _0x47c685[_0x449025] = _0x1f3124['ekabb'](_0x47c685[_0x449025], _0x1f3124['sxOnF'](0x80, _0x46d42b));
                                continue;
                            case '9':
                                _0x449025 = _0x1f3124['NcZGq'](_0x1f3124['KmyGR'](_0x29f0d1, _0x1f3124['REUzw'](_0x29f0d1, 0x4)), 0x4);
                                continue;
                            case '10':
                                var _0x46d42b = 0x0;
                                continue;
                            case '11':
                                return _0x47c685;
                            case '12':
                                var _0x29f0d1 = 0x0;
                                continue;
                            case '13':
                                var _0x47c685 = _0x1f3124['JjGeF'](Array, _0x1f3124['KmyGR'](_0x5e3d68, 0x1));
                                continue;
                            case '14':
                                _0x47c685[_0x1f3124['KmyGR'](_0x5e3d68, 0x1)] = _0x1f3124['kArmX'](_0xa78ebb, 0x1d);
                                continue;
                        }
                        break;
                    }
                }
            } finally {
                _0x2057b4['ZnGKd'](_0x100540, _0x887445);
            }
        });
    });
}

function receiveBattle(_0xd3827) {
    var _0x5f5d54 = {
        'avDtz': function(_0x5064d4) {
            return _0x5064d4();
        },
        'lZvfM': function(_0x4bdfd8, _0x54f859) {
            return _0x4bdfd8 === _0x54f859;
        },
        'fhKqS': 'Dosuv',
        'BTEoe': 'TVAFL',
        'qjuIZ': 'TCIGI',
        'olLoI': '挑战成功',
        'ytSoF': function(_0x32dd74, _0x594ff9) {
            return _0x32dd74 == _0x594ff9;
        },
        'ojQkF': function(_0x37f45e, _0x4f305c) {
            return _0x37f45e !== _0x4f305c;
        },
        'vcIhj': 'aaGNC',
        'pMGhl': function(_0x551b2b, _0xfb014e) {
            return _0x551b2b + _0xfb014e;
        },
        'pcAjj': '当前胜场:',
        'NrUHr': function(_0xd6c65e, _0x5800a5) {
            return _0xd6c65e === _0x5800a5;
        },
        'aoySD': 'CAGkN',
        'fTHzG': function(_0x40f395, _0x4b7bc3) {
            return _0x40f395(_0x4b7bc3);
        },
        'ThqPv': function(_0x271d7b, _0x405c2) {
            return _0x271d7b & _0x405c2;
        },
        'OIrAY': function(_0x2a4293, _0x2789b4) {
            return _0x2a4293 ^ _0x2789b4;
        },
        'LzyrO': function(_0x5480e7, _0x32ea02) {
            return _0x5480e7 ^ _0x32ea02;
        },
        'SpzdP': function(_0x381aca, _0xd0a943) {
            return _0x381aca ^ _0xd0a943;
        },
        'ZqpYv': '获得奖励:',
        'AUtyt': function(_0x219e29, _0x2d0b89) {
            return _0x219e29 !== _0x2d0b89;
        },
        'SKhEK': 'TjVOA',
        'kbyqD': 'pengyougou.m.jd.com',
        'qmMhs': 'application/json',
        'KRAHV': 'https://game-cdn.moxigame.cn',
        'ywQwq': 'keep-alive',
        'VEttU': ' */*',
        'sUJku': 'zh-cn',
        'fRGle': 'https://game-cdn.moxigame.cn/',
        'sHMYT': 'cors',
        'KblKv': 'cross-site',
        'KVpbx': 'empty',
        'ehNTi': function(_0x5fdf30, _0x2a869c) {
            return _0x5fdf30 + _0x2a869c;
        },
        'pfsYV': function(_0x5071b5, _0x3937b5) {
            return _0x5071b5 + _0x3937b5;
        },
        'WvcGV': 'dafbe42d5bff9d82298e5230eb8c3f79_34e1e81ae8122ca039ec5738d33b4eee_'
    };
    let _0x49af07 = new Date()['valueOf']();
    let _0x139fc8 = _0x5f5d54['ehNTi'](_0x5f5d54['pfsYV'](_0x5f5d54['pfsYV'](_0x5f5d54['WvcGV'], '{\"actId\":9,\"sponsor\":\"' + $['pin'] + '\"}'), '_'), _0x49af07);
    _0x139fc8 = _0x139fc8['MD5'](0x20);
    return new Promise(_0x2baaaf => {
        var _0x50b782 = {
            'jNsDU': function(_0x1350df, _0x559bb2) {
                return _0x5f5d54['ThqPv'](_0x1350df, _0x559bb2);
            },
            'ohAHX': function(_0x4fe8b6, _0x5b179f) {
                return _0x5f5d54['OIrAY'](_0x4fe8b6, _0x5b179f);
            },
            'YljYN': function(_0xffdfaf, _0x211b4b) {
                return _0x5f5d54['LzyrO'](_0xffdfaf, _0x211b4b);
            },
            'XOFDf': function(_0x29cb7b, _0x5b19fc) {
                return _0x5f5d54['SpzdP'](_0x29cb7b, _0x5b19fc);
            },
            'BtVQU': function(_0x38b8a5, _0x5d114b) {
                return _0x5f5d54['SpzdP'](_0x38b8a5, _0x5d114b);
            },
            'woDro': function(_0x3c5d5c, _0x2b7b0a) {
                return _0x5f5d54['pMGhl'](_0x3c5d5c, _0x2b7b0a);
            },
            'FmHvM': _0x5f5d54['ZqpYv']
        };
        if (_0x5f5d54['AUtyt'](_0x5f5d54['SKhEK'], _0x5f5d54['SKhEK'])) {
            console['log'](e);
        } else {
            let _0x3ca407 = {
                'url': 'https://pengyougou.m.jd.com/open/api/like/jxz/receiveBattle?appId=dafbe42d5bff9d82298e5230eb8c3f79&lkEPin=' + _0xd3827 + '&recipient=' + $['pin'] + '&sign=' + _0x139fc8 + '&t=' + _0x49af07,
                'body': '{"actId":9,"sponsor":"' + $['pin'] + '\"}',
                'headers': {
                    'Host': _0x5f5d54['kbyqD'],
                    'Content-Type': _0x5f5d54['qmMhs'],
                    'Origin': _0x5f5d54['KRAHV'],
                    'Connection': _0x5f5d54['ywQwq'],
                    'Accept': _0x5f5d54['VEttU'],
                    'User-Agent': '',
                    'Accept-Language': _0x5f5d54['sUJku'],
                    'Referer': _0x5f5d54['fRGle'],
                    'Sec-Fetch-Mode': _0x5f5d54['sHMYT'],
                    'Sec-Fetch-Site': _0x5f5d54['KblKv'],
                    'Sec-Fetch-Dest': _0x5f5d54['KVpbx']
                }
            };
            $['post'](_0x3ca407, (_0x54b689, _0xa8ecff, _0x26cf2f) => {
                var _0x2cafab = {
                    'dyBmE': function(_0x514c5d) {
                        return _0x5f5d54['avDtz'](_0x514c5d);
                    }
                };
                if (_0x5f5d54['lZvfM'](_0x5f5d54['fhKqS'], _0x5f5d54['BTEoe'])) {
                    var _0x4813ab = {
                        'AwANj': function(_0x3610ca) {
                            return _0x2cafab['dyBmE'](_0x3610ca);
                        }
                    };
                    return new Promise(_0x3b6676 => {
                        $['log']($['name'], '', '京东账号' + $['index'] + $['nickName'] + '\x0a' + message);
                        _0x4813ab['AwANj'](_0x3b6676);
                    });
                } else {
                    try {
                        if (_0x26cf2f) {
                            if (_0x5f5d54['lZvfM'](_0x5f5d54['qjuIZ'], _0x5f5d54['qjuIZ'])) {
                                let _0x45c547 = $['toObj'](_0x26cf2f);
                                console['log'](_0x45c547);
                                if (_0x45c547) {
                                    _0x45c547 = _0x45c547['data'];
                                    console['log'](_0x5f5d54['olLoI']);
                                    console['log']($['toStr'](_0x45c547));
                                    if (_0x5f5d54['ytSoF'](_0x45c547['state'], 0x1)) {
                                        if (_0x45c547['pkResult']) {
                                            if (_0x5f5d54['ojQkF'](_0x5f5d54['vcIhj'], _0x5f5d54['vcIhj'])) {
                                                $['done']();
                                            } else {
                                                console['log'](_0x5f5d54['pMGhl'](_0x5f5d54['pcAjj'], _0x45c547['pkResult']['fromWinNum']));
                                            }
                                        }
                                    } else {
                                        console['log']($['toStr'](_0x45c547));
                                    }
                                }
                            } else {
                                if (_0x50b782['jNsDU'](lResult, 0x40000000)) return _0x50b782['ohAHX'](_0x50b782['YljYN'](_0x50b782['XOFDf'](lResult, 0xc0000000), lX8), lY8);
                                else return _0x50b782['XOFDf'](_0x50b782['XOFDf'](_0x50b782['BtVQU'](lResult, 0x40000000), lX8), lY8);
                            }
                        }
                    } catch (_0x5ad95a) {
                        if (_0x5f5d54['NrUHr'](_0x5f5d54['aoySD'], _0x5f5d54['aoySD'])) {
                            console['log'](_0x5ad95a);
                        } else {
                            var _0xb02196 = {
                                'pfkdW': function(_0x56e1cb, _0x3ffc05) {
                                    return _0x50b782['woDro'](_0x56e1cb, _0x3ffc05);
                                },
                                'RDNcl': _0x50b782['FmHvM']
                            };
                            $['openAwards']['forEach'](_0x22a90f => {
                                console['log'](_0xb02196['pfkdW'](_0xb02196['RDNcl'], $['toStr'](_0x22a90f)));
                            });
                        }
                    } finally {
                        _0x5f5d54['fTHzG'](_0x2baaaf, _0x26cf2f);
                    }
                }
            });
        }
    });
}

function getBoxRewardInfo() {
    var _0x1fe920 = {
        'TXEsS': function(_0x4da547, _0x44bfdb) {
            return _0x4da547 === _0x44bfdb;
        },
        'IwZks': 'aLNMD',
        'nMLeu': 'dthXr',
        'rBbCF': function(_0x480701, _0x364356) {
            return _0x480701 !== _0x364356;
        },
        'qfWWD': 'AIguT',
        'ONaNK': function(_0x324981, _0x1f1221) {
            return _0x324981 + _0x1f1221;
        },
        'HmnIC': '总胜场:',
        'qiyjP': 'mZmLy',
        'HFUfx': function(_0x275e76, _0x1a8f5a) {
            return _0x275e76 === _0x1a8f5a;
        },
        'SkcLC': 'GlGrG',
        'ahSXg': 'cvTvA',
        'dfwqa': function(_0x676ece, _0x108c79) {
            return _0x676ece(_0x108c79);
        },
        'tWsSo': function(_0x1df5ff, _0x53cdcd) {
            return _0x1df5ff(_0x53cdcd);
        },
        'oOfit': 'https://pengyougou.m.jd.com/like/jxz/getBoxRewardInfo?actId=9&appId=dafbe42d5bff9d82298e5230eb8c3f79&lkEPin=',
        'LnAJA': 'jdjoy.jd.com',
        'ECogi': 'https://prodev.m.jd.com',
        'mGhgs': 'keep-alive',
        'CJjWO': 'application/json, text/plain, */*',
        'rLYjA': 'jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'ELpkP': 'zh-cn',
        'qgRco': 'https://prodev.m.jd.com/mall/active/4HTqMAvser7ctEBEdhK4yA7fXpPi/index.html?babelChannel=ttt9&tttparams=AeOIMwdeyJnTG5nIjoiMTE3LjAyOTE1NyIsImdMYXQiOiIyNS4wOTUyMDcifQ7%3D%3D&lng=00.000000&lat=00.000000&sid=&un_area='
    };
    return new Promise(_0xb38bca => {
        var _0x2c2be8 = {
            'MwDxT': function(_0x4f782e, _0x33543a) {
                return _0x1fe920['tWsSo'](_0x4f782e, _0x33543a);
            },
            'EVzxA': function(_0x28523f, _0x133122) {
                return _0x1fe920['tWsSo'](_0x28523f, _0x133122);
            }
        };
        let _0x2f9b6d = {
            'url': _0x1fe920['ONaNK'](_0x1fe920['oOfit'], $['pin']),
            'headers': {
                'Host': _0x1fe920['LnAJA'],
                'Origin': _0x1fe920['ECogi'],
                'Cookie': cookie,
                'Connection': _0x1fe920['mGhgs'],
                'Accept': _0x1fe920['CJjWO'],
                'User-Agent': _0x1fe920['rLYjA'],
                'Accept-Language': _0x1fe920['ELpkP'],
                'Referer': _0x1fe920['qgRco']
            }
        };
        $['get'](_0x2f9b6d, (_0x4b9bf2, _0x2b44b1, _0x54d392) => {
            if (_0x1fe920['TXEsS'](_0x1fe920['IwZks'], _0x1fe920['nMLeu'])) {
                if (_0x54d392) {
                    let _0x1e8bad = $['toObj'](_0x54d392);
                    if (_0x1e8bad) {
                        $['token'] = _0x1e8bad['data'];
                    }
                }
            } else {
                try {
                    console['log'](_0x54d392);
                    if (_0x54d392) {
                        if (_0x1fe920['rBbCF'](_0x1fe920['qfWWD'], _0x1fe920['qfWWD'])) {
                            _0x2c2be8['MwDxT'](_0xb38bca, _0x54d392);
                        } else {
                            let _0x5d9ca1 = $['toObj'](_0x54d392);
                            if (_0x5d9ca1['success']) {
                                $['awards'] = _0x5d9ca1['data']['awards'];
                                $['totalWins'] = _0x5d9ca1['data']['totalWins'];
                                console['log'](_0x1fe920['ONaNK'](_0x1fe920['HmnIC'], _0x5d9ca1['data']['totalWins']));
                            }
                        }
                    }
                } catch (_0x5dbc05) {
                    if (_0x1fe920['rBbCF'](_0x1fe920['qiyjP'], _0x1fe920['qiyjP'])) {
                        _0x2c2be8['EVzxA'](_0xb38bca, _0x54d392);
                    } else {
                        console['log'](_0x5dbc05);
                    }
                } finally {
                    if (_0x1fe920['HFUfx'](_0x1fe920['SkcLC'], _0x1fe920['ahSXg'])) {
                        console['log'](e);
                    } else {
                        _0x1fe920['dfwqa'](_0xb38bca, _0x54d392);
                    }
                }
            }
        });
    });
}

function sendBoxReward(_0x7126a1) {
    var _0x7e254c = {
        'aQOzm': '挑战成功',
        'ZmsgK': function(_0x7cfcda, _0x2ec61d) {
            return _0x7cfcda == _0x2ec61d;
        },
        'mYFeG': '今日次数已耗尽',
        'KTjjN': function(_0x5927d7, _0x34bd8c) {
            return _0x5927d7 === _0x34bd8c;
        },
        'uqkuN': 'IwNpM',
        'pcjEA': 'vTdgk',
        'CPucV': function(_0x144e8e, _0x5e8b64) {
            return _0x144e8e + _0x5e8b64;
        },
        'zRoRE': '获得奖励:',
        'nhDao': function(_0x532338, _0x1b5c67, _0x53771b) {
            return _0x532338(_0x1b5c67, _0x53771b);
        },
        'cxuKl': function(_0x34bb7e, _0x299049, _0x1eb940) {
            return _0x34bb7e(_0x299049, _0x1eb940);
        },
        'RFORr': function(_0x39167c, _0xd1efe, _0x1e35d3, _0x4a1143) {
            return _0x39167c(_0xd1efe, _0x1e35d3, _0x4a1143);
        },
        'CLYsw': function(_0x460304, _0x47aa98, _0xc74364) {
            return _0x460304(_0x47aa98, _0xc74364);
        },
        'rdljS': 'LNmOa',
        'rLQKt': 'qacaz',
        'cawzH': function(_0x2c196b, _0x2d577e) {
            return _0x2c196b !== _0x2d577e;
        },
        'vQgrp': 'oNDFw',
        'TgeyF': function(_0x172d69, _0x1fcc8f) {
            return _0x172d69(_0x1fcc8f);
        },
        'hCSxb': function(_0x553da2, _0x303f8f) {
            return _0x553da2 + _0x303f8f;
        },
        'gDssN': function(_0x501de8, _0x346ddc) {
            return _0x501de8 + _0x346ddc;
        },
        'rQHQS': 'https://pengyougou.m.jd.com/like/jxz/sendBoxReward?rewardConfigId=',
        'sJiUQ': '&actId=9&appId=dafbe42d5bff9d82298e5230eb8c3f79&lkEPin=',
        'DYjdX': 'jdjoy.jd.com',
        'nFYwo': 'https://prodev.m.jd.com',
        'XmdUB': 'keep-alive',
        'dapmj': 'application/json, text/plain, */*',
        'JNeqy': 'jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'jIUTe': 'zh-cn',
        'hDmnz': 'https://prodev.m.jd.com/mall/active/4HTqMAvser7ctEBEdhK4yA7fXpPi/index.html?babelChannel=ttt9&tttparams=AeOIMwdeyJnTG5nIjoiMTE3LjAyOTE1NyIsImdMYXQiOiIyNS4wOTUyMDcifQ7%3D%3D&lng=00.000000&lat=00.000000&sid=&un_area='
    };
    return new Promise(_0x21a376 => {
        var _0xfdf688 = {
            'CEKDC': _0x7e254c['aQOzm'],
            'eKbQt': function(_0x1c395b, _0x3ac115) {
                return _0x7e254c['ZmsgK'](_0x1c395b, _0x3ac115);
            },
            'gdSsF': _0x7e254c['mYFeG'],
            'InEVv': function(_0xbf75ca, _0x13f7da) {
                return _0x7e254c['KTjjN'](_0xbf75ca, _0x13f7da);
            },
            'eSbER': _0x7e254c['uqkuN'],
            'esfix': _0x7e254c['pcjEA'],
            'TauOq': function(_0x44a449, _0x8e461d) {
                return _0x7e254c['CPucV'](_0x44a449, _0x8e461d);
            },
            'afJxM': _0x7e254c['zRoRE'],
            'UTLod': function(_0x135373, _0x5a7bbc, _0x5b224b) {
                return _0x7e254c['nhDao'](_0x135373, _0x5a7bbc, _0x5b224b);
            },
            'WvJtd': function(_0x28f267, _0x58f30d, _0x2bd1dd) {
                return _0x7e254c['cxuKl'](_0x28f267, _0x58f30d, _0x2bd1dd);
            },
            'jspsR': function(_0x308238, _0x16db68, _0x529536, _0x2d2653) {
                return _0x7e254c['RFORr'](_0x308238, _0x16db68, _0x529536, _0x2d2653);
            },
            'eJHKq': function(_0x3f05e2, _0x4f2cfd, _0x4d3287) {
                return _0x7e254c['CLYsw'](_0x3f05e2, _0x4f2cfd, _0x4d3287);
            },
            'Flzao': _0x7e254c['rdljS'],
            'UFwdK': function(_0x35a440, _0x4dceb5) {
                return _0x7e254c['KTjjN'](_0x35a440, _0x4dceb5);
            },
            'ketLa': _0x7e254c['rLQKt'],
            'KoiPv': function(_0x255813, _0x290d85) {
                return _0x7e254c['cawzH'](_0x255813, _0x290d85);
            },
            'tQBaI': _0x7e254c['vQgrp'],
            'nsmjf': function(_0xe3138e, _0x445157) {
                return _0x7e254c['TgeyF'](_0xe3138e, _0x445157);
            }
        };
        let _0x8733ad = {
            'url': _0x7e254c['hCSxb'](_0x7e254c['hCSxb'](_0x7e254c['gDssN'](_0x7e254c['rQHQS'], _0x7126a1), _0x7e254c['sJiUQ']), $['pin']),
            'headers': {
                'Host': _0x7e254c['DYjdX'],
                'Origin': _0x7e254c['nFYwo'],
                'Cookie': cookie,
                'Connection': _0x7e254c['XmdUB'],
                'Accept': _0x7e254c['dapmj'],
                'User-Agent': _0x7e254c['JNeqy'],
                'Accept-Language': _0x7e254c['jIUTe'],
                'Referer': _0x7e254c['hDmnz']
            }
        };
        $['get'](_0x8733ad, (_0x266da5, _0x3e2516, _0xc06b2f) => {
            var _0x22bfa7 = {
                'gaNlp': _0xfdf688['CEKDC'],
                'pILhA': function(_0xcc100b, _0x3883c9) {
                    return _0xfdf688['eKbQt'](_0xcc100b, _0x3883c9);
                },
                'HCLik': _0xfdf688['gdSsF'],
                'IpYgs': function(_0x450298, _0xdc5f1c) {
                    return _0xfdf688['InEVv'](_0x450298, _0xdc5f1c);
                },
                'glZiX': _0xfdf688['eSbER'],
                'HWVax': _0xfdf688['esfix'],
                'Pkzhg': function(_0x21240f, _0x602c92) {
                    return _0xfdf688['TauOq'](_0x21240f, _0x602c92);
                },
                'MCmhP': _0xfdf688['afJxM'],
                'nbTOC': function(_0x355adf, _0x4944b7, _0x2ee82d) {
                    return _0xfdf688['UTLod'](_0x355adf, _0x4944b7, _0x2ee82d);
                },
                'UEgVt': function(_0x27e284, _0x206f01, _0x2dbbd1) {
                    return _0xfdf688['WvJtd'](_0x27e284, _0x206f01, _0x2dbbd1);
                },
                'jqraW': function(_0x22d914, _0x4b0318, _0xfbe54d, _0x409f84) {
                    return _0xfdf688['jspsR'](_0x22d914, _0x4b0318, _0xfbe54d, _0x409f84);
                },
                'goxpU': function(_0x2514ae, _0x19bf9c, _0x10ce61) {
                    return _0xfdf688['eJHKq'](_0x2514ae, _0x19bf9c, _0x10ce61);
                }
            };
            if (_0xfdf688['InEVv'](_0xfdf688['Flzao'], _0xfdf688['Flzao'])) {
                try {
                    if (_0xfdf688['UFwdK'](_0xfdf688['ketLa'], _0xfdf688['ketLa'])) {
                        console['log'](_0xc06b2f);
                        if (_0xc06b2f) {
                            let _0x37e351 = $['toObj'](_0xc06b2f);
                            if (_0x37e351['success']) {
                                $['openAwards'] = _0x37e351['datas'];
                                if ($['openAwards']) {
                                    $['openAwards']['forEach'](_0x575509 => {
                                        if (_0x22bfa7['IpYgs'](_0x22bfa7['glZiX'], _0x22bfa7['HWVax'])) {
                                            console['log'](_0x22bfa7['gaNlp']);
                                            _0x37e351 = _0x37e351['data'];
                                            if (_0x37e351['msg']) {
                                                console['log'](_0x37e351['msg']);
                                                if (_0x22bfa7['pILhA'](_0x37e351['msg'], _0x22bfa7['HCLik'])) {
                                                    bcomplate = !![];
                                                }
                                            } else {
                                                console['log']($['toStr'](_0x37e351));
                                            }
                                        } else {
                                            console['log'](_0x22bfa7['Pkzhg'](_0x22bfa7['MCmhP'], $['toStr'](_0x575509)));
                                        }
                                    });
                                }
                            }
                        }
                    } else {
                        a = _0x22bfa7['nbTOC'](AddUnsigned, a, _0x22bfa7['nbTOC'](AddUnsigned, _0x22bfa7['UEgVt'](AddUnsigned, _0x22bfa7['jqraW'](I, b, c, d), x), ac));
                        return _0x22bfa7['goxpU'](AddUnsigned, _0x22bfa7['goxpU'](RotateLeft, a, s), b);
                    }
                } catch (_0x1c0d20) {
                    if (_0xfdf688['KoiPv'](_0xfdf688['tQBaI'], _0xfdf688['tQBaI'])) {
                        console['log'](_0x1c0d20);
                        console['log']('京东服务器访问数据为空，请检查自身设备网络情况');
                        return ![];
                    } else {
                        console['log'](_0x1c0d20);
                    }
                } finally {
                    _0xfdf688['nsmjf'](_0x21a376, _0xc06b2f);
                }
            } else {
                console['log']($['toStr'](data));
            }
        });
    });
}

function getPin() {
    var _0x2c428c = {
        'ICNLH': function(_0x5514ba, _0x42a527) {
            return _0x5514ba(_0x42a527);
        },
        'KMpXG': function(_0x47d51a, _0x2f69b0) {
            return _0x47d51a === _0x2f69b0;
        },
        'hhwEL': 'YmahN',
        'uyBCV': 'QJquc',
        'Caidi': function(_0x417ce0, _0x5be3e2) {
            return _0x417ce0 !== _0x5be3e2;
        },
        'nsezn': 'XsmmN',
        'gEUjy': 'BFgBQ',
        'dmAnz': 'https://jdjoy.jd.com/saas/framework/encrypt/pin?appId=dafbe42d5bff9d82298e5230eb8c3f79',
        'wTuYF': 'jdjoy.jd.com',
        'BUJoL': 'https://prodev.m.jd.com',
        'Rvlxx': 'keep-alive',
        'GvpwI': 'application/json, text/plain, */*',
        'gkYxL': 'jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'NiRLP': 'zh-cn',
        'ywqeg': 'https://prodev.m.jd.com/mall/active/4HTqMAvser7ctEBEdhK4yA7fXpPi/index.html?babelChannel=ttt9&tttparams=AeOIMwdeyJnTG5nIjoiMTE3LjAyOTE1NyIsImdMYXQiOiIyNS4wOTUyMDcifQ7%3D%3D&lng=00.000000&lat=00.000000&sid=&un_area='
    };
    return new Promise(_0x4434c7 => {
        if (_0x2c428c['Caidi'](_0x2c428c['gEUjy'], _0x2c428c['gEUjy'])) {
            let _0x5de150 = $['toObj'](res);
            if (_0x5de150) {
                $['pin'] = _0x5de150['data'];
            }
        } else {
            let _0x3006bc = {
                'url': _0x2c428c['dmAnz'],
                'headers': {
                    'Host': _0x2c428c['wTuYF'],
                    'Origin': _0x2c428c['BUJoL'],
                    'Cookie': cookie,
                    'Connection': _0x2c428c['Rvlxx'],
                    'Accept': _0x2c428c['GvpwI'],
                    'User-Agent': _0x2c428c['gkYxL'],
                    'Accept-Language': _0x2c428c['NiRLP'],
                    'Referer': _0x2c428c['ywqeg']
                }
            };
            $['post'](_0x3006bc, (_0x42593f, _0x112a44, _0x57f0d3) => {
                var _0x5b06d9 = {
                    'VXTwB': function(_0x4e417f, _0x34748a) {
                        return _0x2c428c['ICNLH'](_0x4e417f, _0x34748a);
                    }
                };
                if (_0x2c428c['KMpXG'](_0x2c428c['hhwEL'], _0x2c428c['uyBCV'])) {
                    _0x5b06d9['VXTwB'](_0x4434c7, _0x57f0d3);
                } else {
                    try {
                        if (_0x2c428c['Caidi'](_0x2c428c['nsezn'], _0x2c428c['nsezn'])) {
                            return e;
                        } else {
                            console['log'](_0x57f0d3);
                            if (_0x57f0d3) {
                                let _0x54c6a7 = $['toObj'](_0x57f0d3);
                                if (_0x54c6a7) {
                                    $['pin'] = _0x54c6a7['data'];
                                }
                            }
                        }
                    } catch (_0x4c396f) {
                        console['log'](_0x4c396f);
                    } finally {
                        _0x2c428c['ICNLH'](_0x4434c7, _0x57f0d3);
                    }
                }
            });
        }
    });
}

function getToken() {
    var _0x50d688 = {
        'RBUZa': function(_0x3b7800, _0x58409e) {
            return _0x3b7800 + _0x58409e;
        },
        'OjlOs': function(_0x3570a8, _0x5da497) {
            return _0x3570a8(_0x5da497);
        },
        'TWFtt': function(_0x278840, _0xb7bd2a) {
            return _0x278840 === _0xb7bd2a;
        },
        'wvhNn': 'AKIdi',
        'GwpKw': 'HhEKR',
        'jwvJn': 'TcNsd',
        'dzTaj': function(_0x47ca8b, _0x1c871d) {
            return _0x47ca8b(_0x1c871d);
        },
        'hRmML': 'https://jdjoy.jd.com/saas/framework/user/token?appId=dafbe42d5bff9d82298e5230eb8c3f79&client=m&url=pengyougou.m.jd.com',
        'uJtlv': 'jdjoy.jd.com',
        'wjLLg': 'https://prodev.m.jd.com',
        'jHrBR': 'keep-alive',
        'pyHGE': 'application/json, text/plain, */*',
        'pocsG': 'jdapp;iPhone;9.5.4;13.6;db48e750b34fe9cd5254d970a409af316d8b5cf3;network/wifi;ADID/38EE562E-B8B2-7B58-DFF3-D5A3CED0683A;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1',
        'rtHdd': 'zh-cn',
        'EFAiL': 'https://prodev.m.jd.com/mall/active/4HTqMAvser7ctEBEdhK4yA7fXpPi/index.html?babelChannel=ttt9&tttparams=AeOIMwdeyJnTG5nIjoiMTE3LjAyOTE1NyIsImdMYXQiOiIyNS4wOTUyMDcifQ7%3D%3D&lng=00.000000&lat=00.000000&sid=&un_area='
    };
    return new Promise(_0x5c2b98 => {
        let _0x240032 = {
            'url': _0x50d688['hRmML'],
            'headers': {
                'Host': _0x50d688['uJtlv'],
                'Origin': _0x50d688['wjLLg'],
                'Cookie': cookie,
                'Connection': _0x50d688['jHrBR'],
                'Accept': _0x50d688['pyHGE'],
                'User-Agent': _0x50d688['pocsG'],
                'Accept-Language': _0x50d688['rtHdd'],
                'Referer': _0x50d688['EFAiL']
            }
        };
        $['post'](_0x240032, (_0x454685, _0x1fb5e0, _0x189875) => {
            var _0x42d3ed = {
                'xrnbe': function(_0x2a7bb9, _0x64ed48) {
                    return _0x50d688['RBUZa'](_0x2a7bb9, _0x64ed48);
                },
                'uQOkF': function(_0x11922c, _0x4a069c) {
                    return _0x50d688['OjlOs'](_0x11922c, _0x4a069c);
                },
                'DCjnD': function(_0x1b9098, _0xcc4706) {
                    return _0x50d688['OjlOs'](_0x1b9098, _0xcc4706);
                }
            };
            try {
                if (_0x50d688['TWFtt'](_0x50d688['wvhNn'], _0x50d688['wvhNn'])) {
                    if (_0x189875) {
                        let _0x568328 = $['toObj'](_0x189875);
                        if (_0x568328) {
                            $['token'] = _0x568328['data'];
                        }
                    }
                } else {
                    return e;
                }
            } catch (_0x4f9ec3) {
                if (_0x50d688['TWFtt'](_0x50d688['GwpKw'], _0x50d688['jwvJn'])) {
                    return _0x42d3ed['xrnbe'](_0x42d3ed['uQOkF'](WordToHex, b), _0x42d3ed['DCjnD'](WordToHex, c));
                } else {
                    console['log'](_0x4f9ec3);
                }
            } finally {
                _0x50d688['dzTaj'](_0x5c2b98, _0x189875);
            }
        });
    });
}

function safeGet(_0x4f8152) {
    var _0x100c4a = {
        'AlRHN': function(_0x42d738, _0x183aac) {
            return _0x42d738 + _0x183aac;
        },
        'vGihs': '获得奖励:',
        'UQoeN': function(_0x4da489, _0x3586d0) {
            return _0x4da489 == _0x3586d0;
        },
        'ZFllO': 'object',
        'JhemI': function(_0x8202d4, _0x1d1d04) {
            return _0x8202d4 !== _0x1d1d04;
        },
        'GxOQq': 'RqEMQ'
    };
    try {
        if (_0x100c4a['UQoeN'](typeof JSON['parse'](_0x4f8152), _0x100c4a['ZFllO'])) {
            if (_0x100c4a['JhemI'](_0x100c4a['GxOQq'], _0x100c4a['GxOQq'])) {
                var _0x366e77 = {
                    'XswzG': function(_0x241bd9, _0x37ba38) {
                        return _0x100c4a['AlRHN'](_0x241bd9, _0x37ba38);
                    },
                    'YlwpB': _0x100c4a['vGihs']
                };
                $['openAwards'] = _0x4f8152['datas'];
                if ($['openAwards']) {
                    $['openAwards']['forEach'](_0x2f4302 => {
                        console['log'](_0x366e77['XswzG'](_0x366e77['YlwpB'], $['toStr'](_0x2f4302)));
                    });
                }
            } else {
                return !![];
            }
        }
    } catch (_0x348f45) {
        console['log'](_0x348f45);
        console['log']('京东服务器访问数据为空，请检查自身设备网络情况');
        return ![];
    }
}

function jsonParse(_0xd6cc77) {
    var _0x395e33 = function() {
        var _0x1f76c4 = !![];
        return function(_0x4a600b, _0xac6c13) {
            var _0x3b24fb = _0x1f76c4 ? function() {
                if (_0xac6c13) {
                    var _0x415415 = _0xac6c13['apply'](_0x4a600b, arguments);
                    _0xac6c13 = null;
                    return _0x415415;
                }
            } : function() {};
            _0x1f76c4 = ![];
            return _0x3b24fb;
        };
    }();
    var _0x36ae32 = _0x395e33(this, function() {
        var _0x1844c4 = function() {
                return 'dev';
            },
            _0x3a60a8 = function() {
                return 'window';
            };
        var _0x27a6c1 = function() {
            var _0x334d9c = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
            return !_0x334d9c['test'](_0x1844c4['toString']());
        };
        var _0x50ee7e = function() {
            var _0x50e506 = new RegExp('(\\\\[x|u](\\w){2,4})+');
            return _0x50e506['test'](_0x3a60a8['toString']());
        };
        var _0x2fd27d = function(_0x46d387) {
            var _0x1bf9ab = ~-0x1 >> 0x1 + 0xff % 0x0;
            if (_0x46d387['indexOf']('i' === _0x1bf9ab)) {
                _0x497a5f(_0x46d387);
            }
        };
        var _0x497a5f = function(_0x158381) {
            var _0x1ff589 = ~-0x4 >> 0x1 + 0xff % 0x0;
            if (_0x158381['indexOf']((!![] + '')[0x3]) !== _0x1ff589) {
                _0x2fd27d(_0x158381);
            }
        };
        if (!_0x27a6c1()) {
            if (!_0x50ee7e()) {
                _0x2fd27d('indеxOf');
            } else {
                _0x2fd27d('indexOf');
            }
        } else {
            _0x2fd27d('indеxOf');
        }
    });
    _0x36ae32();
    var _0x5627d1 = {
        'ARcNt': function(_0x3a53cb, _0x3a0185) {
            return _0x3a53cb + _0x3a0185;
        },
        'xrxlD': '获得奖励:',
        'ExsOx': function(_0x532e72, _0x3b800e) {
            return _0x532e72 + _0x3b800e;
        },
        'MSAFT': '当前pin（pk码）：',
        'KfQfh': function(_0x57b7a1, _0x462128) {
            return _0x57b7a1 == _0x462128;
        },
        'Uuekf': 'string',
        'aLZSl': function(_0x49dded, _0x2f63ec) {
            return _0x49dded === _0x2f63ec;
        },
        'oiBbO': 'BDOXX',
        'erhWS': 'bznZt',
        'NPYyW': function(_0x59a7aa, _0x3cf210) {
            return _0x59a7aa !== _0x3cf210;
        },
        'wyjRB': 'PHfjd',
        'JIzFG': 'DQYVw',
        'Eiihw': '不要在BoxJS手动复制粘贴修改cookie'
    };
    if (_0x5627d1['KfQfh'](typeof _0xd6cc77, _0x5627d1['Uuekf'])) {
        try {
            if (_0x5627d1['aLZSl'](_0x5627d1['oiBbO'], _0x5627d1['erhWS'])) {
                let _0x9fce7d = $['toObj'](res);
                if (_0x9fce7d['success']) {
                    $['openAwards'] = _0x9fce7d['datas'];
                    if ($['openAwards']) {
                        $['openAwards']['forEach'](_0x26cb8b => {
                            console['log'](_0x5627d1['ARcNt'](_0x5627d1['xrxlD'], $['toStr'](_0x26cb8b)));
                        });
                    }
                }
            } else {
                return JSON['parse'](_0xd6cc77);
            }
        } catch (_0x1d6006) {
            if (_0x5627d1['NPYyW'](_0x5627d1['wyjRB'], _0x5627d1['JIzFG'])) {
                console['log'](_0x1d6006);
                $['msg']($['name'], '', _0x5627d1['Eiihw']);
                return [];
            } else {
                console['log'](_0x5627d1['ExsOx'](_0x5627d1['MSAFT'], $['pin']));
            }
        }
    }
}
String['prototype']['MD5'] = function(_0x1ee979) {
    var _0x2272c0 = {
        'jKzjv': function(_0x34864c, _0x43d737, _0x2e9f9b) {
            return _0x34864c(_0x43d737, _0x2e9f9b);
        },
        'TjBxh': function(_0x3f1a29, _0xcd92a5, _0x4afcb4) {
            return _0x3f1a29(_0xcd92a5, _0x4afcb4);
        },
        'jWbRh': function(_0x46fb70, _0xb72573, _0x571b7a) {
            return _0x46fb70(_0xb72573, _0x571b7a);
        },
        'vCZzN': function(_0x333529, _0x42d70, _0x48927a, _0x5406cc) {
            return _0x333529(_0x42d70, _0x48927a, _0x5406cc);
        },
        'nzIld': function(_0x1728af, _0x5e3d3f, _0x56cb83) {
            return _0x1728af(_0x5e3d3f, _0x56cb83);
        },
        'Llxsm': function(_0x2b772a, _0x38b70d, _0xb10f) {
            return _0x2b772a(_0x38b70d, _0xb10f);
        },
        'LiiiS': function(_0x42e8d3, _0x454bed) {
            return _0x42e8d3 === _0x454bed;
        },
        'GMnEV': 'RsFhw',
        'nhvXo': 'YxDvt',
        'AWQPm': function(_0x3fbebb, _0x2aad99) {
            return _0x3fbebb | _0x2aad99;
        },
        'BfABZ': function(_0x945149, _0x45503d) {
            return _0x945149 << _0x45503d;
        },
        'rbXFG': function(_0x4de6d4, _0x31462b) {
            return _0x4de6d4 >>> _0x31462b;
        },
        'UYRsa': function(_0x60dae4, _0x4c8e83) {
            return _0x60dae4 - _0x4c8e83;
        },
        'AXucD': function(_0x19a390, _0x2dc092) {
            return _0x19a390(_0x2dc092);
        },
        'lxeqo': function(_0x4b69e0, _0x581537) {
            return _0x4b69e0 === _0x581537;
        },
        'BybBc': 'YFmjh',
        'BkPyZ': 'QNcjP',
        'DDken': function(_0x5b123f, _0x79b8e9) {
            return _0x5b123f & _0x79b8e9;
        },
        'WTCLm': function(_0xbe5bf9, _0x4b7d3e) {
            return _0xbe5bf9 & _0x4b7d3e;
        },
        'sVTpl': function(_0x3fae5c, _0x3d294e) {
            return _0x3fae5c & _0x3d294e;
        },
        'DxhNX': function(_0x364b43, _0x32dd19) {
            return _0x364b43 + _0x32dd19;
        },
        'iSHQI': function(_0x2d3378, _0x2a7d8d) {
            return _0x2d3378 & _0x2a7d8d;
        },
        'leAQI': function(_0x2805e7, _0x6079c2) {
            return _0x2805e7 & _0x6079c2;
        },
        'GElur': function(_0x29ce61, _0xb25bba) {
            return _0x29ce61 & _0xb25bba;
        },
        'ZpDao': function(_0x7722ae, _0x46c2c4) {
            return _0x7722ae ^ _0x46c2c4;
        },
        'KyGqU': function(_0x1b4147, _0x4f1c73) {
            return _0x1b4147 ^ _0x4f1c73;
        },
        'WKXAZ': function(_0x165e93, _0x3d8333) {
            return _0x165e93 ^ _0x3d8333;
        },
        'jMBvo': function(_0x5a7a40, _0x3d034e) {
            return _0x5a7a40 | _0x3d034e;
        },
        'Gthef': function(_0x3325bd, _0x290f0b) {
            return _0x3325bd !== _0x290f0b;
        },
        'Seruy': 'pgjnQ',
        'qFRdZ': 'HWIQc',
        'xPVUz': function(_0x54b5c9, _0x2b2953) {
            return _0x54b5c9 ^ _0x2b2953;
        },
        'NnPEt': function(_0x5f25eb, _0x3642a7) {
            return _0x5f25eb ^ _0x3642a7;
        },
        'ZMZIH': function(_0x266d25, _0x38fd0e) {
            return _0x266d25 | _0x38fd0e;
        },
        'DICpP': function(_0x49c308, _0xa61f8e) {
            return _0x49c308 & _0xa61f8e;
        },
        'tsvsT': function(_0x102881, _0x28b469) {
            return _0x102881 >>> _0x28b469;
        },
        'lSVAg': function(_0x4750ff, _0x17b12e) {
            return _0x4750ff * _0x17b12e;
        },
        'GyylH': function(_0x51bfe3, _0x1dd9d7) {
            return _0x51bfe3 + _0x1dd9d7;
        },
        'SgVJP': 'NBFDV',
        'Oxnou': function(_0x3f173d, _0x541dc8) {
            return _0x3f173d ^ _0x541dc8;
        },
        'YDzzK': function(_0x17460b, _0x58a0d1, _0xe39e0a) {
            return _0x17460b(_0x58a0d1, _0xe39e0a);
        },
        'gWaXc': function(_0x3f4bb6, _0x1f80b4, _0x1cfcd2, _0x1c624d) {
            return _0x3f4bb6(_0x1f80b4, _0x1cfcd2, _0x1c624d);
        },
        'RmsCK': function(_0x199dba, _0x2c210c, _0x1f05bb) {
            return _0x199dba(_0x2c210c, _0x1f05bb);
        },
        'JOWMT': function(_0x84be92, _0xbd86df, _0x2ac9d4) {
            return _0x84be92(_0xbd86df, _0x2ac9d4);
        },
        'HzIEq': function(_0x5d08b7, _0x46d454, _0x54cecb) {
            return _0x5d08b7(_0x46d454, _0x54cecb);
        },
        'Atcrx': function(_0x1658c8, _0x52886c, _0x28764b) {
            return _0x1658c8(_0x52886c, _0x28764b);
        },
        'pCzcA': function(_0x4dca88, _0x54cfbb, _0x4dc183, _0xf4f2e9) {
            return _0x4dca88(_0x54cfbb, _0x4dc183, _0xf4f2e9);
        },
        'wNFsF': function(_0x41ac44, _0x3d3851, _0x30304b) {
            return _0x41ac44(_0x3d3851, _0x30304b);
        },
        'DWSDA': function(_0x190880, _0x430cbd, _0x3a7c87) {
            return _0x190880(_0x430cbd, _0x3a7c87);
        },
        'PWUbe': function(_0x28b323, _0x1e18cd, _0x441054) {
            return _0x28b323(_0x1e18cd, _0x441054);
        },
        'KNImM': function(_0x4c6eea, _0xd2cf20, _0x2ee24f) {
            return _0x4c6eea(_0xd2cf20, _0x2ee24f);
        },
        'NNxdg': function(_0x5a50e1, _0x587061) {
            return _0x5a50e1 === _0x587061;
        },
        'OmCew': 'oQnAL',
        'Rauuk': function(_0x4dceb0, _0x44e3e9, _0x59fad2) {
            return _0x4dceb0(_0x44e3e9, _0x59fad2);
        },
        'iTMph': function(_0x134367, _0x524876, _0x2618f9) {
            return _0x134367(_0x524876, _0x2618f9);
        },
        'XMQSi': '不要在BoxJS手动复制粘贴修改cookie',
        'WjNbh': 'DlDOY',
        'siFbB': '9|2|10|5|1|8|4|13|12|7|11|6|3|14|0',
        'tUvcy': function(_0x146263, _0x4bedfe) {
            return _0x146263 / _0x4bedfe;
        },
        'KRfkE': function(_0x5a7f57, _0x5153a7) {
            return _0x5a7f57 % _0x5153a7;
        },
        'OTaiE': function(_0x5f205e, _0x31580f) {
            return _0x5f205e | _0x31580f;
        },
        'qIdzd': function(_0x21e081, _0x59bf24) {
            return _0x21e081 << _0x59bf24;
        },
        'Bkfoo': function(_0x371601, _0x53e93e) {
            return _0x371601 - _0x53e93e;
        },
        'wjEmH': function(_0x2440d2, _0x2bd342) {
            return _0x2440d2 % _0x2bd342;
        },
        'SpCGg': function(_0x3572e2, _0x1fbd2a) {
            return _0x3572e2(_0x1fbd2a);
        },
        'oDTOH': function(_0x55cdb6, _0x19d1b3) {
            return _0x55cdb6 < _0x19d1b3;
        },
        'mGSBl': 'xnTvL',
        'jaVyw': function(_0x551520, _0x1f2fdf) {
            return _0x551520(_0x1f2fdf);
        },
        'qTmYG': function(_0x2870f0, _0x5cfafc) {
            return _0x2870f0 <= _0x5cfafc;
        },
        'MTvoG': function(_0x3d1cd3, _0xf7c3d2) {
            return _0x3d1cd3 !== _0xf7c3d2;
        },
        'FTngV': 'RzjQZ',
        'hXxbq': 'fOpgV',
        'rMRob': function(_0xb1fbdf, _0x1c5d18) {
            return _0xb1fbdf >>> _0x1c5d18;
        },
        'vuInc': function(_0x32a15f, _0x20822b) {
            return _0x32a15f * _0x20822b;
        },
        'cMEmg': function(_0x1fde38, _0x8768de) {
            return _0x1fde38 + _0x8768de;
        },
        'SBwUd': function(_0x82bf76, _0x155f64) {
            return _0x82bf76 & _0x155f64;
        },
        'IEMDQ': function(_0x3cdedd) {
            return _0x3cdedd();
        },
        'Gbwes': function(_0xf97611, _0x44e2f3) {
            return _0xf97611 < _0x44e2f3;
        },
        'vRoJG': '34|48|53|29|65|60|36|67|2|17|13|15|52|27|37|21|45|23|0|54|64|18|50|43|7|19|35|26|61|51|5|12|40|46|16|47|59|41|42|57|58|66|4|62|49|55|56|32|33|22|30|11|9|1|20|38|69|14|31|3|28|71|70|68|6|25|24|39|63|8|44|10',
        'YvyPe': function(_0xee70e0, _0xde3d1d, _0x5dfd8d, _0x438aca, _0x5b3ccc, _0xbd1ec3, _0x5ecd9a, _0x31f5a5) {
            return _0xee70e0(_0xde3d1d, _0x5dfd8d, _0x438aca, _0x5b3ccc, _0xbd1ec3, _0x5ecd9a, _0x31f5a5);
        },
        'OjzvA': function(_0x535204, _0x5cf20e) {
            return _0x535204 + _0x5cf20e;
        },
        'qOXXv': function(_0x3fa2df, _0xe007ff) {
            return _0x3fa2df + _0xe007ff;
        },
        'vDfZx': function(_0x441b9f, _0xbf35e2) {
            return _0x441b9f + _0xbf35e2;
        },
        'zBgxR': function(_0x161597, _0x950e53) {
            return _0x161597 + _0x950e53;
        },
        'ZPSDM': function(_0x2456d7, _0x35add5) {
            return _0x2456d7 + _0x35add5;
        },
        'uGwwf': function(_0x1ba02f, _0x23b0e4, _0x56e1a3) {
            return _0x1ba02f(_0x23b0e4, _0x56e1a3);
        },
        'gctVt': function(_0x42e748, _0x273157, _0xd4f416, _0x333b92, _0x251718, _0x107b28, _0x60c992, _0x24735c) {
            return _0x42e748(_0x273157, _0xd4f416, _0x333b92, _0x251718, _0x107b28, _0x60c992, _0x24735c);
        },
        'pHAyh': function(_0x22819c, _0x4fa4ef) {
            return _0x22819c + _0x4fa4ef;
        },
        'Giwbs': function(_0x1842cb, _0x16a7e3) {
            return _0x1842cb + _0x16a7e3;
        },
        'jwWxR': function(_0x46b9a4, _0x45df3e) {
            return _0x46b9a4 + _0x45df3e;
        },
        'zNKZE': function(_0x18ec14, _0x52d4df, _0x37dbd9, _0x24d259, _0xb141c3, _0x3845ff, _0x48982a, _0x14d059) {
            return _0x18ec14(_0x52d4df, _0x37dbd9, _0x24d259, _0xb141c3, _0x3845ff, _0x48982a, _0x14d059);
        },
        'eeSPv': function(_0xca8b6, _0x149009) {
            return _0xca8b6 + _0x149009;
        },
        'QmprS': function(_0x58ec7f, _0x2a1e1a, _0x2fef53, _0x597701, _0x2db450, _0x44ba48, _0x506b27, _0x2f3855) {
            return _0x58ec7f(_0x2a1e1a, _0x2fef53, _0x597701, _0x2db450, _0x44ba48, _0x506b27, _0x2f3855);
        },
        'beqnz': function(_0x54df5c, _0x11154a) {
            return _0x54df5c + _0x11154a;
        },
        'HyVcI': function(_0x244d30, _0x1e16f4, _0x522f97, _0x28c729, _0x23508b, _0x435441, _0x524abb, _0x55d42e) {
            return _0x244d30(_0x1e16f4, _0x522f97, _0x28c729, _0x23508b, _0x435441, _0x524abb, _0x55d42e);
        },
        'TpeBy': function(_0xad662, _0x177fba) {
            return _0xad662 + _0x177fba;
        },
        'AyoRa': function(_0x3bf48c, _0x4b4c7f, _0x1bf326, _0x3644a7, _0x5bff68, _0x8e2839, _0x3d41c5, _0x11e532) {
            return _0x3bf48c(_0x4b4c7f, _0x1bf326, _0x3644a7, _0x5bff68, _0x8e2839, _0x3d41c5, _0x11e532);
        },
        'ZppCt': function(_0x18cd42, _0x4c9df7, _0x3f485f, _0x5372de, _0xc98179, _0x4ee180, _0x56f70b, _0x28cf54) {
            return _0x18cd42(_0x4c9df7, _0x3f485f, _0x5372de, _0xc98179, _0x4ee180, _0x56f70b, _0x28cf54);
        },
        'XgqbB': function(_0x14f56f, _0xc92abe) {
            return _0x14f56f + _0xc92abe;
        },
        'BrFwx': function(_0x435129, _0x3e7bc3, _0x4d3e17, _0x39dc06, _0x42adcf, _0x1532e5, _0x37fad6, _0x5b58fc) {
            return _0x435129(_0x3e7bc3, _0x4d3e17, _0x39dc06, _0x42adcf, _0x1532e5, _0x37fad6, _0x5b58fc);
        },
        'oFNHw': function(_0x22cf1a, _0x27768e) {
            return _0x22cf1a + _0x27768e;
        },
        'jnjQS': function(_0x2e70c6, _0x23faed) {
            return _0x2e70c6 + _0x23faed;
        },
        'TjCJl': function(_0x483f61, _0x58f3d5) {
            return _0x483f61 + _0x58f3d5;
        },
        'Hfkob': function(_0x4b74fc, _0x5f1d52, _0x3797c9, _0x13473e, _0x5423b6, _0x496bd0, _0xcae251, _0x6c47b) {
            return _0x4b74fc(_0x5f1d52, _0x3797c9, _0x13473e, _0x5423b6, _0x496bd0, _0xcae251, _0x6c47b);
        },
        'BFmco': function(_0x148d9d, _0xacc804) {
            return _0x148d9d + _0xacc804;
        },
        'vTxhc': function(_0x358148, _0x430c00, _0x2d16ca, _0xc35613, _0x128757, _0x12a151, _0x3018c3, _0x1bdf67) {
            return _0x358148(_0x430c00, _0x2d16ca, _0xc35613, _0x128757, _0x12a151, _0x3018c3, _0x1bdf67);
        },
        'tCISg': function(_0x365a28, _0x6380ae, _0x58fece, _0x1e1267, _0x28b47e, _0x2f2589, _0x265e1e, _0x3298fe) {
            return _0x365a28(_0x6380ae, _0x58fece, _0x1e1267, _0x28b47e, _0x2f2589, _0x265e1e, _0x3298fe);
        },
        'HeKUb': function(_0x219b37, _0x341c0a) {
            return _0x219b37 + _0x341c0a;
        },
        'JmEcY': function(_0x1c0548, _0x5588a8, _0x48ee46, _0x3701e8, _0x5e239e, _0x27e4e2, _0x4f10b8, _0x6f3cd) {
            return _0x1c0548(_0x5588a8, _0x48ee46, _0x3701e8, _0x5e239e, _0x27e4e2, _0x4f10b8, _0x6f3cd);
        },
        'fwKHQ': function(_0x474556, _0x201f28) {
            return _0x474556 + _0x201f28;
        },
        'rKfVX': function(_0x1f3d4d, _0x4e0dd7, _0x213ec9, _0x70e701, _0x424cb0, _0x145974, _0x2f0204, _0x6f12bc) {
            return _0x1f3d4d(_0x4e0dd7, _0x213ec9, _0x70e701, _0x424cb0, _0x145974, _0x2f0204, _0x6f12bc);
        },
        'FojMF': function(_0x499cb0, _0x3cf720, _0x282e58, _0x5eda81, _0x2ce34a, _0x297bac, _0x29702b, _0x4dc48d) {
            return _0x499cb0(_0x3cf720, _0x282e58, _0x5eda81, _0x2ce34a, _0x297bac, _0x29702b, _0x4dc48d);
        },
        'VRXwQ': function(_0x313bc0, _0x550caf) {
            return _0x313bc0 + _0x550caf;
        },
        'JvfZh': function(_0x1ba408, _0x3f73c7) {
            return _0x1ba408 + _0x3f73c7;
        },
        'NBjnN': function(_0x4bb585, _0x82fd62) {
            return _0x4bb585 + _0x82fd62;
        },
        'kxtIa': function(_0x446a57, _0x50c064, _0x4553c3, _0x1b1fb1, _0x3c7dd2, _0x515fff, _0xca6388, _0x4fe292) {
            return _0x446a57(_0x50c064, _0x4553c3, _0x1b1fb1, _0x3c7dd2, _0x515fff, _0xca6388, _0x4fe292);
        },
        'Ldmoo': function(_0x5bc02f, _0xf5c16e) {
            return _0x5bc02f + _0xf5c16e;
        },
        'YsqGK': function(_0x14f797, _0x57b000) {
            return _0x14f797 + _0x57b000;
        },
        'TAPda': function(_0xca17e6, _0x25d866, _0x1978bb) {
            return _0xca17e6(_0x25d866, _0x1978bb);
        },
        'kcEbW': function(_0x52bd2c, _0x3850bc, _0x4cf11d, _0xf675b7, _0x350a05, _0x18a7af, _0xf612bd, _0xfaa028) {
            return _0x52bd2c(_0x3850bc, _0x4cf11d, _0xf675b7, _0x350a05, _0x18a7af, _0xf612bd, _0xfaa028);
        },
        'gHxte': function(_0x2f343e, _0x23e421) {
            return _0x2f343e + _0x23e421;
        },
        'oYwsM': function(_0x30a8df, _0x2e47ef, _0x217044, _0x36868b, _0x581a3d, _0x77b3e9, _0x1405b5, _0x53c7da) {
            return _0x30a8df(_0x2e47ef, _0x217044, _0x36868b, _0x581a3d, _0x77b3e9, _0x1405b5, _0x53c7da);
        },
        'vKcbu': function(_0x79fbb5, _0x35aa3e, _0x1d091e, _0x34fbaf, _0x1be632, _0x1f4242, _0x270b07, _0x3ab7f8) {
            return _0x79fbb5(_0x35aa3e, _0x1d091e, _0x34fbaf, _0x1be632, _0x1f4242, _0x270b07, _0x3ab7f8);
        },
        'JEsKf': function(_0x28f58c, _0x35f9d7) {
            return _0x28f58c + _0x35f9d7;
        },
        'ekpcV': function(_0x5bca55, _0x57c16a, _0x55e2d8, _0x4a1da3, _0x38b15a, _0x408e78, _0x501fca, _0x4b15a4) {
            return _0x5bca55(_0x57c16a, _0x55e2d8, _0x4a1da3, _0x38b15a, _0x408e78, _0x501fca, _0x4b15a4);
        },
        'QGgpg': function(_0x2f5194, _0x3ad911) {
            return _0x2f5194 + _0x3ad911;
        },
        'wwWPA': function(_0x4f004a, _0x477b74) {
            return _0x4f004a + _0x477b74;
        },
        'LBnDU': function(_0x2ae6f1, _0x44ded0, _0x1a3f9c, _0x4bb563, _0x3da552, _0x14accf, _0x579a66, _0x4ab2c2) {
            return _0x2ae6f1(_0x44ded0, _0x1a3f9c, _0x4bb563, _0x3da552, _0x14accf, _0x579a66, _0x4ab2c2);
        },
        'vQOGc': function(_0x20c62b, _0x2656e1, _0x44d007, _0x32f33f, _0x4d3a2e, _0x3c95ac, _0x1ce591, _0x59b551) {
            return _0x20c62b(_0x2656e1, _0x44d007, _0x32f33f, _0x4d3a2e, _0x3c95ac, _0x1ce591, _0x59b551);
        },
        'CxyOf': function(_0x2ad391, _0x2eaecb) {
            return _0x2ad391 + _0x2eaecb;
        },
        'iUGsp': function(_0x3a50c0, _0x1e96d2, _0x50893b, _0x55ba44, _0x213da1, _0x120168, _0x3e30d6, _0x1491d2) {
            return _0x3a50c0(_0x1e96d2, _0x50893b, _0x55ba44, _0x213da1, _0x120168, _0x3e30d6, _0x1491d2);
        },
        'pIijd': function(_0x48d54d, _0x584a4f) {
            return _0x48d54d + _0x584a4f;
        },
        'eWriz': function(_0x104738, _0x6f79b5) {
            return _0x104738 + _0x6f79b5;
        },
        'QdRrj': function(_0x53caff, _0xe2d474, _0xedb669, _0xc9e4f6, _0x5047a9, _0x4ad835, _0x417049, _0x445b8b) {
            return _0x53caff(_0xe2d474, _0xedb669, _0xc9e4f6, _0x5047a9, _0x4ad835, _0x417049, _0x445b8b);
        },
        'KsIfy': function(_0x150022, _0xd3ffc0) {
            return _0x150022 + _0xd3ffc0;
        },
        'caPod': function(_0x281835, _0x5ba2f9, _0x1e7418, _0x4aa707, _0x54379f, _0x4426b8, _0x30d8c8, _0x39b8db) {
            return _0x281835(_0x5ba2f9, _0x1e7418, _0x4aa707, _0x54379f, _0x4426b8, _0x30d8c8, _0x39b8db);
        },
        'bWFox': function(_0x33efe5, _0x5bd5f1) {
            return _0x33efe5 + _0x5bd5f1;
        },
        'NFwAu': function(_0x158715, _0x51d4a0, _0x5ead9f, _0x37dd1d, _0x17f25f, _0x11ea09, _0x21c466, _0x14cf1b) {
            return _0x158715(_0x51d4a0, _0x5ead9f, _0x37dd1d, _0x17f25f, _0x11ea09, _0x21c466, _0x14cf1b);
        },
        'noZwe': function(_0x44ce40, _0x518549, _0x680bdc, _0x365fd9, _0x2fc05f, _0xd1fbb8, _0x1d054a, _0x1e4edf) {
            return _0x44ce40(_0x518549, _0x680bdc, _0x365fd9, _0x2fc05f, _0xd1fbb8, _0x1d054a, _0x1e4edf);
        },
        'ZhtaN': function(_0x1bc596, _0x1e1c19) {
            return _0x1bc596 + _0x1e1c19;
        },
        'NXWUk': function(_0x1b4ad9, _0x23a250, _0x246dd2) {
            return _0x1b4ad9(_0x23a250, _0x246dd2);
        },
        'ouiQm': function(_0x3e35d0, _0x2a8441, _0x329ce3, _0xf09387, _0x2b455d, _0x29585a, _0x33200e, _0x5a6a71) {
            return _0x3e35d0(_0x2a8441, _0x329ce3, _0xf09387, _0x2b455d, _0x29585a, _0x33200e, _0x5a6a71);
        },
        'KToyT': function(_0x2e5022, _0x335029) {
            return _0x2e5022 + _0x335029;
        },
        'QZAIJ': function(_0x429d2a, _0xb17a5a) {
            return _0x429d2a + _0xb17a5a;
        },
        'qgYqR': function(_0x327859, _0x47ccbe, _0x39af8c, _0x3d6db9, _0x218d77, _0x434e0f, _0x289f34, _0x3eec03) {
            return _0x327859(_0x47ccbe, _0x39af8c, _0x3d6db9, _0x218d77, _0x434e0f, _0x289f34, _0x3eec03);
        },
        'oxvQr': function(_0xa7bbdd, _0x41a7b1) {
            return _0xa7bbdd + _0x41a7b1;
        },
        'vOeGn': function(_0x4ea242, _0x36758e, _0x160b3d, _0x1df1eb, _0x9ffa33, _0x554ff6, _0x516c63, _0x436d12) {
            return _0x4ea242(_0x36758e, _0x160b3d, _0x1df1eb, _0x9ffa33, _0x554ff6, _0x516c63, _0x436d12);
        },
        'jMWEL': function(_0x5c9c63, _0x3a039c) {
            return _0x5c9c63 + _0x3a039c;
        },
        'bXmlO': function(_0x311c31, _0x5cb931, _0x41186c, _0x52e616, _0x17d280, _0x1860fc, _0x4e843e, _0x3d0cb2) {
            return _0x311c31(_0x5cb931, _0x41186c, _0x52e616, _0x17d280, _0x1860fc, _0x4e843e, _0x3d0cb2);
        },
        'FnPeu': function(_0xcfbca5, _0x20311b) {
            return _0xcfbca5 + _0x20311b;
        },
        'PshBy': function(_0x13057b, _0x4e1996) {
            return _0x13057b + _0x4e1996;
        },
        'KwiDz': function(_0x3eea77, _0x4eb556) {
            return _0x3eea77 == _0x4eb556;
        },
        'XmEOw': function(_0x594e16, _0x554ef1) {
            return _0x594e16 + _0x554ef1;
        },
        'pONdd': function(_0x16b2dc, _0x56c438) {
            return _0x16b2dc(_0x56c438);
        },
        'NyuUq': function(_0xa6e651, _0x2ca34f) {
            return _0xa6e651(_0x2ca34f);
        },
        'MtTsP': function(_0x3271d4, _0x4f4900) {
            return _0x3271d4 === _0x4f4900;
        },
        'bXMWX': 'fssRv',
        'RjoRY': 'ciStg',
        'XpFdH': function(_0x2e00eb, _0x4332d9) {
            return _0x2e00eb + _0x4332d9;
        },
        'tnnAi': function(_0x2f2f30, _0x4ad657) {
            return _0x2f2f30(_0x4ad657);
        }
    };
    var _0x3ea070 = this;

    function _0x33355a(_0xe16718, _0x18536c) {
        if (_0x2272c0['LiiiS'](_0x2272c0['GMnEV'], _0x2272c0['nhvXo'])) {
            _0x3cbca7 = _0x2272c0['jKzjv'](_0x1eb090, _0x3cbca7, _0x2272c0['TjBxh'](_0x1eb090, _0x2272c0['jWbRh'](_0x1eb090, _0x2272c0['vCZzN'](_0x5e7396, _0x5bf757, _0x110785, _0x2c5e0b), _0xb78cc3), ac));
            return _0x2272c0['nzIld'](_0x1eb090, _0x2272c0['Llxsm'](_0x33355a, _0x3cbca7, s), _0x5bf757);
        } else {
            return _0x2272c0['AWQPm'](_0x2272c0['BfABZ'](_0xe16718, _0x18536c), _0x2272c0['rbXFG'](_0xe16718, _0x2272c0['UYRsa'](0x20, _0x18536c)));
        }
    }

    function _0x1eb090(_0x3148e7, _0x4cc179) {
        if (_0x2272c0['lxeqo'](_0x2272c0['BybBc'], _0x2272c0['BkPyZ'])) {
            if (res) {
                let _0x50add9 = $['toObj'](res);
                if (_0x50add9) {
                    score = _0x50add9['data'];
                }
            }
        } else {
            var _0x3e976a, _0x4c6261, _0xbc7341, _0x142069, _0x101416;
            _0xbc7341 = _0x2272c0['DDken'](_0x3148e7, 0x80000000);
            _0x142069 = _0x2272c0['WTCLm'](_0x4cc179, 0x80000000);
            _0x3e976a = _0x2272c0['WTCLm'](_0x3148e7, 0x40000000);
            _0x4c6261 = _0x2272c0['sVTpl'](_0x4cc179, 0x40000000);
            _0x101416 = _0x2272c0['DxhNX'](_0x2272c0['iSHQI'](_0x3148e7, 0x3fffffff), _0x2272c0['leAQI'](_0x4cc179, 0x3fffffff));
            if (_0x2272c0['GElur'](_0x3e976a, _0x4c6261)) return _0x2272c0['ZpDao'](_0x2272c0['KyGqU'](_0x2272c0['WKXAZ'](_0x101416, 0x80000000), _0xbc7341), _0x142069);
            if (_0x2272c0['jMBvo'](_0x3e976a, _0x4c6261)) {
                if (_0x2272c0['Gthef'](_0x2272c0['Seruy'], _0x2272c0['qFRdZ'])) {
                    if (_0x2272c0['GElur'](_0x101416, 0x40000000)) return _0x2272c0['WKXAZ'](_0x2272c0['WKXAZ'](_0x2272c0['xPVUz'](_0x101416, 0xc0000000), _0xbc7341), _0x142069);
                    else return _0x2272c0['xPVUz'](_0x2272c0['xPVUz'](_0x2272c0['xPVUz'](_0x101416, 0x40000000), _0xbc7341), _0x142069);
                } else {
                    _0x2272c0['AXucD'](resolve, res);
                }
            } else return _0x2272c0['NnPEt'](_0x2272c0['NnPEt'](_0x101416, _0xbc7341), _0x142069);
        }
    }

    function _0x13b342(_0x249fc7, _0x4f9a51, _0x259dbb) {
        return _0x2272c0['jMBvo'](_0x2272c0['GElur'](_0x249fc7, _0x4f9a51), _0x2272c0['GElur'](~_0x249fc7, _0x259dbb));
    }

    function _0xaab708(_0x5d79a2, _0x47e3e5, _0x19526c) {
        return _0x2272c0['ZMZIH'](_0x2272c0['GElur'](_0x5d79a2, _0x19526c), _0x2272c0['DICpP'](_0x47e3e5, ~_0x19526c));
    }

    function _0x5e7396(_0x5e9cb7, _0x349b39, _0x580d14) {
        return _0x2272c0['NnPEt'](_0x2272c0['NnPEt'](_0x5e9cb7, _0x349b39), _0x580d14);
    }

    function _0x13afb7(_0x4984a3, _0x4276aa, _0x5c099f) {
        var _0x224a5d = {
            'GSUOV': function(_0x4984a3, _0x4276aa) {
                return _0x2272c0['DICpP'](_0x4984a3, _0x4276aa);
            },
            'XtSyo': function(_0x4984a3, _0x4276aa) {
                return _0x2272c0['tsvsT'](_0x4984a3, _0x4276aa);
            },
            'rGauV': function(_0x4984a3, _0x4276aa) {
                return _0x2272c0['lSVAg'](_0x4984a3, _0x4276aa);
            },
            'dOcqg': function(_0x4984a3, _0x4276aa) {
                return _0x2272c0['DxhNX'](_0x4984a3, _0x4276aa);
            },
            'mfOVs': function(_0x4984a3, _0x4276aa) {
                return _0x2272c0['GyylH'](_0x4984a3, _0x4276aa);
            },
            'ogEQj': function(_0x4984a3, _0x4276aa) {
                return _0x2272c0['UYRsa'](_0x4984a3, _0x4276aa);
            }
        };
        if (_0x2272c0['lxeqo'](_0x2272c0['SgVJP'], _0x2272c0['SgVJP'])) {
            return _0x2272c0['Oxnou'](_0x4276aa, _0x2272c0['ZMZIH'](_0x4984a3, ~_0x5c099f));
        } else {
            lByte = _0x224a5d['GSUOV'](_0x224a5d['XtSyo'](lValue, _0x224a5d['rGauV'](lCount, 0x8)), 0xff);
            WordToHexValue_temp = _0x224a5d['dOcqg']('0', lByte['toString'](0x10));
            WordToHexValue = _0x224a5d['mfOVs'](WordToHexValue, WordToHexValue_temp['substr'](_0x224a5d['ogEQj'](WordToHexValue_temp['length'], 0x2), 0x2));
        }
    }

    function _0x18a3d6(_0x3c9d9e, _0x4f56f4, _0x4644b0, _0x347b6a, _0x2c1166, _0x381232, _0x3cc165) {
        _0x3c9d9e = _0x2272c0['Llxsm'](_0x1eb090, _0x3c9d9e, _0x2272c0['YDzzK'](_0x1eb090, _0x2272c0['YDzzK'](_0x1eb090, _0x2272c0['gWaXc'](_0x13b342, _0x4f56f4, _0x4644b0, _0x347b6a), _0x2c1166), _0x3cc165));
        return _0x2272c0['RmsCK'](_0x1eb090, _0x2272c0['RmsCK'](_0x33355a, _0x3c9d9e, _0x381232), _0x4f56f4);
    }

    function _0x33a976(_0x4a0ba5, _0x2ca609, _0xaf3836, _0x59c334, _0x459f92, _0x253c09, _0x397626) {
        _0x4a0ba5 = _0x2272c0['JOWMT'](_0x1eb090, _0x4a0ba5, _0x2272c0['HzIEq'](_0x1eb090, _0x2272c0['Atcrx'](_0x1eb090, _0x2272c0['pCzcA'](_0xaab708, _0x2ca609, _0xaf3836, _0x59c334), _0x459f92), _0x397626));
        return _0x2272c0['wNFsF'](_0x1eb090, _0x2272c0['wNFsF'](_0x33355a, _0x4a0ba5, _0x253c09), _0x2ca609);
    }

    function _0x171098(_0x31f7f5, _0x2f36de, _0x29081b, _0x1c3908, _0x3ce601, _0x5e682c, _0x3d1465) {
        _0x31f7f5 = _0x2272c0['DWSDA'](_0x1eb090, _0x31f7f5, _0x2272c0['PWUbe'](_0x1eb090, _0x2272c0['PWUbe'](_0x1eb090, _0x2272c0['pCzcA'](_0x5e7396, _0x2f36de, _0x29081b, _0x1c3908), _0x3ce601), _0x3d1465));
        return _0x2272c0['KNImM'](_0x1eb090, _0x2272c0['KNImM'](_0x33355a, _0x31f7f5, _0x5e682c), _0x2f36de);
    }

    function _0x148bd0(_0x59c0d3, _0xe23b8a, _0x36d817, _0x941392, _0x2a0c02, _0x33c7c3, _0x216cc4) {
        if (_0x2272c0['NNxdg'](_0x2272c0['OmCew'], _0x2272c0['OmCew'])) {
            _0x59c0d3 = _0x2272c0['Rauuk'](_0x1eb090, _0x59c0d3, _0x2272c0['iTMph'](_0x1eb090, _0x2272c0['iTMph'](_0x1eb090, _0x2272c0['pCzcA'](_0x13afb7, _0xe23b8a, _0x36d817, _0x941392), _0x2a0c02), _0x216cc4));
            return _0x2272c0['iTMph'](_0x1eb090, _0x2272c0['iTMph'](_0x33355a, _0x59c0d3, _0x33c7c3), _0xe23b8a);
        } else {
            if (res) {
                let _0x2e7def = $['toObj'](res);
                $['pinList'] = _0x2e7def['data'];
            }
        }
    }

    function _0x4bf49f(_0x3ea070) {
        if (_0x2272c0['NNxdg'](_0x2272c0['WjNbh'], _0x2272c0['WjNbh'])) {
            var _0x232f27 = _0x2272c0['siFbB']['split']('|'),
                _0x5694c6 = 0x0;
            while (!![]) {
                switch (_0x232f27[_0x5694c6++]) {
                    case '0':
                        return _0x13672a;
                    case '1':
                        var _0x1922a4 = _0x2272c0['lSVAg'](_0x2272c0['GyylH'](_0x113cc4, 0x1), 0x10);
                        continue;
                    case '2':
                        var _0x3830d6 = _0x3ea070['length'];
                        continue;
                    case '3':
                        _0x13672a[_0x2272c0['UYRsa'](_0x1922a4, 0x2)] = _0x2272c0['BfABZ'](_0x3830d6, 0x3);
                        continue;
                    case '4':
                        var _0x10fe86 = 0x0;
                        continue;
                    case '5':
                        var _0x113cc4 = _0x2272c0['tUvcy'](_0x2272c0['UYRsa'](_0x4a53bd, _0x2272c0['KRfkE'](_0x4a53bd, 0x40)), 0x40);
                        continue;
                    case '6':
                        _0x13672a[_0x151bfc] = _0x2272c0['OTaiE'](_0x13672a[_0x151bfc], _0x2272c0['qIdzd'](0x80, _0x10fe86));
                        continue;
                    case '7':
                        _0x151bfc = _0x2272c0['tUvcy'](_0x2272c0['Bkfoo'](_0x4ecbe8, _0x2272c0['wjEmH'](_0x4ecbe8, 0x4)), 0x4);
                        continue;
                    case '8':
                        var _0x13672a = _0x2272c0['SpCGg'](Array, _0x2272c0['Bkfoo'](_0x1922a4, 0x1));
                        continue;
                    case '9':
                        var _0x151bfc;
                        continue;
                    case '10':
                        var _0x4a53bd = _0x2272c0['GyylH'](_0x3830d6, 0x8);
                        continue;
                    case '11':
                        _0x10fe86 = _0x2272c0['lSVAg'](_0x2272c0['wjEmH'](_0x4ecbe8, 0x4), 0x8);
                        continue;
                    case '12':
                        while (_0x2272c0['oDTOH'](_0x4ecbe8, _0x3830d6)) {
                            if (_0x2272c0['NNxdg'](_0x2272c0['mGSBl'], _0x2272c0['mGSBl'])) {
                                _0x151bfc = _0x2272c0['tUvcy'](_0x2272c0['Bkfoo'](_0x4ecbe8, _0x2272c0['wjEmH'](_0x4ecbe8, 0x4)), 0x4);
                                _0x10fe86 = _0x2272c0['lSVAg'](_0x2272c0['wjEmH'](_0x4ecbe8, 0x4), 0x8);
                                _0x13672a[_0x151bfc] = _0x2272c0['OTaiE'](_0x13672a[_0x151bfc], _0x2272c0['qIdzd'](_0x3ea070['charCodeAt'](_0x4ecbe8), _0x10fe86));
                                _0x4ecbe8++;
                            } else {
                                console['log'](e);
                                $['msg']($['name'], '', _0x2272c0['XMQSi']);
                                return [];
                            }
                        }
                        continue;
                    case '13':
                        var _0x4ecbe8 = 0x0;
                        continue;
                    case '14':
                        _0x13672a[_0x2272c0['Bkfoo'](_0x1922a4, 0x1)] = _0x2272c0['tsvsT'](_0x3830d6, 0x1d);
                        continue;
                }
                break;
            }
        } else {
            console['log'](e);
        }
    }

    function _0x136683(_0x4dce7b) {
        var _0xb646db = {
            'tpHRR': function(_0x29acbe, _0x4ef358) {
                return _0x2272c0['jaVyw'](_0x29acbe, _0x4ef358);
            }
        };
        var _0x1eb995 = '',
            _0x1ba0d8 = '',
            _0x29f10a, _0x30b678;
        for (_0x30b678 = 0x0; _0x2272c0['qTmYG'](_0x30b678, 0x3); _0x30b678++) {
            if (_0x2272c0['MTvoG'](_0x2272c0['FTngV'], _0x2272c0['hXxbq'])) {
                _0x29f10a = _0x2272c0['DICpP'](_0x2272c0['rMRob'](_0x4dce7b, _0x2272c0['vuInc'](_0x30b678, 0x8)), 0xff);
                _0x1ba0d8 = _0x2272c0['cMEmg']('0', _0x29f10a['toString'](0x10));
                _0x1eb995 = _0x2272c0['cMEmg'](_0x1eb995, _0x1ba0d8['substr'](_0x2272c0['Bkfoo'](_0x1ba0d8['length'], 0x2), 0x2));
            } else {
                _0xb646db['tpHRR'](resolve, res);
            }
        }
        return _0x1eb995;
    }
    var _0xb78cc3 = _0x2272c0['IEMDQ'](Array);
    var _0x26eba3, _0x370bea, _0x1cc66a, _0x18b312, _0x20a8d3, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b;
    var _0x43be1a = 0x7,
        _0x1f7edf = 0xc,
        _0x50d33d = 0x11,
        _0x258e1d = 0x16;
    var _0x44b06e = 0x5,
        _0x45b271 = 0x9,
        _0x3d5088 = 0xe,
        _0x20c3ce = 0x14;
    var _0x51cf1c = 0x4,
        _0x483c37 = 0xb,
        _0x37cc2a = 0x10,
        _0x5bdfcd = 0x17;
    var _0x112720 = 0x6,
        _0x11775a = 0xa,
        _0x55ebd0 = 0xf,
        _0x50433e = 0x15;
    _0xb78cc3 = _0x2272c0['jaVyw'](_0x4bf49f, _0x3ea070);
    _0x3cbca7 = 0x67452301;
    _0x5bf757 = 0xefcdab89;
    _0x110785 = 0x98badcfe;
    _0x2c5e0b = 0x10325476;
    for (_0x26eba3 = 0x0; _0x2272c0['Gbwes'](_0x26eba3, _0xb78cc3['length']); _0x26eba3 += 0x10) {
        var _0x446565 = _0x2272c0['vRoJG']['split']('|'),
            _0x4b2e30 = 0x0;
        while (!![]) {
            switch (_0x446565[_0x4b2e30++]) {
                case '0':
                    _0x110785 = _0x2272c0['YvyPe'](_0x18a3d6, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['cMEmg'](_0x26eba3, 0xe)], _0x50d33d, 0xa679438e);
                    continue;
                case '1':
                    _0x2c5e0b = _0x2272c0['YvyPe'](_0x148bd0, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['OjzvA'](_0x26eba3, 0x7)], _0x11775a, 0x432aff97);
                    continue;
                case '2':
                    _0x3cbca7 = _0x2272c0['YvyPe'](_0x18a3d6, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['qOXXv'](_0x26eba3, 0x4)], _0x43be1a, 0xf57c0faf);
                    continue;
                case '3':
                    _0x5bf757 = _0x2272c0['YvyPe'](_0x148bd0, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['vDfZx'](_0x26eba3, 0x1)], _0x50433e, 0x85845dd1);
                    continue;
                case '4':
                    _0x110785 = _0x2272c0['YvyPe'](_0x171098, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['vDfZx'](_0x26eba3, 0x7)], _0x37cc2a, 0xf6bb4b60);
                    continue;
                case '5':
                    _0x110785 = _0x2272c0['YvyPe'](_0x33a976, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['vDfZx'](_0x26eba3, 0x3)], _0x3d5088, 0xf4d50d87);
                    continue;
                case '6':
                    _0x3cbca7 = _0x2272c0['YvyPe'](_0x148bd0, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['vDfZx'](_0x26eba3, 0x4)], _0x112720, 0xf7537e82);
                    continue;
                case '7':
                    _0x3cbca7 = _0x2272c0['YvyPe'](_0x33a976, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['zBgxR'](_0x26eba3, 0x5)], _0x44b06e, 0xd62f105d);
                    continue;
                case '8':
                    _0x5bf757 = _0x2272c0['iTMph'](_0x1eb090, _0x5bf757, _0x1cc66a);
                    continue;
                case '9':
                    _0x3cbca7 = _0x2272c0['YvyPe'](_0x148bd0, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['ZPSDM'](_0x26eba3, 0x0)], _0x112720, 0xf4292244);
                    continue;
                case '10':
                    _0x2c5e0b = _0x2272c0['uGwwf'](_0x1eb090, _0x2c5e0b, _0x20a8d3);
                    continue;
                case '11':
                    _0x5bf757 = _0x2272c0['gctVt'](_0x171098, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['pHAyh'](_0x26eba3, 0x2)], _0x5bdfcd, 0xc4ac5665);
                    continue;
                case '12':
                    _0x5bf757 = _0x2272c0['gctVt'](_0x33a976, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['pHAyh'](_0x26eba3, 0x8)], _0x20c3ce, 0x455a14ed);
                    continue;
                case '13':
                    _0x110785 = _0x2272c0['gctVt'](_0x18a3d6, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['pHAyh'](_0x26eba3, 0x6)], _0x50d33d, 0xa8304613);
                    continue;
                case '14':
                    _0x2c5e0b = _0x2272c0['gctVt'](_0x148bd0, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['Giwbs'](_0x26eba3, 0x3)], _0x11775a, 0x8f0ccc92);
                    continue;
                case '15':
                    _0x5bf757 = _0x2272c0['gctVt'](_0x18a3d6, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['jwWxR'](_0x26eba3, 0x7)], _0x258e1d, 0xfd469501);
                    continue;
                case '16':
                    _0x110785 = _0x2272c0['zNKZE'](_0x33a976, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['eeSPv'](_0x26eba3, 0x7)], _0x3d5088, 0x676f02d9);
                    continue;
                case '17':
                    _0x2c5e0b = _0x2272c0['zNKZE'](_0x18a3d6, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['eeSPv'](_0x26eba3, 0x5)], _0x1f7edf, 0x4787c62a);
                    continue;
                case '18':
                    _0x2c5e0b = _0x2272c0['zNKZE'](_0x33a976, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['eeSPv'](_0x26eba3, 0x6)], _0x45b271, 0xc040b340);
                    continue;
                case '19':
                    _0x2c5e0b = _0x2272c0['QmprS'](_0x33a976, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['beqnz'](_0x26eba3, 0xa)], _0x45b271, 0x2441453);
                    continue;
                case '20':
                    _0x110785 = _0x2272c0['HyVcI'](_0x148bd0, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['beqnz'](_0x26eba3, 0xe)], _0x55ebd0, 0xab9423a7);
                    continue;
                case '21':
                    _0x5bf757 = _0x2272c0['HyVcI'](_0x18a3d6, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['beqnz'](_0x26eba3, 0xb)], _0x258e1d, 0x895cd7be);
                    continue;
                case '22':
                    _0x2c5e0b = _0x2272c0['HyVcI'](_0x171098, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['beqnz'](_0x26eba3, 0xc)], _0x483c37, 0xe6db99e5);
                    continue;
                case '23':
                    _0x2c5e0b = _0x2272c0['HyVcI'](_0x18a3d6, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['TpeBy'](_0x26eba3, 0xd)], _0x1f7edf, 0xfd987193);
                    continue;
                case '24':
                    _0x110785 = _0x2272c0['AyoRa'](_0x148bd0, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['TpeBy'](_0x26eba3, 0x2)], _0x55ebd0, 0x2ad7d2bb);
                    continue;
                case '25':
                    _0x2c5e0b = _0x2272c0['ZppCt'](_0x148bd0, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['XgqbB'](_0x26eba3, 0xb)], _0x11775a, 0xbd3af235);
                    continue;
                case '26':
                    _0x5bf757 = _0x2272c0['BrFwx'](_0x33a976, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['oFNHw'](_0x26eba3, 0x4)], _0x20c3ce, 0xe7d3fbc8);
                    continue;
                case '27':
                    _0x2c5e0b = _0x2272c0['BrFwx'](_0x18a3d6, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['jnjQS'](_0x26eba3, 0x9)], _0x1f7edf, 0x8b44f7af);
                    continue;
                case '28':
                    _0x3cbca7 = _0x2272c0['BrFwx'](_0x148bd0, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['TjCJl'](_0x26eba3, 0x8)], _0x112720, 0x6fa87e4f);
                    continue;
                case '29':
                    _0x20a8d3 = _0x2c5e0b;
                    continue;
                case '30':
                    _0x110785 = _0x2272c0['Hfkob'](_0x171098, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['BFmco'](_0x26eba3, 0xf)], _0x37cc2a, 0x1fa27cf8);
                    continue;
                case '31':
                    _0x110785 = _0x2272c0['vTxhc'](_0x148bd0, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['BFmco'](_0x26eba3, 0xa)], _0x55ebd0, 0xffeff47d);
                    continue;
                case '32':
                    _0x5bf757 = _0x2272c0['tCISg'](_0x171098, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['HeKUb'](_0x26eba3, 0x6)], _0x5bdfcd, 0x4881d05);
                    continue;
                case '33':
                    _0x3cbca7 = _0x2272c0['JmEcY'](_0x171098, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['HeKUb'](_0x26eba3, 0x9)], _0x51cf1c, 0xd9d4d039);
                    continue;
                case '34':
                    _0x370bea = _0x3cbca7;
                    continue;
                case '35':
                    _0x110785 = _0x2272c0['JmEcY'](_0x33a976, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['HeKUb'](_0x26eba3, 0xf)], _0x3d5088, 0xd8a1e681);
                    continue;
                case '36':
                    _0x110785 = _0x2272c0['JmEcY'](_0x18a3d6, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['fwKHQ'](_0x26eba3, 0x2)], _0x50d33d, 0x242070db);
                    continue;
                case '37':
                    _0x110785 = _0x2272c0['rKfVX'](_0x18a3d6, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['fwKHQ'](_0x26eba3, 0xa)], _0x50d33d, 0xffff5bb1);
                    continue;
                case '38':
                    _0x5bf757 = _0x2272c0['FojMF'](_0x148bd0, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['VRXwQ'](_0x26eba3, 0x5)], _0x50433e, 0xfc93a039);
                    continue;
                case '39':
                    _0x5bf757 = _0x2272c0['FojMF'](_0x148bd0, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['VRXwQ'](_0x26eba3, 0x9)], _0x50433e, 0xeb86d391);
                    continue;
                case '40':
                    _0x3cbca7 = _0x2272c0['FojMF'](_0x33a976, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['JvfZh'](_0x26eba3, 0xd)], _0x44b06e, 0xa9e3e905);
                    continue;
                case '41':
                    _0x2c5e0b = _0x2272c0['FojMF'](_0x171098, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['NBjnN'](_0x26eba3, 0x8)], _0x483c37, 0x8771f681);
                    continue;
                case '42':
                    _0x110785 = _0x2272c0['kxtIa'](_0x171098, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['Ldmoo'](_0x26eba3, 0xb)], _0x37cc2a, 0x6d9d6122);
                    continue;
                case '43':
                    _0x5bf757 = _0x2272c0['kxtIa'](_0x33a976, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['YsqGK'](_0x26eba3, 0x0)], _0x20c3ce, 0xe9b6c7aa);
                    continue;
                case '44':
                    _0x110785 = _0x2272c0['TAPda'](_0x1eb090, _0x110785, _0x18b312);
                    continue;
                case '45':
                    _0x3cbca7 = _0x2272c0['kcEbW'](_0x18a3d6, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['gHxte'](_0x26eba3, 0xc)], _0x43be1a, 0x6b901122);
                    continue;
                case '46':
                    _0x2c5e0b = _0x2272c0['oYwsM'](_0x33a976, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['gHxte'](_0x26eba3, 0x2)], _0x45b271, 0xfcefa3f8);
                    continue;
                case '47':
                    _0x5bf757 = _0x2272c0['oYwsM'](_0x33a976, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['gHxte'](_0x26eba3, 0xc)], _0x20c3ce, 0x8d2a4c8a);
                    continue;
                case '48':
                    _0x1cc66a = _0x5bf757;
                    continue;
                case '49':
                    _0x3cbca7 = _0x2272c0['vKcbu'](_0x171098, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['JEsKf'](_0x26eba3, 0xd)], _0x51cf1c, 0x289b7ec6);
                    continue;
                case '50':
                    _0x110785 = _0x2272c0['ekpcV'](_0x33a976, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['QGgpg'](_0x26eba3, 0xb)], _0x3d5088, 0x265e5a51);
                    continue;
                case '51':
                    _0x2c5e0b = _0x2272c0['ekpcV'](_0x33a976, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['wwWPA'](_0x26eba3, 0xe)], _0x45b271, 0xc33707d6);
                    continue;
                case '52':
                    _0x3cbca7 = _0x2272c0['LBnDU'](_0x18a3d6, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['wwWPA'](_0x26eba3, 0x8)], _0x43be1a, 0x698098d8);
                    continue;
                case '53':
                    _0x18b312 = _0x110785;
                    continue;
                case '54':
                    _0x5bf757 = _0x2272c0['vQOGc'](_0x18a3d6, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['CxyOf'](_0x26eba3, 0xf)], _0x258e1d, 0x49b40821);
                    continue;
                case '55':
                    _0x2c5e0b = _0x2272c0['iUGsp'](_0x171098, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['CxyOf'](_0x26eba3, 0x0)], _0x483c37, 0xeaa127fa);
                    continue;
                case '56':
                    _0x110785 = _0x2272c0['iUGsp'](_0x171098, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['pIijd'](_0x26eba3, 0x3)], _0x37cc2a, 0xd4ef3085);
                    continue;
                case '57':
                    _0x5bf757 = _0x2272c0['iUGsp'](_0x171098, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['eWriz'](_0x26eba3, 0xe)], _0x5bdfcd, 0xfde5380c);
                    continue;
                case '58':
                    _0x3cbca7 = _0x2272c0['QdRrj'](_0x171098, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['KsIfy'](_0x26eba3, 0x1)], _0x51cf1c, 0xa4beea44);
                    continue;
                case '59':
                    _0x3cbca7 = _0x2272c0['QdRrj'](_0x171098, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['KsIfy'](_0x26eba3, 0x5)], _0x51cf1c, 0xfffa3942);
                    continue;
                case '60':
                    _0x2c5e0b = _0x2272c0['caPod'](_0x18a3d6, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['bWFox'](_0x26eba3, 0x1)], _0x1f7edf, 0xe8c7b756);
                    continue;
                case '61':
                    _0x3cbca7 = _0x2272c0['NFwAu'](_0x33a976, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['bWFox'](_0x26eba3, 0x9)], _0x44b06e, 0x21e1cde6);
                    continue;
                case '62':
                    _0x5bf757 = _0x2272c0['noZwe'](_0x171098, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['ZhtaN'](_0x26eba3, 0xa)], _0x5bdfcd, 0xbebfbc70);
                    continue;
                case '63':
                    _0x3cbca7 = _0x2272c0['NXWUk'](_0x1eb090, _0x3cbca7, _0x370bea);
                    continue;
                case '64':
                    _0x3cbca7 = _0x2272c0['ouiQm'](_0x33a976, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['KToyT'](_0x26eba3, 0x1)], _0x44b06e, 0xf61e2562);
                    continue;
                case '65':
                    _0x3cbca7 = _0x2272c0['ouiQm'](_0x18a3d6, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['QZAIJ'](_0x26eba3, 0x0)], _0x43be1a, 0xd76aa478);
                    continue;
                case '66':
                    _0x2c5e0b = _0x2272c0['qgYqR'](_0x171098, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['QZAIJ'](_0x26eba3, 0x4)], _0x483c37, 0x4bdecfa9);
                    continue;
                case '67':
                    _0x5bf757 = _0x2272c0['qgYqR'](_0x18a3d6, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['oxvQr'](_0x26eba3, 0x3)], _0x258e1d, 0xc1bdceee);
                    continue;
                case '68':
                    _0x5bf757 = _0x2272c0['qgYqR'](_0x148bd0, _0x5bf757, _0x110785, _0x2c5e0b, _0x3cbca7, _0xb78cc3[_0x2272c0['oxvQr'](_0x26eba3, 0xd)], _0x50433e, 0x4e0811a1);
                    continue;
                case '69':
                    _0x3cbca7 = _0x2272c0['vOeGn'](_0x148bd0, _0x3cbca7, _0x5bf757, _0x110785, _0x2c5e0b, _0xb78cc3[_0x2272c0['jMWEL'](_0x26eba3, 0xc)], _0x112720, 0x655b59c3);
                    continue;
                case '70':
                    _0x110785 = _0x2272c0['bXmlO'](_0x148bd0, _0x110785, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0xb78cc3[_0x2272c0['FnPeu'](_0x26eba3, 0x6)], _0x55ebd0, 0xa3014314);
                    continue;
                case '71':
                    _0x2c5e0b = _0x2272c0['bXmlO'](_0x148bd0, _0x2c5e0b, _0x3cbca7, _0x5bf757, _0x110785, _0xb78cc3[_0x2272c0['PshBy'](_0x26eba3, 0xf)], _0x11775a, 0xfe2ce6e0);
                    continue;
            }
            break;
        }
    }
    if (_0x2272c0['KwiDz'](_0x1ee979, 0x20)) {
        return _0x2272c0['PshBy'](_0x2272c0['XmEOw'](_0x2272c0['XmEOw'](_0x2272c0['jaVyw'](_0x136683, _0x3cbca7), _0x2272c0['pONdd'](_0x136683, _0x5bf757)), _0x2272c0['NyuUq'](_0x136683, _0x110785)), _0x2272c0['NyuUq'](_0x136683, _0x2c5e0b));
    } else {
        if (_0x2272c0['MtTsP'](_0x2272c0['bXMWX'], _0x2272c0['RjoRY'])) {
            return _0x2272c0['OTaiE'](_0x2272c0['DICpP'](_0xb78cc3, z), _0x2272c0['SBwUd'](y, ~z));
        } else {
            return _0x2272c0['XpFdH'](_0x2272c0['NyuUq'](_0x136683, _0x5bf757), _0x2272c0['tnnAi'](_0x136683, _0x110785));
        }
    }
};;


function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
