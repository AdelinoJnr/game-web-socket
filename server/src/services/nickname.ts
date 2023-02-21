import ModelNickname from '../models/nickname';
import { insertNickname } from '../interface/nickname';
import { insert } from '../validator/nickname';

class Nickname {


    async set(data: insertNickname): Promise<void> {
        const validate = insert.validate(data);

        if(validate.error) {
            throw validate.error;
        }

        await ModelNickname.set(data);
    }
}

export default new Nickname;