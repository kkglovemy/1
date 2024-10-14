/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jcxy6irxbi63xdp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oxto8zng",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sk9fqdta",
    "name": "features",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jcxy6irxbi63xdp")

  // remove
  collection.schema.removeField("oxto8zng")

  // remove
  collection.schema.removeField("sk9fqdta")

  return dao.saveCollection(collection)
})
