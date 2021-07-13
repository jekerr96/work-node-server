const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function clearCache(query) {
    console.log(query); //todo remove
    const {stdout} = await exec('cd ~/../../samba/programmer/projects-svn/' + query.project + '/trunk/www/bitrix/ && ls');
    console.log(stdout); //todo remove

    return stdout;
}

module.exports = {
    clearCache,
}