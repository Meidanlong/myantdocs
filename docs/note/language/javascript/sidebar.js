const url = '/note/language/javascript/';
let section=[
	"1_js",
	"2_js",
	"3_js",
	"4_js",
];

/**
 * 获取populateSidebar路径
 * @returns {string}
 */
const path = () => {
	const popSbPath = '.vuepress/config/populateSidebar'
	let folders = url.split("/");
	let folderNum = folders.length;
	if(folderNum === 6){
		return '../../../../' + popSbPath;
	}
	if(folderNum === 5){
		return '../../../' + popSbPath;
	}
}

let populateSidebar = require(path());
module.exports = populateSidebar(url, section);