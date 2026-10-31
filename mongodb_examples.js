use library_portfolio;
db.loans.insertOne({_id:"loan-1001",loanId:1001,member:{memberId:1,name:"Amina Yusuf"},items:[{bookId:1,title:"Database Systems",quantity:1}],loanDate:"2026-10-01",dueDate:"2026-10-15",status:"overdue",events:[{type:"issued",at:ISODate("2026-10-01T10:00:00Z"),staffId:1}]});
db.loans.createIndex({"member.memberId":1,status:1});
db.loans.find({status:"overdue"},{loanId:1,member:1,dueDate:1,_id:0});
db.loans.aggregate([{$unwind:"$items"},{$group:{_id:"$items.title",quantityLoaned:{$sum:"$items.quantity"}}},{$sort:{quantityLoaned:-1}}]);
