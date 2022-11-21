# info_notification
info_notification
# Prequisite
You'll need to create an API to receive sms or email.
You can easily do so by using aws Api gateway & Amazon SNS.

# WHAT IT DOES
You'll receive a list of urls from [flatmates](https://flatmates.com.au/) by sms or email.

# Command
You pass three arguments below.

1. service name : Currently only faltmates is available

2. condition : Place

3. sort : TRUE / FALSE

``` ex.) node app.js flatemates melbourne true ```
