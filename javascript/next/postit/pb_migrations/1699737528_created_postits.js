/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "9vvqdxjvkfsmzfx",
    "created": "2023-11-11 21:18:48.484Z",
    "updated": "2023-11-11 21:18:48.484Z",
    "name": "postits",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g2mp5fcz",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ueq2pqym",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9vvqdxjvkfsmzfx");

  return dao.deleteCollection(collection);
})
