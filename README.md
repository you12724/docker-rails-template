```
docker-compose build
docker-compose run web rails new . --force --database=mysql --skip-bundle
```

`Gemfile`に
```
gem 'unicorn'
```
追記し、

``` unicorn.rb配置
cp docker/rails/unicorn.rb app_name/config/
```

```
cat << EOS > app_name/config/database.yml
default: &default
  adapter: mysql2
  encoding: utf8
  pool: 5
  username: root
  password: <%= ENV['MYSQL_ROOT_PASSWORD'] %>
  host: db
  socket: /tmp/mysql.sock

development:
  <<: *default
  database: app_development

test:
  <<: *default
  database: app_test
EOS
```

```
docker-compose build
docker-compose run web rails g scaffold user name:string age:integer
docker-compose up
Ctrl + C
docker-compose run web rake db:create
docker-compose run web rake db:migrate
docker-compose up -d
```
