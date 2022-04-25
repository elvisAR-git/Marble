export default function makeListConfigurations(configurationsDb) {
    return async function listConfigurations() {
        const configurations = await configurationsDb.findAll();
        return configurations;
    }
}