const Test = require('./Test')
import Tools from '../src/Tools'
import { ObjectTools } from '../src/Tools'

Test.assertMatch(Tools.sampleFormat(Date.now()), /-/)
Test.assertMatch(null, /\//, () => {
   // eslint-disable-next-line no-undef
   expect(Tools.sampleFormat(Date.now(), '/')).toMatch(/\//)
})

Test.assertBe(ObjectTools.isEmptyObject({}), true)
Test.assertBe(ObjectTools.isEmptyObject(null), true)
Test.assertBe(ObjectTools.isEmptyObject(undefined), true)
Test.assertBe(ObjectTools.isEmptyObject(1), false)
Test.assertBe(ObjectTools.isEmptyObject({a: 'a1'}), false)

Test.assertBe(Tools.tryParseFloat('0.23'), 0.23)

console.log('----- thisWeek: ',Tools.thisWeek())
console.log('----- thisMonth: ',Tools.thisMonth())
