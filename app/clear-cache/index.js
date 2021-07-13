const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function clearCache(query) {
    try {
        const {stdout} = await exec('cd ~/../../samba/programmer/projects-svn/' + query.project + '/trunk/www/bitrix/ && rm -rf cache managed_cache stack_cache');

        return stdout;
    } catch (e) {}

    return "";
}

module.exports = {
    clearCache,
}