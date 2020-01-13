# node orm module


- [sequelize](#sequelize)
- persistencejs
- bookshelf
- knex
- node-orm (https://github.com/dresende/node-orm2)



## sequelize

```bash
# postgresql -- pg pg-hstore
# sqlite -- sqlite3
$ npm install mysql2 sequelize -g
```


```js
// test.js
const { user, board } = require('./models');

user.findAll({raw : true}).then( (result) => {
    console.log(result.dataValues);
});



// models/index.js
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'password',
    {
        host : '127.0.0.1',
        dialect : 'mysql',
        logging : false,
    }
);

const db = {};

fs.readdirSync(__dirname)
    .filter( (file) => {
        return (file.indexOf('.' !== 0)) && (file !== 'index.js');

    }).forEach( (file) => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;

    });

Object.keys(db).forEach( (modelName) => {
    if('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});


db.sql = sequelize;
db.S = Sequelize;

sequelize.sync();

module.exports = db;



// models/user.js
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id : {
            type : DataTypes.INTEGER(10),
            primaryKey : true,
            autoIncrement : true,
            allowNull : false,
        },
        name : {
            type : DataTypes.STRING(255),
            allowNull : false,
        },

    }, {
        tableName : 'user',
        freezeTableName : false,
        timestamps : true,
        paranoid : false,
    });

    user.associate = function(model){
        user.hasMany(model.board);
        //user.hasMany(model.board, {foreignKey : ''});
    };

    return user;
};


// models/board.js
module.exports = (sequelize, DataTypes) => {
    const board = sequelize.define('board', {
        id : {
            type : DataTypes.INTEGER(10),
            primaryKey : true,
            autoIncrement : true,
            allowNull : false,
        },
        content : {
            type : DataTypes.TEXT,
        }
    });

    board.associate = function(model){
        board.belongsTo(model.user);
        //board.belongsTo(model.user, {foreignKey:'', targetKey: ''});
    };

    return board;
};
```



메소드 | 설명
---|---
sequelize.define()       | 모델 정의
sequelize.create()       | 데이터 생성
sequelize.findOrCreate() | 테이블에서 데이터를 조회하고 없으면 생성
sequelize.bulkCreate()   | 여러 데이터 생성
sequelize.findOne()      | 데이터 반환
sequelize.find()         | 가장 상위 데이터 하나만 반환  
sequelize.findAll()      | 모든 데이터 반환
sequelize.findById()     | 아이디 값을 이용해 데이터 반환
sequelize.findByPk()     | pk 값을 이용해 데이터 반환
sequelize.findAndCountAll() | 모든 데이터와 데이터 개수 반환
sequelize.update()       | 데이터 수정
sequelize.destroy()      | 데이터 삭제
A.hasOne(B, {})      | 1 : 1 관계
A.belongsTo(B, {})   | 1 : 1 관계
A.hasMany(B, {})     | 1 : N 관계
A.belongsToMany(B, {}) | N : M 관계


**타입**   
https://sequelize.org/master/manual/data-types.html


옵션 | 설명
---|---
$gt : 10    | > 10
$gte : 10   | >= 10
$lt : 10    | < 10
$lte : 10   | <= 10
$eq : 10    | == 10
$ne : 10    | != 10
$and : [{A:1}, {A: 5}]  | A = 1 and A = 5
$or : [{A:1}, {A: 5}]   | A = 1 or A = 5
$between : [1, 5]       | between 1 and 5
$notBetween : [1, 5]    | not between 1 and 5


```js
// sequelize.findOrCreate()
sequelize.findOrCreate({
    where:  { 컬럼 : '값' },   // 해당 데이터 조회
    default : { 컬럼 : '값' }, // 해당 데이터 생성

}).spread((data, created)) => {
});


// 데이터 조회 옵션  
sequelize.findAll({
    attributes : ['컬럼'],  

    limit : 1,
    offset : 5,

    order : [ ['컬럼', 'desc'] ],

    where : { 컬럼 : { like : '%keyword%' }},
    where : { 컬럼 : { $between: [1, 5] }},

    include : [{model: ''}],
});



// sequelize.update()
sequelize.update({
    컬럼 : '값'
}, {
    where : { 컬럼 : '값' }

}).then( () => {});
```



### sequelize-cli

```bash
# sequelize-cli
$ sudo npm install mysql2 sequelize sequelize-cli -g
$ sequelize init


# 모델 생성  
$ sequelize model:generate --name 테이블 --attributes 컬럼:속성, 컬럼:속성

# 마이그레이션 - DB에 테이블 생성
$ sequelize db:migrate

# 마이그레이션 취소
$ sequelize db:migrate:undo:all

## 특정 마이그레이션 취소
$ sequelize db:migrate:undo --to XXXXXXXXXXXXXX-create-테이블.js

# 시드
$ sequelize seed:generate --name 테이블

## seeders 폴더에 생성된 파일에 데이터 작성
### up -- 생성할 데이터
### down -- 삭제할 데이터  
return queryInterface.bulkInsert('테이블', [{
    컬럼: '',
    createdAt: new Date(),
    updatedAt: new Date(),
}], {});

# 반영
$ sequelize db:seed:all

# 최근 시드 취소
$ sequelize db:seed:undo

## 모든 시드 취소
$ sequelize db:seed:undo:all

## 특정 시드 취소
$ sequelize db:seed:undo --seed name-of-seed-as-in-data


# 구조
프로젝트/
├── config        # DB 연결 설정 파일
├── migrations    # 마이그레이션 파일
├── models        # 모델 파일
└── seeders       # 시드 파일
```
