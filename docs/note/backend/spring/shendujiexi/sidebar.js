const root = '../../../../';
const path = '/note/backend/spring/shendujiexi/';
let section=[
	"1_spring",
	"2_spring",
	"11_spring"
];

const popSbPath = '.vuepress/config/populateSidebar'
let populateSidebar = require(root + popSbPath);
module.exports = populateSidebar(path, section);