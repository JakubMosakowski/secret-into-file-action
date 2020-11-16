const core = require('@actions/core')
const fs = require('fs');
const gpg = require('gpg');

function main() {
  try {

    const secret = core.getInput('secret');
    const passphrase = core.getInput('passphrase');
    const filename = core.getInput('filename');

    const args = `--passphrase ${passphrase} --decrypt`.split(" ")

    gpg.call(secret, args, (_, decodedValue) => {
      fs.writeFileSync(filename, decodedValue);
    });

  } catch (error) {
    core.setFailed(error.message);
  }
}

main()
