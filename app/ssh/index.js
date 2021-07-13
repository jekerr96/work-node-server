const {sendPostRequest} =  require("../request");

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function loadSshList() {
    const {stdout} = await exec('sudo /bin/cat /etc/sudoers.d/evgenijastanin | cut -d \' \' -f 7 | tr \'\\n\' \'&\'');

    return stdout;
}

module.exports = {
    sendSshList: async () => {
        const sshList = await loadSshList();

        sendPostRequest('/ssh-create/', sshList);
    },
}