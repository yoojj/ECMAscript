# Node Batch Module


- node-schedule
- node-cron



## node-schedule

```bash
$ npm install node-schedule
```

```js
const schedule = require('node-schedule');

let count = 0;

//[second] [minute] [hour] [day of month] [month] [day]
const job = schedule.scheduleJob('10 * * * * *', () => {

    count += 1;
    console.log('batch!');

    if(count == 5)
        job.cancel();

});
```



[top](#)
