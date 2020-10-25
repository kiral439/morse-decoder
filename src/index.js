const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':	'9',
  '-----':  '0',
};

function decode(expr) {
	const exprArr = expr.split('');
	let letter = '';
	let temp;
	let output = '';
	while(exprArr.length > 0) {
		temp = exprArr.splice(0, 10);
		if(temp.join('') === "**********"){
			output += " ";
			continue;
		}
		for(let j = 0; j < temp.length; j+=2){
			if(temp[j] + temp[j+1] === "00") {
				continue;
			}
			if(temp[j] + temp[j+1] === "10") {
				letter += '.'
				continue;
			}
			if(temp[j] + temp[j+1] === "11") {
				letter += '-'
				continue;
			}
		}
    output += MORSE_TABLE[letter];
		letter = ''
	}
	return output;
}

module.exports = {
  decode
}