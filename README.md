# mysqldoc

mysql table documents output html

## Usage


```sh
npm i -g mysqldoc

 or

npm i --save-dev mysqldoc
```

Run the output reports
```sh
$ mysqldoc --database test_db

$ ls mysqldoc/
index.html

```

## options

|opyions|Description|default|
|:---|:---|:---|
|user|mysql user name|root|
|password|mysql password|""|
|host|mysql connect host|0.0.0.0|
|port|mysql connect port|3306|
|database|mysql database name|test|
|output| document output path|mysqldoc|
