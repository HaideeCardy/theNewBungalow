import {faker} from '@faker-js/faker';

const generateTestimonials = (qty) => {
  let testimonials = [];
  for (let i = 0; i < qty; i++) {
    testimonials.push({
      avatar: faker.image.people(150, 150),
      completeName: faker.name.findName(),
      jobTitle: faker.address.city(),
      desc: faker.lorem.lines(),
    });
  }
  return testimonials;
};

export default generateTestimonials;
