// borrowed from:
// https://stackoverflow.com/questions/1880198/how-to-execute-shell-command-in-javascript

const { exec } = require('child_process');

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
async function sh(cmd, args) {
	return new Promise(function (resolve, reject) {
		exec(cmd, args, (err, stdout, stderr) => {
			if (err) {
				reject(err);
			} else {
				resolve({ stdout, stderr });
			}
		});
	});
}

async function main() {
	let { stdout } = await sh('./bin/cc', 'run');
	for (let line of stdout.split('\n')) {
		console.log(`output: ${line}`);
	}
}

main();
