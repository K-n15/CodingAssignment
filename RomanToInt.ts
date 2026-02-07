const translate = new Map<string,number>([
    ['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]
])

function RomanToInt(numeral : string): number{
    return 0;
}

function testCase(){
    const cases = new Map<string,number>([
        ['IV',4],['IX',9],['XII',12],['MMXXIV',2024],['MCMLXIV',1964],['LVIII',58],['MCMXCIV',1994],['MCMIII',1903]
    ]);
    for (const [roman, value] of cases){
        const result = RomanToInt(roman);
        if (result === value){
            console.log(roman,value,"passes")
        }else {
            throw Error(`${roman} does not translate to ${result}`)
        }
    }
    console.log(translate.get('V'))
}

testCase()