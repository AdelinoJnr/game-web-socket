import connection from '../services/connection';
import { insertNickname } from '../interface/nickname'

class DefaultModel {
    async set(data: insertNickname) {
        const db = await connection();
        await db.collection('nickname').insertOne({ ...data });
    }

    async get() {
        const db = await connection();
        const nicknames = await db.collection('nickname').find().toArray();
        return nicknames;
    }

    async findBy(id: number) {
        const db = await connection();
        await db.collection('nickname').find({ id });
    }
}

export default DefaultModel;