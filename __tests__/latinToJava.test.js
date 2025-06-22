import { describe, expect, it } from "vitest"
import { testArr } from "../utils/test/testArr"
import latinToJavaTest from "../utils/test/latinToJavaTest"

describe('Test the java outputs', () => {
    for (let i = 0; i < testArr.length; ++i){
        it(`Test #${i}`, () => {
            const latin = testArr[i][0]
            const actualJava = latinToJavaTest(latin)
            const expectedJava = testArr[i][1]

            if (actualJava !== expectedJava){
                expect(latin).toBe(null)
            }
            else{
                expect(actualJava).toBe(expectedJava)
            }
        })
    }
})
