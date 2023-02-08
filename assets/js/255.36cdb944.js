(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{1072:function(t,a,s){"use strict";s.r(a);var n=s(114),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"通过mybatis建表问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过mybatis建表问题"}},[t._v("#")]),t._v(" 通过Mybatis建表问题")]),t._v(" "),s("p",[t._v("如果建表语句的静态的那完全不用Mybatis，在数据库就可以建。最近工作中遇到问题需要在Mybatis动态建表，尝试来解决这个问题。")]),t._v(" "),s("p",[t._v("首先我们拿到建表语句 "),s("strong",[t._v('String sqlText = "..."')]),t._v(" 。")]),t._v(" "),s("h2",{attrs:{id:"正确方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正确方案"}},[t._v("#")]),t._v(" 正确方案")]),t._v(" "),s("p",[t._v("应该将表名跟建表语句分开，使之大致拼成一个CREATE TABLE 的SQL,如：")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("createNewTable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        CREATE TABLE ${tableName} AS ${sqlText}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"错误方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误方案"}},[t._v("#")]),t._v(" 错误方案")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("createNewTable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n         ${sqlText}\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("这是我最先一拍脑袋想到的，但是这句话被解析的时候会解析成了一个占位符“?”，本身很好理解，Mybatis找不到具体的SQL语句报错。")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"小提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小提示"}},[t._v("#")]),t._v(" 小提示：")]),t._v(" "),s("p",[t._v("1.建表语句的参数应该使用不带引号的 '$ {...}'\n2.应为选择了$，所以有可能会受到SQL注入的攻击，需要具体逻辑具体校验")]),t._v(" "),s("ad"),t._v(" "),s("comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);