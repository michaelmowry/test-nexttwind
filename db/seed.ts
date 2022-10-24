/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from '@prisma/client';
import { hash } from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hash('Pass@word1');

  await prisma.user.upsert({
    where: {
      id: 'cl95t2gch00000k9fudd6b9b2',
    },
    create: {
      id: 'cl95t2gch00000k9fudd6b9b2',
      name: 'Michael Mowry',
      email: 'michaelmowry@yahoo.com',
      image: 'https://picsum.photos/id/433/100',
      password: hashedPassword,
    },
    update: {
      id: 'cl95t2gch00000k9fudd6b9b2',
      name: 'Michael Mowry',
      email: 'michaelmowry@yahoo.com',
      image: 'https://picsum.photos/id/433/100',
      password: hashedPassword,
    },
  });
  await prisma.problem.upsert({
    where: {
      id: 'cl95t2gch00000k9fudd6b932',
    },
    create: {
      id: 'cl95t2gch00000k9fudd6b932',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/1011/300',
      headline: 'Solve my failing marriage',
      description:
        'My two year marriage is failing due to recent disagreements over money and parenting decisions.  How can I restore my marriage as the source of happiness and security that it used to be?',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    update: {
      id: 'cl95t2gch00000k9fudd6b932',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/1011/300',
      headline: 'Solve my failing marriage',
      description:
        'My two year marriage is failing due to recent disagreements over money and parenting decisions.  How can I restore my marriage as the source of happiness and security that it used to be?',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
  });
  await prisma.problem.upsert({
    where: {
      id: 'cl95t2gch00000k9fudd6b933',
    },
    create: {
      id: 'cl95t2gch00000k9fudd6b933',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/371/300',
      headline: 'Solve community parking problem',
      description:
        'Our townhome community has 368 units and only 178 parking spots available for guests.  How can we implement a parking policy that is fair and equitable for all members of the community?',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    update: {
      id: 'cl95t2gch00000k9fudd6b933',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/371/300',
      headline: 'Solve community parking problem',
      description:
        'Our townhome community has 368 units and only 178 parking spots available for guests.  How can we implement a parking policy that is fair and equitable for all members of the community?',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
  });
  await prisma.problem.upsert({
    where: {
      id: 'cl95t2gch00000k9fudd6b934',
    },
    create: {
      id: 'cl95t2gch00000k9fudd6b934',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/1/300',
      headline: 'Solve global inflation',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. ',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    update: {
      id: 'cl95t2gch00000k9fudd6b934',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/1/300',
      headline: 'Solve global inflation',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. ',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
  });
  await prisma.problem.upsert({
    where: {
      id: 'cl95t2gch00000k9fudd6b935',
    },
    create: {
      id: 'cl95t2gch00000k9fudd6b935',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/1028/300',
      headline: 'Solve global warming',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. ',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    update: {
      id: 'cl95t2gch00000k9fudd6b935',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/1028/300',
      headline: 'Solve global warming',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. ',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
  });
  await prisma.problem.upsert({
    where: {
      id: 'cl95t2gch00000k9fudd6b936',
    },
    create: {
      id: 'cl95t2gch00000k9fudd6b936',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/238/300',
      headline: 'Solve meeting a soulmate in a big city',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. ',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    update: {
      id: 'cl95t2gch00000k9fudd6b936',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/238/300',
      headline: 'Solve meeting a soulmate in a big city',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. ',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
  });
  await prisma.problem.upsert({
    where: {
      id: 'cl95t2gch00000k9fudd6b937',
    },
    create: {
      id: 'cl95t2gch00000k9fudd6b937',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/169/300',
      headline: 'Solve the political divide between my best friend and I',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. ',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
    update: {
      id: 'cl95t2gch00000k9fudd6b937',
      userId: 'cl95t2gch00000k9fudd6b9b2',
      imageURL: 'https://picsum.photos/id/169/300',
      headline: 'Solve the political divide between my best friend and I',
      description:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. ',
      background:
        'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
