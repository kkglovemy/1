/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m72vyx8m8j8ikk9",
    "created": "2024-10-08 11:28:36.349Z",
    "updated": "2024-10-08 11:28:36.349Z",
    "name": "basicQuestions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zpdn6ej9",
        "name": "question",
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
        "id": "0bbw2u3s",
        "name": "type",
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
  const collection = dao.findCollectionByNameOrId("m72vyx8m8j8ikk9");

  return dao.deleteCollection(collection);
})
