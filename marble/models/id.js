import cuid from 'cuid'

const Id = Object.freeze({
    makeId: cuid,
    isValid: cuid.isCuid
})

export default Id