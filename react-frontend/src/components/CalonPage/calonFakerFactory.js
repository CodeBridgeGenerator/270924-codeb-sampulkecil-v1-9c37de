
import { faker } from "@faker-js/faker";
export default (user,count,LatihanIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
Pengguna: faker.lorem.sentence(""),
Latihan: LatihanIds[i % LatihanIds.length],
Status: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
