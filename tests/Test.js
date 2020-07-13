/* eslint-disable no-undef */
/**
 * 对象全等断言
 * @param {any} source 源
 * @param {any} target 全等的目标
 * @param {function} fun it回调
 */
const assertEquals = function (source, target, fun = null) {
   it('value to equal ' + target.toString() + '  ', fun || function(){
      expect(source).toEqual(target)
   })
}

/**
 * 值精确相等断言
 * @param {any} source 源
 * @param {any} target 目标
 * @param {function} fun it回调
 */
const assertBe = function (source, target, fun = null) {
   it('value to be ' + target.toString() + '  ', fun || function(){
      expect(source).toBe(target)
   })
}

/**
 * 字符串匹配。检查对具有 toMatch 正则表达式的字符串。
 * @param {any} source 源
 * @param {any} reg 正则表达式
 * @param {function} fun it回调
 */
const assertMatch = function (source, reg, fun = null) {
   it('value to match ' + reg.toString() + '  ', fun || function(){
      expect(source).toMatch(reg)
   })
}

module.exports = {
   assertEquals: assertEquals,
   assertBe: assertBe,
   assertMatch: assertMatch
}