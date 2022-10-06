{
	"info": {
		"_postman_id": "afd1d6af-2e56-42a6-95c8-14253511499d",
		"name": "Test",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "EP_1",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/get_method?name=Elena&age=31",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"get_method"
					],
					"query": [
						{
							"key": "name",
							"value": "Elena"
						},
						{
							"key": "age",
							"value": "31"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_2", 
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "Elena",
							"type": "text"
						},
						{
							"key": "age",
							"value": "31",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "4000",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://162.55.220.72:5005/user_info_3",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"user_info_3"
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_3",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_1?name=Elena&age=31&weight=56",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_1"
					],
					"query": [
						{
							"key": "name",
							"value": "Elena"
						},
						{
							"key": "age",
							"value": "31"
						},
						{
							"key": "weight",
							"value": "56"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_4",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_2?name=Elena&age=31&salary=4000",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_2"
					],
					"query": [
						{
							"key": "name",
							"value": "Elena"
						},
						{
							"key": "age",
							"value": "31"
						},
						{
							"key": "salary",
							"value": "4000"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_5",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_3?name=Elena&age=31&salary=4000",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_3"
					],
					"query": [
						{
							"key": "name",
							"value": "Elena"
						},
						{
							"key": "age",
							"value": "31"
						},
						{
							"key": "salary",
							"value": "4000"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_6",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_4?name=Elena&age=31&salary=4000",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_4"
					],
					"query": [
						{
							"key": "name",
							"value": "Elena"
						},
						{
							"key": "age",
							"value": "31"
						},
						{
							"key": "salary",
							"value": "4000"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_7",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "Elena",
							"type": "text"
						},
						{
							"key": "age",
							"value": "31",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "4000",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://162.55.220.72:5005/user_info_2",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"user_info_2"
					]
				}
			},
			"response": []
		}
	]
}