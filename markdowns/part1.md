# SQL code injection

This is a little demonstration of a SQL injection in a simple login application. In our example, a database as been provisionned with an admin user. Their credentials are:
```
username: admin
password: admin123
```

In theory it should only be possible to login in the application using this credential, but if the application is not safely programmed, it is possible to penetrate in the system as an admin user without knowing the admin password.

Once you have played a bit with the login application and tried to used valid and invalid credential, use the following values

```
username: admin
password: unknown' or '1'='1
```

And observe carrefully the value of the SQL query displayed in the log section.

@[Run application]({"stubs": ['app.js', 'run.sh', 'index.html', 'style.css'], "command": "/bin/bash /project/target/run.sh"})
