# WHAT IT DOES
This is a crawling program that sends you a list of urls of certain websites by sms ior email.
Setting batch in your local makes it automatic for you to search something you need, which saves your precious time and avoid wasting your time on looking for something.

# Prequisite
You'll need to create an API to receive sms or email.
You can easily do so by using aws Api gateway & Amazon SNS.
[Reference](https://www.antstack.com/blog/connect-api-gateway-to-sns/)

# Corresponding services
* [Flatmates](https://flatmates.com.au/)
* [Gumtree](https://gumtree.com.au/) * more specificaly for cars

# Command
## Flatmates
You pass three arguments below.
1. service name : flatmates
2. place : melbourne
3. sort : true / false

```ex.) node app.js flatmates melbourne true```

## Gumtree
1. service name : gumtree
2. keyword : your item
3. code : your item code in url
4. type : your item type
5. distance : distance from your area ex.) r50 * within 50km
6. category : your category
7. area : your area
8. price : your budget for your item ex.) 5000.00__15000.00 * more than 5,000 AUD, less than 15,000 AUD
9. sort : rank, price_asc, price_desc, closest, carmileageinkms_a(low to high), carmileageinkms_d(high to low), caryear_a(low to high), caryear_d(high to low) * defaul is most recent


```ex.) node app.js gumtree ```

# Others
## Batch settings
1. Create script.command file
In your command file
```cd **${YOUR_PROJECT_DIRECTORY}**
node app.js **${YOUR_SERVICE_AND_CONDITIONS}**
```
2. Schedule batch settings
[Reference](https://betterprogramming.pub/how-to-execute-a-cron-job-on-mac-with-crontab-b2decf2968eb)
