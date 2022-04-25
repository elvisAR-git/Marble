import Id from "../models/id.js";

export default function makeConfigurationsDb({ makeDb }) {

    async function findAll({ isDeleted = false } = {}) {
        const db = await makeDb();
        const query = isDeleted ? { isDeleted } : {};
        const result = await db.collection("configurations").find(query);

        return (await result.toArray()).map(({ _id, ...found }) => ({
            id: _id,
            ...found
        }));

    }

    async function findById({ id: _id, isDeleted = false }) {
        const db = await makeDb();
        const query = isDeleted ? { isDeleted, _id } : { _id };
        const result = await db.collection("configurations").findOne(query);
        const found = result.toArray();

        if (found.length === 0)
        {
            return null;
        }

        const {
            _id: id,
            ...info
        } = found[0];

        return {
            id,
            ...info
        }
    }

    async function insert({
        id: _id = Id.makeId(),
        ...info
    }) {
        const db = await makeDb();
        const result = await db.collection("configurations").insertOne({
            _id,
            ...info
        });

        return {
            id: result.insertedId,
            ...info
        }
    }

    async function update({
        id: _id,
        ...info
    }) {
        const db = await makeDb();
        const result = await db.collection("configurations").updateOne({
            _id
        }, {
            $set: info
        });

        return result.modifiedCount > 0 ? { id: _id, ...info } : null;
    }

    async function remove({ id: _id }) {
        const db = await makeDb();
        const result = await db.collection("configurations").deleteOne({
            _id
        });

        return result.deletedCount;
    }

    async function findByHash({ hash, isDeleted = false }) {
        const db = await makeDb();
        const query = isDeleted ? { isDeleted, hash } : { hash };
        const result = await db.collection("configurations").findOne(query);
        const found = result.toArray();

        if (found.length === 0)
        {
            return null;
        }

        const {
            _id: id,
            ...info
        } = found[0];

        return {
            id,
            ...info
        }
    }

    return Object.freeze({
        findAll,
        findById,
        insert,
        update,
        remove,
        findByHash
    });


}