import {faker} from '@faker-js/faker';

const generateTestimonials = (qty) => {
  let testimonials = [];
  for (let i = 0; i < qty; i++) {
    testimonials.push({
      avatar: faker.image.avatar(),
      completeName: faker.name.findName(),
      city: faker.address.city(),
      desc: faker.lorem.sentences(2),
    });
  }
  return testimonials;
};

export default generateTestimonials;
