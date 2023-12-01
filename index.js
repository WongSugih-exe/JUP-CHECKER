const fetch = require('node-fetch');
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const fs = require('fs');


const getMyAddress = (wallet) => new Promise((resolve, reject) => {
	url="https://jup-airdrop.zhen8558.workers.dev/allocation/"+wallet
	fetch(url, {
		
		"method": "GET"
	})
	.then(res => res.json())
	.then(res => {
		resolve(res);
	})
	.catch(err => {
		reject(err)
	})
});


(async () => {
	var readMe = fs.readFileSync("wallet.txt", "utf-8").split("\n");
	for (var index = 0; index < readMe.length; index++) {
		wallet= wallet = readMe[index]
		// wallet ='chwydqszfaompt4vysk5quzvfsp8yvf5gynyqbzboyce'
		a = await getMyAddress(wallet);
		if (a.volume <=0) {
			console.log(chalk.red('BUSUK'))
		}else{
			hasilsimpan = 'JP | '+a.owner+' => '+a.volume
			console.log(chalk.green(hasilsimpan))
			fs.appendFileSync("RESULT.txt",  hasilsimpan+'\n', "utf-8");
		}
	}
	console.log(chalk.green(' HASIL DI SIMPAN DI RESULT.TXT'))
	

})();