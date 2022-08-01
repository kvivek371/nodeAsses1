show dbs
admin           0.000GB
config          0.000GB
human_resource  0.000GB
local           0.000GB
school          0.000GB
teacher         0.000GB
> use human_resource
switched to db human_resource
db.employee.insertMany([{"firstName" : "sao", "lastName" : "avika", "salary" : 30000, "department" : "sales", "lastCompany" : "Y", "lastSalary" : 15000, "overallexp" : 2, "contactInfo" : 1234567860, "yearGrad" : 2015, "gradstream" : "CSE" },{"firstName" : "Jame", "lastName" : "roh", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallexp" : 2, "contactInfo" : 1234567890, "yearGrad" : 2019, "gradstream" : "EEE" },{"firstName" : "Rohan", "lastName" : "Jame", "salary" : 30000, "department" : "Technical", "lastCompany" : "Y", "lastSalary" : 15000, "overallexp" : 1, "contactInfo" : 1234567860, "yearGrad" : 2015, "gradstream" : "CSE" },{"firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 20000, "overallexp" : 1, "contactInfo" : 1234567890, "yearGrad" : 2019, "gradstream" : "ECE" }])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62e2abe49e29928a47fbfba0"),
                ObjectId("62e2abe49e29928a47fbfba1"),
                ObjectId("62e2abe49e29928a47fbfba2"),
                ObjectId("62e2abe49e29928a47fbfba3")
        ]
}
> db.employee.find()
{ "_id" : ObjectId("62e28f87c1dc828e1abbc2cb"), "firstName" : "John" }
{ "_id" : ObjectId("62e2958f39735c4b7355b8b3"), "firstName" : "John" }
{ "_id" : ObjectId("62e2987e123e67351900b950"), "firstName" : "John", "lastName" : "Doe", "salary" : 2500, "department" : "HR", "lastCompany" : "X", "lastSalary" : 10000, "overallexp" : 2, "contactInfo" : 1234567890, "yearGrad" : 2016, "gradstream" : "CSE" }
{ "_id" : ObjectId("62e29c3a123e67351900b951"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : 30000, "department" : "Technical", "lastCompany" : "Y", "lastSalary" : 15000, "overallexp" : 1, "contactInfo" : 1234567860, "yearGrad" : 2015, "gradstream" : "CSE" }
{ "_id" : ObjectId("62e29f14123e67351900b952"), "firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 20000, "overallexp" : 1, "contactInfo" : 1234567890, "yearGrad" : 2019, "gradstream" : "ECE" }
{ "_id" : ObjectId("62e2abe49e29928a47fbfba0"), "firstName" : "sao", "lastName" : "avika", "salary" : 30000, "department" : "sales", "lastCompany" : "Y", "lastSalary" : 15000, "overallexp" : 2, "contactInfo" : 1234567860, "yearGrad" : 2015, "gradstream" : "CSE" }
{ "_id" : ObjectId("62e2abe49e29928a47fbfba1"), "firstName" : "Jame", "lastName" : "roh", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallexp" : 2, "contactInfo" : 1234567890, "yearGrad" : 2019, "gradstream" : "EEE" }
{ "_id" : ObjectId("62e2abe49e29928a47fbfba2"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : 30000, "department" : "Technical", "lastCompany" : "Y", "lastSalary" : 15000, "overallexp" : 1, "contactInfo" : 1234567860, "yearGrad" : 2015, "gradstream" : "CSE" }
{ "_id" : ObjectId("62e2abe49e29928a47fbfba3"), "firstName" : "Jame", "lastName" : "Doe", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 20000, "overallexp" : 1, "contactInfo" : 1234567890, "yearGrad" : 2019, "gradstream" : "ECE" }

db.employee.find().pretty()
{ "_id" : ObjectId("62e28f87c1dc828e1abbc2cb"), "firstName" : "John" }
{ "_id" : ObjectId("62e2958f39735c4b7355b8b3"), "firstName" : "John" }
{
        "_id" : ObjectId("62e2987e123e67351900b950"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : 2500,
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : 10000,
        "overallexp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2016,
        "gradstream" : "CSE"
}
{
        "_id" : ObjectId("62e29c3a123e67351900b951"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : 30000,
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallexp" : 1,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradstream" : "CSE"
}
{
        "_id" : ObjectId("62e29f14123e67351900b952"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallexp" : 1,
        "contactInfo" : 1234567890,
        "yearGrad" : 2019,
        "gradstream" : "ECE"
}
{
        "_id" : ObjectId("62e2abe49e29928a47fbfba0"),
        "firstName" : "sao",
        "lastName" : "avika",
        "salary" : 30000,
        "department" : "sales",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallexp" : 2,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradstream" : "CSE"
}
{
        "_id" : ObjectId("62e2abe49e29928a47fbfba1"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 15000,
        "overallexp" : 2,
        "contactInfo" : 1234567890,
        "yearGrad" : 2019,
        "gradstream" : "EEE"
}
{
        "_id" : ObjectId("62e2abe49e29928a47fbfba2"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : 30000,
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : 15000,
        "overallexp" : 1,
        "contactInfo" : 1234567860,
        "yearGrad" : 2015,
        "gradstream" : "CSE"
}
{
        "_id" : ObjectId("62e2abe49e29928a47fbfba3"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : 35000,
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : 20000,
        "overallexp" : 1,
        "contactInfo" : 1234567890,
        "yearGrad" : 2019,
        "gradstream" : "ECE"
}

db.employee.find({overallexp:{$gt: 2 }})
> db.employee.find({$and:[{yearGrad: {$gt: 2015 } },{overallexp: {$gt: 1} }] })
{ "_id" : ObjectId("62e2987e123e67351900b950"), "firstName" : "John", "lastName" : "Doe", "salary" : 2500, "department" : "HR", "lastCompany" : "X", "lastSalary" : 10000, "overallexp" : 2, "contactInfo" : 1234567890, "yearGrad" : 2016, "gradstream" : "CSE" }
{ "_id" : ObjectId("62e2abe49e29928a47fbfba1"), "firstName" : "Jame", "lastName" : "roh", "salary" : 35000, "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : 15000, "overallexp" : 2, "contactInfo" : 1234567890, "yearGrad" : 2019, "gradstream" : "EEE" }

db.employee.updateMany({salary: {$gt:70000}},{$set: {salary: 65000}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
> db.employee.deleteMany({lastCompany: "Y" })
{ "acknowledged" : true, "deletedCount" : 3 }
