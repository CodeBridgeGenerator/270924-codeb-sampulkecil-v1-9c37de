
import { faker } from "@faker-js/faker";
export default (user,count,LatihanIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
Latihan: LatihanIds[i % LatihanIds.length],
Pelulus: faker.lorem.sentence(""),
Status: faker.lorem.sentence(""),
Komen: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
