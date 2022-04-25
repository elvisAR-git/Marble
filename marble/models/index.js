import crypto from 'crypto'
import Id from './id.js'
import buildMakeConfiguration from './configuration.js'
import buildMakeTransaction from './transaction.js'


function md5(text) {
    return crypto
        .createHash('md5')
        .update(text, 'utf-8')
        .digest('hex')
}

// dependancy injection

const makeConfiguration = buildMakeConfiguration({ Id, md5 });
const makeTransaction = buildMakeTransaction({ Id, md5, makeConfiguration });


// export

export default {
    makeConfiguration,
    makeTransaction,
}