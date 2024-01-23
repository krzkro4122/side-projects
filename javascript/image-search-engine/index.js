import weaviate from 'weaviate-ts-client';
import { readFileSync, readdirSync, writeFileSync } from 'fs';

const client = weaviate.client({
  scheme: 'http',
  host: 'localhost:8080',
});

const response = await client
  .schema
  .getter()
  .do();

console.log(JSON.stringify(response, null, 2));

// Create a new schema

const schemaConfig = {
  'class': 'Meme',
  'vectorizer': 'img2vec-neural',
  'vectorIndexType': 'hnsw',
  'moduleConfig': {
    'img2vec-neural': {
      'imageFields': [
        'image'
      ]
    }
  },
  'properties': [
    {
      'name': 'image',
      'dataType': ['blob'],
    },
    {
      'name': 'text',
      'dataType': ['string'],
    }
  ]
}

await client.schema
  .classCreator()
  .withClass(schemaConfig)
  .do();


// Load the images

const imgFiles = readdirSync('./img');

const promises = imgFiles.map(async (imgFile) => {
  const b64 = Buffer.from(`./img/${imgFile}`).toString('base64');

  await client.data.creator()
    .withClassName('Meme')
    .withProperties({
      image: b64,
      text: imgFile.split('.')[0].split('_').join(' ')
    })
    .do();
});

await Promise.all(promises);

// Test image

const test = Buffer.from( readFileSync('./test.jpg') ).toString('base64');

const resImage = await client.graphql.get()
  .withClassName('Meme')
  .withFields(['image'])
  .withNearImage({ image: test })
  .withLimit(1)
  .do();

const result = resImage.data.Get.Meme[0].image;
writeFileSync('./result.jpg', result, 'base64');
