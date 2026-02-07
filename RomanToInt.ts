const translate = new Map<string,number>([
    ['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]
])

function RomanToInt(numeral : string): number{
    let result = 0;
    const size = numeral.length;
    for (let i=0 ; i < size-1 ; i++){
        const curr = numeral.charAt(i);
        const next = numeral.charAt(i+1);
        //Only one smaller numeral at most exist before
        //a bigger numeral, Ex. IIV is not 3 but III is
        if (translate.get(curr)! < translate.get(next)!){
            result -= translate.get(curr)!;
        }else {
            result += translate.get(curr)!;
        }
    }
    result += translate.get(numeral.charAt(size-1))!;
    return result;
}

function testCase(){
    const cases = new Map<string,number>([
        ['IV',4],['IX',9],['XII',12],['MMXXIV',2024],['MCMLXIV',1964],['LVIII',58],['MCMXCIV',1994],['MCMIII',1903],
        ['XXXIX',39], ['LXXX',80], ['XVIII',18], ['CMXCIX', 999]
    ]);
    for (const [roman, value] of cases){
        const result = RomanToInt(roman);
        if (result === value){
            console.log(roman,value,"passes")
        }else {
            throw Error(`${roman} does not translate to ${result}`)
        }
    }
}

testCase()